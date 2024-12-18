'use client'

import { listHouses } from "@/app/api/houses/houses";
import HousesCard from "@/app/components/housesCard/housesCard";
import { useEffect, useState } from "react";

export default function Reserve(){
  const [houses, setHouses] = useState([])

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

  return(
    <div className="flex gap-6">
      {houses.length > 0 ? (
        houses.map((house: HouseCard) => (
          <HousesCard 
            key={house.id}
            id={house.id} 
            name={house.name} 
            location={house.location} 
            price={house.price} 
            thumbnail={house.thumbnail} 
          />

        ))
      ) : (
        <p>No momento nao temos casas disponiveis</p>
      )}
    </div>
  )
}