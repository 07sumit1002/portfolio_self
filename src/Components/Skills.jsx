import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactIamge from '../assets/react.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import php from '../assets/php.png'
import github from '../assets/github.png';
import firebase from '../assets/firebasw.png';
import PowerBi from '../assets/powerb1i.png'
import sql from '../assets/sql.png';
import figma from '../assets/figma.png';
import material from '../assets/material.png';
import next from '../assets/nextjs.png'
import openai from '../assets/openai.png';
import pycharm from '../assets/pycharm.png'
import vscode from '../assets/vscode.png';
import python from '../assets/python.png';
import c from '../assets/c.png'



const Skills = () => {
    const skill=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
            category: 'Languages'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
            category: 'Languages'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
            category: 'Languages'
        },
        {
            id:4,
            src:tailwind,
            title:'Tailwind CSS',
            style:'shadow-cyan-500',
            category: 'Framework'
        },
        {
            id:5,
            src:firebase,
            title:'Firebase',
            style:'shadow-pink-500',
            category: 'Framework'
        },
        {
            id:6,
            src:node,
            title:'Node JS',
            style:'shadow-green-500',
            category: 'Framework'
        },
        {
            id:7,
            src:php,
            title:'PHP',
            style:'shadow-white',
            category: 'Languages'
        },
        {
            id:8,
            src:reactIamge,
            title:'ReactJS',
            style:'shadow-blue-400',
            category: 'Framework'
        },
        {
            id:9,
            src:next,
            title:'NextJS',
            style:'shadow-green-700',
            category: 'Framework'
        },

        {
            id:10,
            src:sql,
            title:'My SQL',
            style:'shadow-teal-500',
            category: 'database'
        },

        {
            id:11,
            src:github,
            title:'GitHub',
            style:'shadow-gray-200',
            category: 'tool'
        },
        {
          id:11,
          src:PowerBi,
          title:'PowerBi',
          style:'shadow-gray-200',
          category: 'Data Analytics'
      },

        {
            id:12,
            src:figma,
            title:'Figma',
            style:'shadow-purple-500',
            category: 'Graphic'
        },

        {
            id:13,
            src:material,
            title:'Material UI',
            style:'shadow-blue-500',
            category: 'Framework'
        },

        {
          id:14,
          src:openai,
          title:'OpenAi API',
          style:'shadow-white',
          category: 'Framework'
      },

      {
        id:17,
        src:vscode,
        title:'VSCode',
        style:'shadow-orange-500',
        category: 'tool'
    },

    {
      id:16,
      src:python,
      title:'Python',
      style:'shadow-yellow-500',
      category: 'Languages'
   },

   {
    id:15,
    src:c,
    title:'c',
    style:'shadow-blue-500',
    category: 'Languages'
  },
  {
    id:18,
    src:pycharm,
    title:'Pycharm',
    style:'shadow-blue-500',
    category: 'tool'
  },
    ];

    const Languages = skill.filter((s)=> s.category==='Languages');
    const Framework = skill.filter((s)=> s.category==='Framework');
    const Graphic = skill.filter((s)=> s.category==='Graphic');
    const tool = skill.filter((s)=> s.category==='tool');
    const DataAnalytics = skill.filter((s)=> s.category==='Data Analytics');
    const database = skill.filter((s)=> s.category==='database');

    return (
        <div name="skills" className="bg-gradient-to-b from-black to-cyan-900 w-full md:min-h-screen pt-12">
          <div className="max-w-screen-lg mx-auto p-4 pt-10 text-white pt-500px">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-18">
                Skills
              </p>
            </div>

            <div className='mt-10'>
            <p className="text-4xl font-bold">Languages</p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center py-8 px-12 sm:px-0">
                {Languages.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
              </div>
          </div>
           
          <div className='mt-10'>
            <p className="text-4xl font-bold">Frameworks and APIs</p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center py-8 px-12 sm:px-0">
                {Framework.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
              </div>
          </div>

          <div className='mt-10'> 

            <p className="text-4xl font-bold"> Data Analytics</p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center py-8 px-8 sm:px-0">
                {DataAnalytics.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
            </div>
          
          </div>

          <div className='mt-10'>
            <p className="text-4xl font-bold">Graphic Design</p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center py-8 px-12 sm:px-0">
                {Graphic.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
              </div>
          </div>

          <div className='mt-10'>

            <p className="text-4xl font-bold"> Database</p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center py-8 px-12 sm:px-0">
                {database.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
              </div>

          </div>


          <div className='mt-10'>
            <p className="text-4xl font-bold">Tools</p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center py-8 px-12 sm:px-0">
                {tool.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
            </div>

          </div>
          </div>
        </div>
      );
    };

export default Skills