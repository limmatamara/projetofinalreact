import { useEffect} from "react";
import UseApi from "../UseApi.js";
import Card from "../Components/Card.js";

const Health = () => {

  const { news, GetApi} = UseApi();

  useEffect(() => {
      GetApi('Health');
  }, []);

  return (
    <>
      <h1>Saúde</h1>
      <Card news={news}/>
    </>
  );
}

export default Health;