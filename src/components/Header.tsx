import Image from "next/image";
import logo from "/public/logo.svg"
import sac from "/public/sac.svg"

export default function Header(){
    return(
        <header className="bg-scratchBlue flex items-center justify-between px-14 py-6">
            <Image src={sac} alt="SAC" width={150}/>
            <h1 className="text-4xl text-white font-bold">Central de Jogos Scratch</h1>
            <Image src={logo} alt="Logo" width={200} />
        </header>
    )
}