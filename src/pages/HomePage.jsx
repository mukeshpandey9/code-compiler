import React from "react";
import Header from "../components/Header";
import CodeEditor from "../components/CodeEditor";
import StdInput from "../components/StdInput";
import Output from "../components/Output";

function HomePage() {
  return (
    <div className="bg-[#131212] w-full h-full">
      <Header />
      <div className="flex flex-col md:flex-row py-4 gap-8 md:gap-0">
        <div className=" md:w-6/12 px-3 w-full">
          <CodeEditor />
        </div>
        <div className="md:w-6/12 w-full h-full  md:pe-10 md:ps-3 px-4">
          <StdInput />
          <Output />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
