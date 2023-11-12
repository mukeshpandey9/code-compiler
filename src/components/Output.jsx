import React from "react";
import { useCompile } from "../contexts/CompileContext";

function Output() {
  const { compileOutput, compileError } = useCompile();
  return (
    <>
      <div className="bg-[#1b1b1b] text-white h-72 max-h-80  rounded-lg p-5 overflow-y-auto">
        <h1 className="text-gray-200 font-bold font-sans">Output: </h1>
        {compileError ? (
          <pre className="mt-5 w-full text-red-600 font-mono">
            {compileError}
          </pre>
        ) : (
          <pre className="mt-5 text-green-600 font-mono">{compileOutput}</pre>
        )}
      </div>
    </>
  );
}

export default Output;
