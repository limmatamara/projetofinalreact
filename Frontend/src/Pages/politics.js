import { useEffect} from "react";
import Card from "../Components/Card.js";
import UseApi from "../UseApi.js";

const Politics = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('politics');
  }, []);

  return (
    <>
      <h1>Política</h1>
      <Card news={news}/>
    </>
  );
}

export default Politics;