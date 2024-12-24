import Image from "next/image"

export default function HousesCard({ id, location, description, price, thumbnail_url }: HouseCard){
  return(
    <div
      className="flex flex-col w-fit cursor-pointer"
      key={id}
     >
      <Image 
        alt={`Imagem da ${description}`}
        src={thumbnail_url}
        width={300} 
        height={300} 
        className="rounded-xl  hover:scale-105"
      />
      <h1 className="font-semibold mt-1 text-lg ">{description}</h1>
      <h2 className="text-gray9">{location}</h2>
      <h1>{price}</h1>
    </div>

  )
}