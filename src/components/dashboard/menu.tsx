import Image from "next/image";
import Link from "next/link";
import { DeviceTabletSpeaker, File, Users } from "phosphor-react";

import LogoDashSVG from "../../assets/LogoDash.svg";

import tabletSVG from "../../assets/tablet-portrait.svg";
import peopleSVG from "../../assets/people.svg";
import documentSVG from "../../assets/document-text.svg";
import ajustsSVG from "../../assets/cog.svg";
import { useState } from "react";

export function Menu() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <>
      {activeMenu && (
        <div className="absolute z-10 top-0 right-0 left-0 bottom-0 w-screen h-full bg-black/80" />
      )}
      <div
        className={`absolute z-50 top-0 mt-0 pt-8 bg-purple min-h-full sm:relative sm:bg-transparent w-fit px-4 md:px-0 md:min-w-[174px] md:pt-0 md:ml-9 md:mt-8 space-y-[60px]`}
      >
        <Image src={LogoDashSVG} width={49.89} height={56} alt="Logo" />
        <nav className="list-none grid gap-9 justify-center md:justify-start">
          <li className=" text-white font-medium">
            <Link href="/dashboard/boards" className="flex items-center gap-2">
              <Image src={tabletSVG} width={20} height={20} alt="tabletSVG" />
              <span className="hidden md:block">Boards</span>
            </Link>
          </li>
          <li className="text-[#CAB3FF] font-medium">
            <Link href="/dashboard/boards" className="flex items-center gap-2">
              <Image src={peopleSVG} width={20} height={20} alt="peopleSVG" />

              <span className="hidden md:block">Equipes</span>
            </Link>
          </li>
          <li className="text-[#CAB3FF] font-medium">
            <Link href="/dashboard/boards" className="flex items-center gap-2">
              <Image
                src={documentSVG}
                width={20}
                height={20}
                alt="documentSVG"
              />
              <span className="hidden md:block">Relatórios</span>
            </Link>
          </li>
          <li className="text-[#CAB3FF] font-medium">
            <Link href="/dashboard/boards" className="flex items-center gap-2">
              <Image src={ajustsSVG} width={20} height={20} alt="ajustsSVG" />
              <span className="hidden md:block">Ajustes</span>
            </Link>
          </li>
        </nav>
      </div>
    </>
  );
}
