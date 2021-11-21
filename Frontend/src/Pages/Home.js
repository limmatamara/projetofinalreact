import { useEffect} from "react";
import UseApi from "../UseApi.js";
import Card from "../Components/Card.js";

const Home = () => {

  const { news, GetApi } = UseApi();

  useEffect(() => {
      GetApi('Home');
  }, []);

  return (
    <>
      <h1>Página Inicial</h1>
      <Card news={news}/>
    </>
  );
}

export default Home;
