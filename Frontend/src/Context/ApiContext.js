import { useState, createContext } from "react";
import Api from '../Api';

const sectorContext = createContext();

const SectorContextProvider = ({children}) => {

  const apiKey = 'Yi7dFtuWFQcFd308gQnTmIYp6Grh3e6G';

  const [news, setNews] = useState([]);

  const GetApi = async section => {
    const { data } = await Api.get(`/${section}.json?api-key=${apiKey}`);
        const filterData = data.results.filter(e => e.multimedia !== null);
        setNews(filterData);
  }

  return (
      <sectorContext.Provider value={{ news, GetApi  }}>
          {children}
      </sectorContext.Provider>
  );
}

export {sectorContext, SectorContextProvider}