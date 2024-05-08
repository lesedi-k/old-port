'use client'
import React, { useState, useEffect, HtmlHTMLAttributes } from 'react'

import styles from "../page.module.css"
import { ExCard } from "../components/cards";
import wabfIcon from "../assets/wabf.png"
import slice from  "../assets/slice.jpg"
import cis from  "../assets/seas.png"
import partiton from  "../assets/partition.png"

import { SideBar } from "../components/SideBar";
import { toHaveDescription } from '@testing-library/jest-dom/matchers';

export default function Experience() {
    const exp = [
        {
            Employer:["Slice HealthTech"],
            Job: "Venture Studio Operator",
            img: slice,
            story: "Coming Soon"
        },
        {
            Employer: ["Partition"],
            Job: "Entrepreneur/ Full-Stack Developer",
            img: partiton,
            story: "Coming Soon"
        },
        {
            Employer:["University of Pennsylvania","Department of Computer & Information Science" ],
            Job:"CIS 3500: Teaching Assistant",
            img: cis,
            story: "Coming Soon"
        },
        {
            Employer:["University of Pennsylvania","Department of Electrical & Systems Engineering" ],
            Job:"ESE 2150: Teaching Assistant",
            img: cis,
            story: "Coming Soon"
        },
        {
            Employer: ["Wharton Africa Business Forum"],
            Job: "Vice President of Entertainment",
            img:wabfIcon,
            story: "Coming Soon"
        },
    ]

    const [selected, setSelected] = useState(0);


    function changeExperience(exp_id: string){
        //slider 

    }
    
    return (
        <div 
            className={`${styles.blackTopRightBottomLeft}`}
            style={{alignItems: "center", textAlign:"left", paddingInline:100,
                    height: "100vh",  width: "100%",  
                }}
        >
            <div id="experience_div_slide">
                <h2 className={styles.h1} style={{marginTop: 50}
                }>Experience</h2>
                <h3 style={{fontWeight: 200, fontSize:"20pt", marginBottom: 30}}>Learn more about my professional experiences</h3>

                <div style={{display: "flex", flexDirection: "row", width: "100%", height: "100%"}}>
                    <SideBar 
                        Items={exp} 
                        onClick={(event) => changeExperience(event)}
                        onScroll={(event) => changeExperience(event)}
                    />
                    <div   
                        className={`${styles.cardBlur} ${styles.cardGrad}`} 
                        style={{display: "flex", flex:2, flexDirection: "column",
                        borderColor: "white",
                        borderStyle: "solid",
                        borderWidth: "0.5px 0 0 0.5px",
                        borderRadius:"20px", 
                        paddingInline: "30px",
                        paddingBlock: "30px",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <h1>{exp[selected].Employer[0]}</h1>
                        {exp[selected].Employer.length > 1 && <h1>{exp[selected].Employer[0]}</h1>}
                        <h3>{exp[selected].Job}</h3>
                        <p> {exp[selected].story}</p>
                    </div>
                </div>
                
            </div>
        
        </div>
    );
}