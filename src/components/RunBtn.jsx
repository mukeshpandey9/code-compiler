import React from "react";
import { useCompile } from "../contexts/CompileContext";

function RunBtn({ code, language_id }) {
  
  const { compileRequest, compileResponse } = useCompile();

  const handleCompile = () => {
    compileRequest({ code, language_id });
  };
  return (
    <button
      className="text-white h-10 rounded-lg px-6  bg-green-600"
      onClick={handleCompile}
    >
      Run
    </button>
  );
}

export default RunBtn;
