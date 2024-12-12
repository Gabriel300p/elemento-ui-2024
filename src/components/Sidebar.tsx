import Mail from "@/assets/icons/mail.svg";
import Phone from "@/assets/icons/phone.svg";
import Logo from "@/assets/logo-text.svg";
import Image from "next/image";
import { FC } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="max-w-full md:max-w-[25%] p-5 md:p-8 bg-emerald-700 flex flex-col justify-between items-start">
      <div className=" flex-col items-start gap-9 flex">
        <div className="flex-row md:flex-col gap-5 flex w-full">
          <div className="md:pb-5 md:border-b-2 border-white/20 justify-between items-center flex w-full">
            <Image src={Logo} alt="Logo" />
            <LanguageSwitcher />
          </div>
          <div className="flex-col  gap-2 hidden md:flex">
            <h2 className=" text-white/90 text-2xl font-semibold">
              Entre em contato!
            </h2>
            <p className="text-white/60 text-lg font-normal">
              Fique ligado sobre nossas novidades seguindo-nos nas redes
              sociais. Caso precise, pode falar com a gente!
            </p>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-8 hidden md:flex">
          <div className="items-center gap-5 flex">
            <Image src={Mail} alt="Icon mail" />
            <div className="flex-col items-start gap-0.5 inline-flex">
              <h3 className="text-white/60 text-lg font-normal">E-mail</h3>
              <span className="text-white text-xl font-medium">
                contact@elementoui.com
              </span>
            </div>
          </div>
          <div className="items-center gap-5 flex">
            <Image src={Phone} alt="Icon phone" />
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <h3 className="text-white/60 text-lg font-normal">Telefone</h3>
              <span className="text-white text-xl font-medium">
                +55 (11) 96580-0803
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-5 hidden md:flex">
        <div className="items-center gap-3.5 flex">
          <div className="w-[35px] h-[35px] relative" />
        </div>
        <div className="justify-start items-center gap-3.5 flex">
          <div className="w-[35px] h-[35px] relative" />
        </div>
        <div className="justify-start items-center gap-3.5 flex">
          <div className="w-[35px] h-[35px] relative" />
        </div>
        <div className="justify-start items-center gap-3.5 flex">
          <div className="w-[35px] h-[35px] relative" />
        </div>
        <div className="justify-start items-center gap-3.5 flex">
          <div className="w-[35px] h-[35px] relative" />
        </div>
        <div className="justify-start items-center gap-3.5 flex">
          <div className="w-[35px] h-[35px] relative" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
