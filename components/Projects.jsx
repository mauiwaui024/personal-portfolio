import React from 'react'
import cryptoImg from "../public/assets/projects/cryptotracker2.png"
import climbImg from "../public/assets/projects/climbtrackerClimbs.png"
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16' >
            <p className='text-w tracking-widest uppercase text-[#5651e5]'>Проекты</p>
            <h2 className='py-4'>Все проекты учебные</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem 
            title="Крипто Трекер" 
            backgroundImg={cryptoImg} 
            projectUrl="/crypto"
            />
            <ProjectItem
            title="Скалолазный Трекер"
            backgroundImg={climbImg}
            projectUrl="/climbs"
            />
        
        

            </div>
        </div>
    </div>
  )
}

export default Projects