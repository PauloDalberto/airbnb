'use client'

import HousesCard from "@/app/components/housesCard/housesCard";
import useFetchHouses from "@/app/hooks/houses/useFetchHouse";
import { useSearch } from "@/app/hooks/context/SearchContext";

export default function Reserve() {
  const { houses } = useFetchHouses();
  const { search } = useSearch(); 

  const filteredHouses = houses.filter((house) =>
    house.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex gap-6 flex-wrap" suppressHydrationWarning>
      {filteredHouses.length > 0 ? (
        filteredHouses.map((house: HouseCard) => (
          <HousesCard
            key={house.id}
            id={house.id}
            description={house.description}
            location={house.location}
            price={house.price}
            thumbnail_url={house.thumbnail_url}
          />
        ))
      ) : (
        <p>No momento não temos casas disponíveis</p>
      )}
    </div>
  );
}
