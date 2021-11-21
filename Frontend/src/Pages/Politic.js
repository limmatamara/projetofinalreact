import { useEffect} from "react";
import UseApi from "../UseApi.js";

const Politic = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('Politic');
  }, []);

  return (
    <>
    <h1>Política</h1>
    </>
  );
}

export default Politic;