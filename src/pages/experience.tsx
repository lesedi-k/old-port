'use client'
import React, { useState } from 'react'

import styles from "../page.module.css"

/* Assets */
import wabfIcon from "../assets/wabf.png"
import slice from  "../assets/slice.jpg"
import cis from  "../assets/seas.png"
import partiton from  "../assets/partition.png"
import redirectIcon from "../assets/redirect.svg"

/* Components */
import { SideBar } from "../components/SideBar";

export default function Experience() {
    const [selected, setSelected] = useState(0);

    const exp = [
        {
            Employer:["Slice HealthTech"],
            Job: "Venture Studio Operator",
            img: slice,
            work: ["Tech lead in a venture poised to solve the medical data interoperability problems between health care providers.",
                    "Conducted primary research with doctors, pharmacists, consultants, and patients to explore product-market fit and market penetration strategies.",
                    "Developed software based on lean cost constraints, data compliance and privacy standrads, market feedback."],
            link: ""
        },
        {
            Employer: ["Partition"],
            Job: "Entrepreneur/ Full-Stack Developer",
            img: partiton,
            work: ["Developed a personal finance manangment platform, designed \
                    to help users manage their expenses across multiple accounts",
                    ],
            link: "https://youtu.be/Xr3_mRbtEBc"
        },
        {
            Employer:["University of Pennsylvania","Department of Computer & Information Science" ],
            Job:"CIS 3500: Teaching Assistant",
            img: cis,
            work: ["Managed a semester-long web & mobile development project with a team of 5 students",
            "Implemented effective sprint planning to achieve weekly project milestones",
            "Guest taught a lecture and regularly onboarded students to new web development technologies"],
            link: "https://cis-3500.github.io/docs/example/staff/"
        },
        {
            Employer:["University of Pennsylvania","Department of Electrical & Systems Engineering" ],
            Job:"ESE 2150: Teaching Assistant",
            img: cis,
            work: ["Led weekly office hours where I taught analogue circuit material to students.",
            "Designed grading scheme that achieve consistency & grade assignments, quizzes and exams.",
            "Regularly addressed student questions and queries on discussion boards regarding analogue circuit material."],
            link: "https://detkin.ese.upenn.edu/ese-215/"
        },
        {
            Employer: ["Wharton Africa Business Forum"],
            Job: "Vice President of Entertainment",
            img: wabfIcon,
            work: ["Secured venues, booked headline artists, negotiated with vendors,\
                    and planned events to deliver a high-quality experience for over \
                    250 conference attendees."],
            link: "https://www.forum.whartonafrica.com"
        },
    ]
    
    return (
        <div 
            className={`${styles.blackTopLeftBottomRight }`}
            style={{height: "fit-content",  width: "100%"}}
        >
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{marginTop: 50}}>Experience</h1>
                <h3 style={{fontWeight: 200, marginBottom: 30}}>Learn more about my professional experiences</h3>

                <div   
                    className={`${styles.cardBlur} ${styles.cardGrad} ${styles.glassLines} ${styles.flexSwapRC}`} 
                    style={{
                        display: "flex", 
                        flex: 1, 
                        width: "80vw", 
                        height: "100%",
                        borderRadius:"20px", 
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        alignItems: "center",                
                        overflow: "auto", 
                        overflowX: "auto", 
                        overflowY: "hidden", 
                        position: "relative", 
                    }}
                >  
                    <SideBar 
                        Items={exp} 
                        onClick={(event) => setSelected(event)}
                        selected={selected}
                    />
                    <div   
                        style={{
                            display: "flex", 
                            flexDirection: "column", 
                            flex: 2, 
                            marginTop: "2%",
                            minHeight: 550,
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "auto",
                        }}
                    >
                        <img src={exp[selected].img} height="100vw" style={{borderRadius: 10, marginBottom: 10}}/>
                        <h2>{exp[selected].Employer[0]}</h2>
                        {exp[selected].Employer.length > 1 && <h2>{exp[selected].Employer[1]}</h2>}
                        <h3 style={{color: "#cffcfc", marginBottom: 10 }}>{exp[selected].Job}</h3>
                        <ul style={{textAlign: "left", width: "75%"}}>
                            {exp[selected].work.map((w, index)=>(
                                <li key={index}><p>{w}</p></li>
                            ))}
                        </ul>

                        {exp[selected].link !== "" ?
                            <a 
                                href={exp[selected].link} 
                                style={{marginTop: 20, fontWeight: "bold"}}
                            >
                                <div 
                                    className={`${styles.buttonColor}`}
                                    style={{
                                        display:"flex", alignItems:"center",
                                        paddingBlock: 5, paddingInline: 15,
                                        borderRadius: 500
                                    }}
                                >
                                    <h3 style={{fontWeight: "bold"}}>Learn More</h3>
                                    <img
                                        src={redirectIcon}
                                        width={30}
                                        alt="Rediect"
                                        style={{ filter:"invert(100%)"}}
                                    />

                                </div>
                                
                                
                            </a> 
                            : 
                            <h3 style={{marginTop: 20}}>
                                More coming soon...
                            </h3>
                    }  

                    </div>
                </div>
            </div>
        </div>
    );
}