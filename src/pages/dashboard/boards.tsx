import { CardTask } from "@/components/dashboard/CardTask";
import Image from "next/image";
import { FunnelSimple, MagnifyingGlass, PencilSimple } from "phosphor-react";

const willGo = [
  {
    title: "#boraCodar um Kanban 🧑‍💻",
    description:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
  {
    title: "Manter a ofensiva 🔥",
    description:
      "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
    tags: ["rocketseat"],
  },
  {
    title: "Almoçar 🥗",
    description:
      "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
    tags: ["autocuidado"],
  },
];

const doing = [
  {
    title: "Conferir o novo desafio 🚀 ",
    description:
      "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
    tags: ["rocketseat", "desafio"],
  },
  {
    title: "Ser incrível 😎",
    description:
      "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    tags: ["autocuidado "],
  },
];

const finish = [
  {
    title: "#boraCodar uma página de login 🧑‍💻",
    description:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
  {
    title: "#boraCodar uma página de clima 🧑‍💻",
    description:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
];

export default function Boards() {
  return (
    <div className="bg-gray-100 text-gray-900 flex-1 rounded-tl-[32px] pt-12 px-8 space-y-[32px]">
      <header className="flex items-center justify-between px-6">
        <div className="flex gap-1 items-center">
          <h1 className="text-[#403937] text-xl sm:text-2xl md:text-[32px] font-bold">
            Matheus Zago Bestana
          </h1>
          <PencilSimple size={24} className="text-[#C7C7CD]" weight="fill" />
        </div>
        <Image
          src="https://github.com/zagob.png"
          alt="Profile"
          width={64}
          height={64}
          className="w-16 h-16 rounded-full"
        />
      </header>
      <section className="flex gap-2 px-6">
        <button className="bg-[#7C3AED] text-gray-100 flex gap-2 items-center px-8 py-3 rounded hover:brightness-110 transition-all">
          <FunnelSimple size={24} />
          Filtrar
        </button>
        <div className="flex-1 flex items-center gap-1 bg-white pl-6 rounded-lg shadow-md">
          <MagnifyingGlass className="w-5 h-5" />
          <input
            type="text"
            className="w-full h-12 outline-none"
            placeholder="Busque por cards, assuntos ou responsáveis..."
          />
        </div>
      </section>
      <main className="grid grid-cols-1 lg:grid-cols-w2 xl:grid-cols-w3 gap-12 px-6 justify-between">
        <div>
          <h2 className="py-6 text-xl text-[#403937] font-bold">A fazer</h2>
          <div className="grid gap-6">
            {willGo.map((item) => (
              <CardTask
                key={item.title}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="py-6 text-xl text-[#403937] font-bold">Fazendo</h2>

          <div className="grid gap-6">
            {doing.map((item) => (
              <CardTask
                key={item.title}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="py-6 text-xl text-[#403937] font-bold">Feito</h2>

          <div className="grid gap-6">
            {finish.map((item) => (
              <CardTask
                key={item.title}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
