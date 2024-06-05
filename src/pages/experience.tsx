'use client'
import React, { useState } from 'react'

import styles from "../page.module.css"
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
            story: "At SLICE HealthTech, my work revolved around tackling the intricate web \
                    of data interoperability issues between healthcare facilities. It was an \
                    ambitious undertaking – taking a broad problem statement and unpacking it \
                    layer by layer until we could map out the entire landscape. But that was just \
                    the beginning. In true entrepreneurial spirit, we took that deep understanding \
                    and transformed it into the genesis of our patient-facing solution.\
                    \n\n\
                    The true joy of my role lied in the challenges of cartography, of map-making itself.\
                    I meticulously mapped problems to questions, questions to exploration activities, \
                    and those activities iteratively led us towards market-validated solutions. \
                    Each step raised new inquiries to be pursued relentlessly.\
                    \n\n\
                    On the research front, I grappled with questions like: What were we really trying \
                    to uncover when building this problem space? What information did we need to \
                    propel us forward, and how could we acquire it? What functionalities must we build, \
                    and who were the essential experts we needed to engage?\
                    \n\n\
                    Pivoting to product development brought forth a new set of critical questions: Who \
                    is our end-user? What are their current behaviors and pain points? How do they \
                    experience this problem we're aiming to solve? How do they perceive our proposed \
                    solution? I've worked across the full product design and development pipeline – \
                    UI/UX design, frontend and backend development. My driving purpose is viewing \
                    technology through the lens of its utility to end-users.\
                    \n\n\
                    As I delved deeper, extracting insights through activities like consulting industry \
                    experts, patients, doctors and other vital stakeholders, developing software \
                    prototypes and MVPs, a layer of program management was paramount. At each stage:\
                    \n\n\
                    First, I established a hypothesis – something specific and falsifiable that needed \
                    validating or rejecting. Then, I meticulously designed activities to attain those \
                    answers, be it stakeholder interviews, user testing or technical prototyping. \
                    Finally, I integrated those findings into the evolving, complex map of the problem \
                    domain, allowing us to iterate on increasingly refined solutions aligned with key \
                    criteria.\
                    \n\n\
                    My tenure as Tech Lead at SLICE HealthTech exposed me to the intricacies of harmonizing \
                    product strategies with genuine user needs, particularly in the labyrinthine \
                    healthcare arena. It was mapped discovery and purposeful creation colliding, \
                    an intersection where truly impactful products take form.\
                    ",
            photos: "",
        },
        {
            Employer: ["Partition"],
            Job: "Entrepreneur/ Full-Stack Developer",
            img: partiton,
            title: "Technological Utility",
            story: "Tech's increasing connectedness, progressing from plugging in variables to \
                    functions, classes, and now easily integrating specialized software through \
                    APIs, has changed the complexity and specialization of what can be plugged in.\
                    This has transformed the skills required to build solutions, making it easier \
                    than ever due to plug-and-play, albeit with the risk of buying into trendiness \
                    and falling into the masses. This necessitated a focus on standing out by building \
                    for the user, where the underlying power lies in the plug-and-play world's ability \
                    for rapid iteration.\
                    \n\n\ More Coming Soon!",
            photos: "",
        },
        {
            Employer:["University of Pennsylvania","Department of Computer & Information Science" ],
            Job:"CIS 3500: Teaching Assistant",
            img: cis,
            title: "People & First Principles",
            story: "How to motivate teams and manage processes when working towards a goal...\
                    \n\n\ More Coming Soon!",
            photos: "",
        },
        {
            Employer:["University of Pennsylvania","Department of Electrical & Systems Engineering" ],
            Job:"ESE 2150: Teaching Assistant",
            img: cis,
            title: "The Transfer of Intuition",
            story: "The art of teaching passing your intuition by talking through your thought process...\
                    \n\n\ More Coming Soon!",
            photos: "",
        },
        {
            Employer: ["Wharton Africa Business Forum"],
            Job: "Vice President of Entertainment",
            img:wabfIcon,
            title: "The Communal Context of Goal Reaching",
            story: "Coordinating all aspects of entertainment, performances, and festivites for the US's longest running Africa business conference...\
                    \n\n\ More Coming Soon!",
            photos: "",
        },
    ]
    
    return (
        <div 
            className={`${styles.blackTopLeftBottomRight }`}
            style={{alignItems: "center", textAlign:"left", paddingInline:100,
                    height: "90vh",  width: "100%",  
                }}
        >
            <div>
                <h2 className={styles.h1} style={{marginTop: 50}}>Experience</h2>
                <h3 style={{fontWeight: 200, fontSize:"20pt", marginBottom: 30}}>Learn more about my professional experiences</h3>

                <div style={{display: "flex", flexDirection: "row", width: "100%", height: "100%"}}>
                    <SideBar 
                        Items={exp} 
                        onClick={(event) => setSelected(event)}
                        selected={selected}
                    />
                    <div   
                        className={`${styles.cardBlur} ${styles.cardGrad}`} 
                        style={{
                            display: "flex", flex:2, flexDirection: "column",
                            height: 520,
                            borderColor: "white",
                            borderStyle: "solid",
                            borderWidth: "0.5px 0 0 0.5px",
                            borderRadius:"20px", 
                            paddingInline: "30px",
                            paddingBlock: "30px",
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                            overflow: "auto",
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