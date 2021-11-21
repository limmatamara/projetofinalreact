import { useEffect} from "react";
import Card from "../Components/Card.js";
import UseApi from "../UseApi.js";

const Politic = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('Politic');
  }, []);

  return (
    <>
      <h1>Política</h1>
      <Card news={news}/>
    </>
  );
}

export default Politic;