import Image from "next/image";
import logo from "/public/logo.svg";
import sac from "/public/sac.svg";

export default function Header() {
  return (
    <header className="bg-scratchBlue flex flex-col items-center px-14 py-6 gap-8">
      <div className="flex flex-row items-center justify-between gap-32">
        <Image src={sac} alt="SAC" width={150} />
        <h1 className="text-4xl text-white font-bold">
          Central de Jogos Scratch
        </h1>
        <Image src={logo} alt="Logo" width={200} />
      </div>
      <p className="text-base text-white">
        Bem-vindos à central de jogos. Abaixo temos algumas amostras de jogos
        construídos pelos sétimos anos utilizando a plataforma Scratch para o
        SAC 2024.
      </p>
    </header>
  );
}
