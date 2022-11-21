import Link from 'next/link'
import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"

function Main() {
    
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>
                    Привет, я <span className='text-[#5651e5]'>Илья</span>
                </h1>
                <h1 className='py-1'>Junior front-end developper</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Мне нравится разрабатывать веб-приложения. В данный момент я фокусируюсь 
                    на изучении React и адаптивной верстки, параллельно изучая back-end технологии
                    и работу с API.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <Link href="https://github.com/mauiwaui024">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-111 ease-in duration-300'>
                        <FaIcons.FaGithub/>
                    </div>

                    </Link>
                    <Link href="https://t.me/mauiwaui024">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-111 ease-in duration-300'>
                    <FaIcons.FaTelegram/>
                    </div>

                    </Link>

                    <Link href="https://instagram.com/svaykin">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-111 ease-in duration-300'>
                    <AiIcons.AiOutlineInstagram/>
                    </div>

                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
