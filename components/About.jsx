import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p2 flex items-center py-16 px-2'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Обо мне</p>
                <h2 className='py-4'>Моя история</h2>
                <p className='py-2 text-gray-600'>Кратко о том, как я пришел к программированию</p>
                <p className='py-2 text-gray-600'>
                   Мой путь в программировании начался в декабре 2019 года с <a className='border-b border-indigo-500 hover:border-green-500' href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"> курса Анджелы Ю. на юдеми.</a>
                    Тогда мне все это казалось невозможным и вообще не для меня, но будучи человеком, который не очень любит сдаваться, я все-таки завершил этот курс. Конечно, супер крутым разработчиком я не стал, я им и сейчас не являюсь, но фундамент был заложен. 
                    Именно тогда я понял, что главное уметь хорошо гуглить, уметь читать документацию и понимать основные концепты, а не бездумно запоминать синтаксис.
                    Затем я решил переключиться на что-нибудь попроще и взял на том же юдеми <a className='border-b border-indigo-500 hover:border-green-500' href="https://www.udemy.com/course/webdeveloper/">курс Ивана Петриченко</a>. Он был намного легче с имеющимися у меня знаниями, но создание вебсайтов на html и css мне показалось не очень интересным(я уже был знаком с node.js и react)
                </p>
                <p className='py-2 text-gray-600'>
                    Последние полтора года я работал инструктором по скалолазанию, но задерживаться я там не планировал. И мысль стать разработчиком меня не покидала, время от времени я заходил на codewars и решал задачки. 
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'><Link href='/#projects'> Мои последние проекты</Link></p>
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About