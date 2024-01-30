import { Editor } from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import { languageOptions } from "../constants/languageOptions";
import RunBtn from "./RunBtn";

function CodeEditor() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState({
    id: 63,
    name: "javascript",
    boilerPlate: "",
  });

  



  const handleLanguageChange = (e) => {
    var selectedLanguageObject = languageOptions.find(
      (language) => language.id === parseInt(e.target.value)
    );

    // console.log("Boiler Plate : ", selectedLanguageObject.boiler);

    setLanguage({
      id: selectedLanguageObject.id,
      name: selectedLanguageObject.value,
      boilerPlate: selectedLanguageObject.boiler,
    });
  };

  // Boilerplate Logic

  useEffect(() => {
    setCode(language.boilerPlate);
  }, [language]);

  const resetCode = ()=>{
    setCode(language.boilerPlate);
  }

  // Editor Options

  const editorOptions = {
    fontSize: window.innerWidth > 680 ? 18 : 14,
    selectOnLineNumbers: true,
    automaticLayout: true,
    snippetSuggestions: "top", // Enable code snippets at the top
  };

  return (
    <>
      <div className="rounded-lg bg-[#1b1b1b]">
        <div className="head flex justify-between items-center rounded-lg px-2 sm:px-6 h-14">
          <select
            name="language"
            className="bg-[#2e2e2e] rounded-lg h-10 p-1 text-white"
            onChange={handleLanguageChange}
          >
            {languageOptions?.map((lang) => (
              <option key={lang?.id} value={lang?.id}>
                {lang?.name}
              </option>
            ))}
          </select>

          <div className="flex gap-5">
          <button className="bg-red-500 text-white h-10 rounded-md border border-white px-3" type="button" onClick={resetCode}>Reset</button>

<RunBtn code={code} language_id={language?.id} />
          </div>
        </div>

        <Editor
          className="text-xl "
          height={window.innerWidth > 680 ? "78vh" : "50vh"}
          width="100%"
          language={language?.name}
          defaultValue={`// Write your code here\n`}
          theme="vs-dark"
          value={code}
          options={editorOptions}
          onChange={(e) => setCode(e)}
        />
      </div>
    </>
  );
}

export default CodeEditor;
