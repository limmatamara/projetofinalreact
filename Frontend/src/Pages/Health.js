import { useEffect} from "react";
import UseApi from "../UseApi.js";

const Health = () => {

  const { news, GetApi} = UseApi();

  useEffect(() => {
      GetApi('Health');
  }, []);

  return (
    <>
    <h1>Saúde</h1>
    </>
  );
}

export default Health;