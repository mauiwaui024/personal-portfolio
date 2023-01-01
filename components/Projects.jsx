import Image from 'next/image';
import React from 'react'
import cryptoImg from "../public/assets/cryptotrackerbig.png"
import climbImg from "../public/assets/climbtracker.png"
import ProjectItem from './ProjectItem';
import todoImg from "../public/assets/todo2.png"
import countryRest from "../public/assets/restCountries.png"
function Projects() {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16' >
            <p className='text-w tracking-widest uppercase text-[#5651e5]'>Проекты</p>
            <h2 className='py-4'>Все проекты учебные</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem
              title="Rest-countries Api"
              backgroundImg={countryRest}
              projectUrl = "/countries"
            />

            <ProjectItem
              title="Todo приложение на firebase"
              backgroundImg={todoImg}
              projectUrl = "/todo"
            />
            <ProjectItem
            title="Скалолазный Трекер"
            backgroundImg={climbImg}
            projectUrl="/climbs"
            />
            <ProjectItem 
            title="Крипто Трекер" 
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            />
            
            

        

            </div>
        </div>
    </div>
  )
}

export default Projects