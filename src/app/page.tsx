import Link from "next/link";
import HeaderComp from "./components/HeaderComp";

export default function Home() {
  return (
    <div>
      {/* <HeaderComp /> */}
      <main className="mx-auto h-fit mt-4 max-w-4xl w-[90%] flex flex-col gap-y-4">

        <div className="div-design">
          <div className="border-b-1 px-3 py-1">
            <span className="font-semibold">homepage.</span>
          </div>
          <div className="px-3 py-2">
            <h1 className="text-2xl mb-1 "><span className="font-semibold">Olá!</span> Bem-vindo ao <span className="font-semibold"> meu site pessoal.</span></h1>
            <p>Eventualmente, surge-me a vontade de escrever, compartilhar projetos, estudos, repositórios, artes, e como não há um local oficial na internet para isso, decidi fazê-lo :)</p>
          </div>
          <div className="border-t-1 px-3 py-1">
            <span className="font-semibold">provavelmente já existe um saas com essa função, mas prefiro o simples html e css(apesar de tá usando nextjs).</span>
          </div>
        </div>

        <div className="flex gap-x-4">
          <div className="div-design flex-1 px-3 py-1">
            <p>Ultimamente tenho tido um certo interesse por estatística. Pretendo levar mais a sério</p>
          </div>

          {/* <Link
            href='/about-me'
            className="div-design px-4 py-2 hover:bg-stone-950 hover:text-white duration-200 font-medium ease-in-out text-lg size-fit"
          >
            <span>About Me</span>
          </Link> */}
          <div className="div-design size-fit">
            <Link
              href='/about-me'
              className="px-4 py-2 block hover:bg-stone-950 hover:text-white duration-200 font-medium ease-in-out text-lg"
            >
              About Me
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
}

// https://kafu.ovh/
// https://july.lol/
// https://microsounds.github.io/