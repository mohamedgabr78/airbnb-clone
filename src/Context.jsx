import { createContext, useContext } from "react";

export const airContext = createContext();
export function useAir() {
  return useContext(airContext);
}
