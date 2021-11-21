import { useEffect} from "react";
import UseApi from "../UseApi.js";

const World = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('World');
  }, []);

  return (
    <>
    <h1>Mundo</h1>
    </>
  );
}

export default World;