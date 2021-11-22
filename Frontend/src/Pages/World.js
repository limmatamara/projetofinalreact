import { useEffect} from "react";
import Card from "../Components/Card.js";
import UseApi from "../UseApi.js";

const World = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('world');
  }, []);

  return (
    <>
      <h1>Mundo</h1>
      <Card news={news}/>
    </>
  );
}

export default World;