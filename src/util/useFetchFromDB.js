import React, { useEffect, useState } from "react";
import { IpssContext } from "../context/context";

const useFetchFromDB = (intialId, url) => {
  const { setNewError: setError } = React.useContext(IpssContext);

  const [data, setData] = useState([]);
  const [id, setId] = useState(intialId);
  const specificUrl = `${url}/.json`

  useEffect(() => {
    if (!id) return;
    const getData = async () => {
      try {
        const result = await fetch(specificUrl);
        const data = await result.json();
        console.log("FETCHED");
        await setError(null);

        setData(data.ipss.users[id]);
      } catch (e) {
        setError("Couldn't download previous IPSS");
      }
    };

    getData();
  }, [id, url, setError, specificUrl]);

  return [{ data }, setId];
};

export default useFetchFromDB;
