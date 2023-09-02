import { useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "utils/shuffleArray";

function useGetData(url: string) {
  const getData = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data.data.results;

      const shuffleData = shuffleArray(data)

      return shuffleData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //   Call the fetch function
    getData();
  }, [url, getData]);

  return { getData };
}

export default useGetData;
