import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import rodri from '../../../images/rodri.png';
import './About.css';

let develops = [
    {foto: rodri, nombre: 'Rodrigo Romero', linkedin:'https://www.linkedin.com/in/rromero96/', github:'https://github.com/rromero96'},
]

export function About() {
    let iconStyles = { color: "black", fontSize: "3rem"};
    return (
        <div className='div_padre_10'>
            <h1>Developer</h1>
            <div className='dev_container'>
                {
                    develops.map((d, i) => (
                        <div className='dev_individual'>
                            <img src={d.foto} alt='' width='330rem'/>
                            <div className='div_nombre'>
                                <h4>{d.nombre}</h4>
                                <div className='div_container_links'>
                                    <a href={d.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin style={iconStyles} className='linkedin_icon'/></a>
                                    <a href={d.github} target="_blank" rel="noopener noreferrer"><GoMarkGithub style={iconStyles} className='github_icon'/></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
             </div>
        </div>
    )
}

export default About;