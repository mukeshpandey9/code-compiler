import { createContext, useContext } from "react";

export const CompileContext = createContext({
  code: "",
  language_id: "",
  customInput: "",
  compileOutput: "",
  compileError: "",
  compileRequest: () => {},
  compileResponse: () => {},
  setCustomInput: () => {},
});

export const useCompile = () => {
  return useContext(CompileContext);
};

export const CompileProvider = CompileContext.Provider;
