import { MdOutlinePets } from "react-icons/md";

export default function Navbar(){
    return(
        <header className="px-20 py-5 flex justify-between items-center border-b border-b-[#ccc]">
            {/* Div - Serve para criar uma caixa para colocar um determinado conteúdo */}
            <div className="flex items-center gap-2">
                <MdOutlinePets size={20} color={"#3F9271"} />
                <p className="text-[#153229] font-bold">pet</p>
                <p className="text-[#FF6B4A] font-bold">care</p>
            </div>

            {/* Nav - Para navegação // ul - para criar uma listagem // li - para o item dessa lista // a - para navegacao o link */}
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <a href="">Início</a>
                    </li>

                    <li>
                        <a href="">Funcionalidades</a>
                    </li>

                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </nav>

            <a href="" className="bg-[#153229] text-[#fff] text-sm px-5 py-2 rounded-full">Agendar consulta</a>
        </header>
    )
}