import React from 'react'
import Image from 'next/image';
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import * as HiIcons from "react-icons/hi"
import Link from 'next/link';
function Contact() {
  return (
    <div id="contact" className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Связь</p>
            <h2 className='py-4'>Связаться со мной</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/* левый див */}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div className='lg:p-4 h-full'>
        <div>
            <img className='rounded-xl hover:scale-105 ease-in duration-300' alt="/" src="https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"></img>
        </div>
        <div>
            <h2 className='py-4'>Илья Свайкин - isvajkin@gmail.com</h2>
            <p></p>
            <p className='py-4'>Я открыт к любым junior фулл-тайм позициям. Напишите мне в одной из соц. сетей или заполните форму справа, и я сам с вами свяжусь.</p>
        </div>
        <div>
        <p className='uppercase pt-8 text-lg '>Социальные сети:</p>
        <div className='flex items-center justify-between py-4'>
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
{/* правый див */}
<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/6509da5b-0dae-4910-bc85-11cbc8386221'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Ваше имя</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Ваш номер телефона
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Ваш email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Тема</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Сообщение</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiIcons.HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
           
          </Link>

            </div>
        </div>
    </div>
  )
}

export default Contact