import { useEffect} from "react";
import Card from "../Components/Card.js";
import UseApi from "../UseApi.js";

const Science = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('science');
  }, []);

  return (
    <>
      <h1>Ciência e Tecnologia</h1>
      <Card news={news}/>
    </>
  );
}

export default Science;