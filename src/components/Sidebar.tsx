import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden sticky top-[120px]">
      <img
        className="w-full h-[76px] object-cover"
        src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="flex flex-col items-center text-white mt-[-1.5rem]">
        <Avatar border={true} src="https://github.com/Marcos-06.png" />
        <strong className="mt-4 text-zinc-100">Usuario</strong>
        <span className="text-sm text-zinc-400">Web Developer</span>
      </div>
      <div className=" border-t border-gray-600 mt-6 pt-6 p-8">
        <footer className="items-center justify-center text-center flex text-green-500 border border-green-500 h-[50px] rounded-lg px-6 font-bold hover:bg-green-500 hover:text-white">
          <a className="flex items-center gap-3 whitespace-nowrap" href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </div>
  )
}