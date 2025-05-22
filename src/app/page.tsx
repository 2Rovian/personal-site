import HeaderComp from "./components/HeaderComp";

export default function Home() {
  return (
    <div>
      <HeaderComp />
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

        <div className="div-design">
          <p>About Me</p>
        </div>

      </main>
    </div>
  );
}

// https://kafu.ovh/
// https://july.lol/
// https://microsounds.github.io/