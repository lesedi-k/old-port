'use client'
import React, { useState, useEffect, HtmlHTMLAttributes } from 'react'

import styles from "../page.module.css"
import { ExCard } from "../components/cards";
import wabfIcon from "../assets/wabf.png"
import slice from  "../assets/slice.jpg"
import cis from  "../assets/seas.png"
import partiton from  "../assets/partition.png"

import { SideBar } from "../components/SideBar";

export default function Experience() {
    const [selected, setSelected] = useState(0);

    const exp = [
        {
            Employer:["Slice HealthTech"],
            Job: "Venture Studio Operator",
            img: slice,

            title: "The Execution of Product-Mindedness",
            story: "My work at SLICE HealthTech was centered around the task of taking a broad \
                    statement regarding data interoperability problems in between healthcare \
                    facilities and exploring it in its entirety. Then in true entrepreneurial \
                    fashion—taking the leap to build something out of nothing. My team took \
                    that problem space we’d worked to build, that system of problems we’d made \
                    sense of and turned it into the origins of our patient facing solution. \
                    \n\n\
                    The joy of the job lies in the task of map-making. I mapped a problem to \
                    questions, questions to answer finding activities, and those to answers \
                    that would iteratively lead to market-validated solutions. \
                    ",
            solutions: "",
            photos: "",
        },
        {
            Employer: ["Partition"],
            Job: "Entrepreneur/ Full-Stack Developer",
            img: partiton,
            title: "Technological Utility",
            story: "Coming Soon",
            challenges: "",
            solutions: "",
            photos: "",
        },
        {
            Employer:["University of Pennsylvania","Department of Computer & Information Science" ],
            Job:"CIS 3500: Teaching Assistant",
            img: cis,
            title: "People & First Principles",
            story: "Coming Soon",
            challenges: "",
            solutions: "",
            photos: "",
        },
        {
            Employer:["University of Pennsylvania","Department of Electrical & Systems Engineering" ],
            Job:"ESE 2150: Teaching Assistant",
            img: cis,
            title: "The Transfer of Intuition",
            story: "Coming Soon",
            challenges: "",
            solutions: "",
            photos: "",
        },
        {
            Employer: ["Wharton Africa Business Forum"],
            Job: "Vice President of Entertainment",
            img:wabfIcon,
            title: "The Communal Context of Goal Reaching",
            story: "Coming Soon",
            challenges: "",
            solutions: "",
            photos: "",
        },
    ]
    
    return (
        <div 
            className={`${styles.blackTopRightBottomLeft}`}
            style={{alignItems: "center", textAlign:"left", paddingInline:100,
                    height: "90vh",  width: "100%",  
                }}
        >
            <div id="experience_div_slide">
                <h2 className={styles.h1} style={{marginTop: 50}
                }>Experience</h2>
                <h3 style={{fontWeight: 200, fontSize:"20pt", marginBottom: 30}}>Learn more about my professional experiences</h3>

                <div style={{display: "flex", flexDirection: "row", width: "100%", height: "100%"}}>
                    <SideBar 
                        Items={exp} 
                        onClick={(event) => setSelected(event)}
                        selected={selected}
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
                        {exp[selected].Employer.length > 1 && <h1>{exp[selected].Employer[1]}</h1>}
                        <h3 style={{color: "#cffcfc", marginBottom: 10 }}>{exp[selected].Job}</h3>

                        <h3 style={{marginTop: 10}}>{exp[selected].title}</h3>
                        <p style={{whiteSpace: "pre-line"}}>{exp[selected].story}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}