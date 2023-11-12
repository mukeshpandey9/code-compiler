import React from "react";
import { useCompile } from "../contexts/CompileContext";

function StdInput() {
  const { customInput, setCustomInput } = useCompile();

  return (
    <div>
      <textarea
        rows={window.innerWidth > 650 ? "5" : "2"}
        aria-expanded="false"
        className="w-full bg-[#1B1B1B] p-5 text-white rounded-lg"
        placeholder="Custom input here..."
        value={customInput}
        onChange={(e) => {
          setCustomInput(e.target.value);
          console.log(customInput);
        }}
      />
    </div>
  );
}

export default StdInput;
