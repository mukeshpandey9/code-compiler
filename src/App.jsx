import { useState } from "react";
import "./App.css";
import { CompileProvider } from "./contexts/CompileContext";
import HomePage from "./pages/HomePage";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  // const [compileToken, setCompileToken] = useState("");
  const [compileOutput, setCompileOutput] = useState("");
  const [compileError, setCompileError] = useState("");

  // Loading State
  const [processing, setProcessing] = useState(false);

  // Set the custom input
  const [customInput, setCustomInput] = useState("");

  // Send The compile request

  const compileRequest = async ({ code, language_id }) => {
    try {
      setProcessing(true);
      setCompileError("");
      setCompileOutput("");
      // setCompileToken("");
      code = btoa(code);

      // console.log("Source code: ", code);

      const options = {
        method: "POST",
        url: import.meta.env.VITE_URL,
        params: {
          base64_encoded: "true",
          fields: "*",
        },
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
          "X-RapidAPI-Key": import.meta.env.VITE_OTHER_RAPIDAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
        data: {
          language_id: language_id,
          source_code: code,
          stdin: btoa(customInput),
        },
      };
      const response = await axios.request(options).then((response) => {
        const compileToken = response.data?.token;
        compileResponse(compileToken);
      });

      // compileResponse(compileToken);
    } catch (error) {
      console.error(error.message);
      setProcessing(false);
      alert("Too many Requests!.. \n Please try after some time");
    }
  };

  // Get the compile Output

  const compileResponse = async (token) => {
    try {
      const options = {
        method: "GET",
        url: import.meta.env.VITE_URL + "/" + token,
        params: {
          base64_encoded: "true",
          fields: "*",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_OTHER_RAPIDAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      };

      // console.log("compileResponse Called");
      let response = await axios.request(options);

      // We have some response

      let statusId = response.data.status?.id;
      // console.log(statusId);
      if (statusId === 1 || statusId === 2) {
        // Still in processing
        setTimeout(() => {
          compileResponse(token);
        }, 2000);
        return;
      }

      if (statusId === 429) {
        setProcessing(false);
        return alert("Too many Requests!.. \n Please try after some time");
      }

      setProcessing(false);
      // If any error occurs

      if (response?.data?.stderr || response.data?.compile_output) {
        setCompileError(
          atob(response?.data?.stderr || response.data?.compile_output)
        );
        console.log("Compile Error: ", atob(response?.data?.stderr));
      } else {
        // Set the output
        setCompileOutput(atob(response?.data?.stdout));
        // console.log("Compile Output: ", atob(response?.data?.stdout));
        return;
      }
    } catch (error) {
      console.error(error);
      setProcessing(false);
    }
  };

  return (
    <CompileProvider
      value={{
        compileRequest,
        compileResponse,
        compileOutput,
        compileError,
        customInput,
        setCustomInput,
      }}
    >
      {processing && <Loading />}
      <HomePage />
    </CompileProvider>
  );
}

export default App;
