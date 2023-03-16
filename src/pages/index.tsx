import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Titillium_Web } from "next/font/google";
import { EyeSlash, Eye } from "phosphor-react";
import { Input } from "@/components/input";

import logo from "../assets/logo.svg";
import Head from "next/head";

const titillium_Web = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  const [lockOrUnlockPassword, setLockOrUnlockPassword] = useState(false);

  return (
    <main
      style={titillium_Web.style}
      className="grid h-screen place-content-center mx-4 xl:grid-cols-2 xl:place-content-stretch xl:m-0"
    >
      <Head>
        <title>Login</title>
      </Head>
      <div className="grid gap-28 xl:pt-10 xl:pl-28 xl:pr-52 xl:pb-24">
        <Image src={logo} alt="Logo" />

        <div className="grid gap-10">
          <div className="grid gap-4">
            <h2 className="font-bold text-4xl leading-[55px] text-gray-800">
              Acesse a plataforma
            </h2>
            <span className="text-base text-gray-600">
              Faça login ou registre-se para começar a construir <br /> seus
              projetos ainda hoje.
            </span>
          </div>

          <form className="grid gap-8">
            <div className="grid gap-4 font-bold">
              <label htmlFor="email" className="grid gap-2 font-semibold">
                E-mail
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </label>
              <label htmlFor="password" className="grid gap-2 font-semibold">
                <div className="flex justify-between">
                  Senha
                  <Link
                    href=""
                    className="text-purple hover:underline hover:brightness-110"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="grid relative">
                  <Input
                    id="password"
                    type={lockOrUnlockPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                  />

                  {!lockOrUnlockPassword && (
                    <EyeSlash
                      size={20}
                      className="text-gray-400 cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setLockOrUnlockPassword(true)}
                    />
                  )}
                  {lockOrUnlockPassword && (
                    <Eye
                      size={20}
                      className="text-gray-400 cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setLockOrUnlockPassword(false)}
                    />
                  )}
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="py-4 px-6 bg-purple text-white w-full rounded hover:brightness-125 transition-all"
            >
              Entrar
            </button>

            <span className="text-gray-600">
              Ainda não tem uma conta?
              <strong className="text-purple hover:underline">
                <Link href="/subscribe">inscreva-se</Link>
              </strong>
            </span>
          </form>
        </div>
      </div>
      <div className="hidden xl:block xl:bg-background xl:bg-no-repeat xl:bg-cover" />
    </main>
  );
}
