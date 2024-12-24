import { listHouses } from "@/app/api/houses/houses";
import { useEffect, useState } from "react";

export default function useFetchHouses(){
  const [houses, setHouses] = useState<HouseCard[]>([]);
  
  useEffect(() => {
    const fetchHouses = async () => {
      try{
        const data = await listHouses(true);
        setHouses(data)
      }
      catch (error){
        console.log("Esse erro: ", error)
      }
    }

    fetchHouses();
  }, [])
  
  return { houses }
}