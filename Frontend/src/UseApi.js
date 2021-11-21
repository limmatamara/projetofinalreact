import { useContext } from "react";
import { sectorContext } from "./Context/ApiContext";

function UseApi () {
  const value = useContext(sectorContext);

  return value;
}

export default UseApi;