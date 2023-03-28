import Image from "next/image";
import Link from "next/link";
import { DeviceTabletSpeaker, File, Users } from "phosphor-react";

import LogoDashSVG from "../../assets/LogoDash.svg";

import tabletSVG from "../../assets/tablet-portrait.svg";
import peopleSVG from "../../assets/people.svg";
import documentSVG from "../../assets/document-text.svg";
import ajustsSVG from "../../assets/cog.svg";

export function Menu() {
  return (
    <div className="w-fit px-4 md:px-0 md:min-w-[174px] md:ml-9 mt-8 space-y-[60px]">
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
            <Image src={documentSVG} width={20} height={20} alt="documentSVG" />
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
  );
}
