import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className="flex justify-center p-5 bg-zinc-800 py-[40px]">
      <img src={Logo} alt="" className='h-8' />
      <strong>Feed</strong>
    </div>
  )
}