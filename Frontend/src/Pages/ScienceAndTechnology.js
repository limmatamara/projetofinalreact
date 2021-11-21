import { useEffect} from "react";
import UseApi from "../UseApi.js";

const ScienceAndTechnology = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('ScienceAndTechnology');
  }, []);

  return (
    <>
    <h1>Ciência e Tecnologia</h1>
    </>
  );
}

export default ScienceAndTechnology;