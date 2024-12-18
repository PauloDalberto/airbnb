import Image from "next/image"

export default function HousesCard({ id, location, name, price, thumbnail }: HouseCard){
  return(
    <div
      className="flex flex-col w-fit cursor-pointer"
      key={id}
     >
      <Image 
        alt={name}
        src={thumbnail}
        width={300} 
        height={300} 
        className="rounded-xl  hover:scale-105"
      />
      <h1 className="font-semibold mt-1 text-lg ">{name}</h1>
      <h2 className="text-gray9">{location}</h2>
      <h1>{price}</h1>
    </div>

  )
}