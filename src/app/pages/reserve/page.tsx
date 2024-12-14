import Image from "next/image"

export default function Reserve(){
  return(
    <div className="flex gap-6">
      <div className="flex flex-col w-fit cursor-pointer">
        <Image alt="Casa" src="/casa.jpeg" width={300} height={300} className="rounded-xl  hover:scale-105"/>
        <h1 className="font-semibold mt-1 text-lg ">Casa de verão</h1>
        <h2 className="text-gray9">Nova Prata do iguaçu - PR</h2>
        <h1>R$430.00 noite</h1>
      </div>

      <div className="flex flex-col w-fit cursor-pointer">
        <Image alt="Casa" src="/casa.jpeg" width={300} height={300} className="rounded-xl  hover:scale-105"/>
        <h1 className="font-semibold mt-1 text-lg ">Casa de verão</h1>
        <h2 className="text-gray9">Nova Prata do iguaçu - PR</h2>
        <h1>R$430.00 noite</h1>
      </div>
    </div>
  )
}