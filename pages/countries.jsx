import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import restCountry from "../public/assets/restCountries.png"
import * as RiIcons from "react-icons/ri"
export default function climbs() {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={restCountry}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>REST countries </h2>
        <h3>React JS</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Проект</p>
        <h2>Описание</h2>
        <p>
            Это приложение - челлендж с сайта<Link href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"> www.frontendmentor.io</Link>. В приложении можно найти основную информацию по всем странам мира, работает поиск по названию и фильтрация по регионам. Также есть свитч для перехода на темную тему. Челлендж из категории advanced. 
        </p>
        <a
          href='https://github.com/mauiwaui024/rest-countries'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8'>Код</button>
        </a>

        <a
          href='https://rest-countries-9622b.web.app/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8'>Демо</button>
        </a>
        
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Технологии</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiIcons.RiRadioButtonFill className='pr-1' /> React
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiIcons.RiRadioButtonFill className='pr-1' /> Api
            </p>
           
          </div>
        </div>
      </div>
      
      <Link href='/#projects'>
        <p className='underline cursor-pointer'>Назад</p>
      </Link>
    </div>
  </div>
  )
}
