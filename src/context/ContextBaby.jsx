import { createContext, useState, useEffect } from "react";

export const BabyContext = createContext();

const BabyProvider = ({ children }) => {
  const [metas, setMetas] = useState([]);
  const [regalos, setRegalos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMetas = async () => {
    try {
      const response = await fetch("/babyshower/metas.json");
      const data = await response.json();
      setMetas(data);
    } catch (error) {
      console.log("error fetch JSON");
    } finally {
      setLoading(false);
    }
  };

  const getRegalos = async () => {
    try {
      const response = await fetch("/babyshower/regalos.json");
      const data = await response.json();
      setRegalos(data);
    } catch (error) {
      console.log("error fetch JSON");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMetas();
    getRegalos();
    console.log(regalos);
    console.log(metas);
  }, []);

  return (
    <BabyContext.Provider value={{ metas, regalos, loading }}>
      {children}
    </BabyContext.Provider>
  );
};

export default BabyProvider;
