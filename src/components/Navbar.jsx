import {useState} from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../consonants'
import {Menu,X} from 'lucide-react'


function Navbar() {

    const [mobileDrawerOpen,setMobileDrawerOpen]=useState(false);

    const toggleMenu=()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className='top-0 z-50 sticky backdrop-blur-md  py-4 border-b border-neutral-700/70'>
          <div className='container px-4 mx-auto flex justify-between items-center'>
            <div className='flex items-center gap-1 '>
                <img  className='h-10 w-10 ' src={logo} alt="logo" />
                <span className='text-xl'>VirtualR</span>
            </div>
            <ul className='hidden lg:flex items-center gap-10 text-sm'>
            {navItems.map((item,index) => (
                <li key={index} >
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
            </ul>
            <div className='hidden lg:flex items-center text-sm gap-8'>
                <a href="#" className='border-[1px] p-2 rounded-md'>Sign In</a>
                <a href="#" className=' p-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an Account</a>
            </div>
            <div className='lg:hidden md:flex '>
                <button onClick={toggleMenu}>
                    {mobileDrawerOpen ? <X/> :<Menu/>}
                </button>
            </div>
            
          </div>
          {mobileDrawerOpen && (
                <div className='flex flex-col justify-center items-center py-5 gap-5  bg-neutral-900 lg:hidden '>
                    <ul className='flex flex-col gap-5'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden sm:flex items-center text-sm gap-8'>
                <a href="#" className='border-[1px] p-2 rounded-md'>Sign In</a>
                <a href="#" className=' p-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an Account</a>
            </div>
                </div>
            )}
    </nav>
  )
}

export default Navbar