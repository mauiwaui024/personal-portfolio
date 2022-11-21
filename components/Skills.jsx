import React from 'react'
import Image from 'next/image';
import ProgressBar from '../components/ProgressBar'
import htmlImg from "../public/assets/html.png"
import cssImg from "../public/assets/css.png"
import javascriptImg from "../public/assets/javascript.png"
import typescriptImg from "../public/assets/typescript.png"
import reactImg from "../public/assets/react.png"
import nodeImg from "../public/assets/node.png"
import gitImg from "../public/assets/github1.png"
import postgreImg from "../public/assets/postgres.png"
import mongoImg from "../public/assets/mongo.png"

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
                        <Image src={htmlImg} alt="/" width="80" height="25"></Image>
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
                        <Image src={cssImg} alt="/" width="80" height="25"></Image>
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
                        <Image src={javascriptImg} alt="/" width="80" height="25"></Image>
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
                        <Image src={typescriptImg} alt="/" width="80" height="25"></Image>
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
                        <Image src={reactImg} alt="/" width="80" height="25"></Image>
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
                        <Image src={nodeImg} alt="/" width="80" height="25"></Image>
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
                        <Image src={gitImg} alt="/" width="80" height="25"></Image>
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
                        <Image src={postgreImg} alt="/" width="80" height="25"></Image>
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
                        <Image src={mongoImg} alt="/" width="80" height="25"></Image>
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