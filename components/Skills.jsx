import React from 'react'
import Image from 'next/image';
import ProgressBar from '../components/ProgressBar'
function Skills() {
  return (
    <div id="skills" className='w-full lg:h-screen p-2'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Скиллы</p>
        <h2>Полоса загрузки показывает на сколько я ориентируюсь в тех или иных технологиях</h2>
        <p>Реальные результаты могут быть выше или ниже(мне очень тяжело судить)</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/html.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={85} />
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/css.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={75} />
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/javascript.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={60} />
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/typescript.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>TypeScript</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={37}/>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/react.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={40} />
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/node.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Node.js</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={55} />
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/github1.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Github</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={33} />
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/postgres.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>PostgreSQl</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={30} />
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/mongo.png" alt="/" width="80" height="25"></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MongoDB</h3>
                    </div>
                </div>
                <div className="mt-[20px]">
                <ProgressBar value={30} />
                </div>
            </div>
           

        </div>

    </div>
    </div>
  )
}

export default Skills