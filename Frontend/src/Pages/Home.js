import { useEffect} from "react";
import UseApi from "../UseApi.js";

const Home = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('Home');
  }, []);

  return (
    <>
    <h1>Página Inicial</h1>
    </>
  );
}

export default Home;
