'use client'

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Input } from "../input/Input";
import Link from "next/link";
import ModalComponent from "../modal/Modal";
import { useSearch } from "@/app/hooks/context/SearchContext"; 

export default function Header() {
  const { search, setSearch } = useSearch();

  return (
    <div className="px-20 py-4 bg-white">
      <header className="flex justify-between items-center">
        <Image alt="logo aribnb" src={"/airbnb.svg"} width={128} height={128} className="cursor-pointer" />
        <nav className="flex gap-6">
          <Link href="/pages/reserve" className="hover:text-black text-lg text-mediumGray hover:scale-105">Reservar</Link>
          <Link href="/pages/add" className="hover:text-black text-lg text-mediumGray hover:scale-105">Adicionar Local</Link>
        </nav>
        <ModalComponent />
      </header>

      <div className="flex justify-center my-4">
        <Input
          Icon={MagnifyingGlassCircleIcon}
          id="filter"
          name="filter"
          placeholder="Digite o que deseja buscar!"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <hr className="-mx-20 my-6" />
    </div>
  );
}
