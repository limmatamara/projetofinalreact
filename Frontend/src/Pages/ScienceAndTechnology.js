import { useEffect} from "react";
import Card from "../Components/Card.js";
import UseApi from "../UseApi.js";

const ScienceAndTechnology = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('ScienceAndTechnology');
  }, []);

  return (
    <>
      <h1>Ciência e Tecnologia</h1>
      <Card news={news}/>
    </>
  );
}

export default ScienceAndTechnology;