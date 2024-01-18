import DataContext from "@/context/useContex";
import { useContext } from "react";

const useData = () => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error("useData can only be used inside a DataContext provider.");
  }

  return dataContext;
};

export default useData;
