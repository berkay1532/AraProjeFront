import React,{FC} from 'react'
import Image from 'next/image'
import Background from "@/assets/profile/background.svg"
import Exit from "@/assets/profile/exit.svg"
import Desktop from "@/assets/profile/desktop.svg"
import Personal from "@/assets/profile/personal.svg"
import useSession from '@/hooks/useSession'

interface SidebarProps {
    setSelected: (selected: "experience"| "profile") => void
    }

const Sidebar: FC<SidebarProps>= ({setSelected}) => {
    const session = useSession();
  return (
    <div className='w-[400px] h-2/3 flex flex-col items-center bg-[#1C1C1C] rounded-xl'>
              <div className='flex flex-col text-white w-full h-full justify-between'>
         <Image
              src={Background}
              alt="logo"
              width={100}
              height={100}
              className="w-[400px]"
            />
  
            <div className='flex flex-col w-full'>
            <div className='flex justify-start items-center p-3 gap-x-4 border-b-[1px] border-white border-opacity-50 mx-6 cursor-pointer hover:text-[#23BDFF]' onClick={() => setSelected("profile")}> <Image
              src={Personal}
              alt="logo"
              width={20}
              height={20}
            />Profile Ayarları</div>
            <div className='flex justify-start items-center p-3 gap-x-4 border-b-[1px] border-white border-opacity-50 mx-6 cursor-pointer hover:text-[#23BDFF]' onClick={() => setSelected("experience")}> <Image
              src={Desktop}
              alt="logo"
              width={20}
              height={20}
         
            />Deneyimler</div>
            </div>
            <div className='flex justify-start items-center p-3 gap-x-4 mx-6 my-2 cursor-pointer hover:text-[#23BDFF]' onClick={session.signout}> <Image
              src={Exit}
              alt="logo"
              width={20}
              height={20}
            />Çıkış Yap</div>
    </div>
    </div>
  )
}

export default Sidebar;