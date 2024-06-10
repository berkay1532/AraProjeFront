import React, { useState } from 'react';
import Add from "@/assets/profile/add.svg";
import Edit from "@/assets/profile/Union.svg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from 'next/image';
import Modal from './Modal';
import Example from "@/assets/profile/example.svg";

interface ExperienceData {
  title: string;
  company: string;
  duration: string;
  skills: string;
}

const Experience: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<"add" | "edit">('add');
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);
  const [experiences, setExperiences] = useState<ExperienceData[]>([
    {
      title: 'Frontend Developer',
      company: 'Miscet',
      duration: 'Tem 2023 - Halen (11ay)',
      skills: 'rust, react.js',
    },
  ]);

  const openModal = (mode: "add" | "edit", experience: ExperienceData | null = null) => {
    setMode(mode);
    setSelectedExperience(experience);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddExperience = (newExperience: ExperienceData) => {
    setExperiences([...experiences, newExperience]);
  };

  const handleEditExperience = (updatedExperience: ExperienceData) => {
    const updatedExperiences = experiences.map(exp => 
      exp === selectedExperience ? updatedExperience : exp
    );
    setExperiences(updatedExperiences);
  };

  const handleDeleteExperience = (experienceToDelete: ExperienceData) => {
    setExperiences(experiences.filter(exp => exp !== experienceToDelete));
  };

  return (
    <div>
      <div className='flex justify-between items-center mr-3 mt-5'>
        <div className='col-span-2 border-b-[2px] border-[#23BDFF] border-opacity-50 font-medium text-xl mx-4 mt-4 w-36 flex justify-center items-center cursor-pointer'>
          Deneyimlerin
        </div>
        <Image
          src={Add}
          alt="Add"
          width={40}
          height={40}
          onClick={() => openModal('add')}
          className="cursor-pointer"
        />
      </div>
      {experiences.map((experience, index) => (
        <div key={index} className='flex my-5 mx-24 border-t-[1px] border-b-[1px] w-[80%] items-center'>
          <Image
            src={Example}
            alt="Example"
            width={60}
            height={60}
          />
          <div className='my-5 mx-24 flex-grow'>
            <div className='text-base font-medium'>{experience.title}</div>
            <div className='text-sm font-normal'>{experience.company}</div>
            <div className='text-xs font-light'>{experience.duration}</div>
            <div className='text-sm font-normal'>{experience.skills}</div>
          </div>
          <div className='flex items-center'>
            <Image
              src={Edit}
              alt="Edit"
              width={20}
              height={20}
              className='cursor-pointer'
              onClick={() => openModal('edit', experience)}
            />
           
            <RiDeleteBin5Fill  className='cursor-pointer ml-4' onClick={() => handleDeleteExperience(experience)}/>

          </div>
        </div>
      ))}
      {isOpen && (
        <Modal 
          mode={mode} 
          experience={selectedExperience} 
          closeModal={closeModal} 
          onSubmit={mode === 'add' ? handleAddExperience : handleEditExperience}
        />
      )}
    </div>
  );
};

export default Experience;
