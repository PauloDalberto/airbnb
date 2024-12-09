'use client'

import { Bars4Icon, MagnifyingGlassCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Input } from "./components/input/Input";

export default function Home() {
  return (
    <div className="px-20 py-4 bg-white">
      <header className="flex justify-between items-center">
        <Image alt="logo aribnb" src={"/airbnb.svg"} width={128} height={128} className="cursor-pointer"/>

        <nav className="flex gap-6">
          <a href="" className="hover:text-black text-lg text-mediumGray hover:scale-105">Reservar</a>
          <a href="" className="hover:text-black text-lg text-mediumGray hover:scale-105">Adicionar Local</a>
        </nav>

        <div 
          className="flex gap-2 items-center rounded-3xl border py-2 px-4 border-[mediumGray] cursor-pointer hover:scale-105 hov"
          onClick={() => console.log('oi')}
        >
          <Bars4Icon width={24} height={24}/>
          <UserCircleIcon width={36} height={36}/>
        </div>
      </header>

      <div className=" flex justify-center my-4">
        <Input Icon={MagnifyingGlassCircleIcon} id="filter" name="filter" placeholder="Digite o que deseja buscar!"/>
      </div>

      <hr className="-mx-20 my-6"/>
    </div>
  );
}
