'use client'
import styles from "../page.module.css"
import React, { useState } from 'react'

export default function Overview() {
    const [selected, setSelected] = useState(-1);

    const areas = [
        {
            expertise: "Frontend Development", 
            decription: "Cross-platform application development", 
        },
        {
            expertise: "Backend Development", 
            decription: "Distributed Web Systems Design" ,
        },
        {
            expertise: "Software Product Design", 
            decription: "",
        },
        {
            expertise: "IoT System Development", 
            decription: "",
        }
    ]

    

    return (
        <div 
            className={`${styles.blackTopLeftBottomRight}`}
            style={{textAlign: "left",
                    width:"100%", height: "20vh",  
                    display: "flex",
                }}
        > 

            <div 
                onMouseEnter={() => setSelected(-1)}
                style={{
                    display: "flex", 
                    flex: 1.1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2 style={{
                        width: "80%", 
                        marginInline: 40,
                    }}
                >
                    Areas of Expertise 
                </h2>
                {/* <p>What I build with those skills</p> */}
            </div>    
            <div 
                style={{display:"flex", flex:4}}
                className={styles.areaList}
            >
                {areas.map((a, index) => (
                    <div 
                        onMouseEnter={() => setSelected(index)}
                        key={a+""+index}
                        // className={styles.overviewDiv}
                        style={{
                            display: "flex", 
                            flexDirection: "column",
                            minWidth: "fit-content",
                            flex: 1, 
                            // paddingInline: index === selected ? 40 : 20,
                            backgroundColor: "rgba(17, 156, 156, 0." + (index + 1) +")",
                            transition: "flex 0.01s ease-out",
                            justifyContent: "center",
                            textAlign: "left"
                        }}
                    >
                        <h3 
                            className={`${styles.slideLeftText}`}
                            style={{
                                width: "80%",
                                fontWeight:"normal"
                            }}
                        >
                            {a.expertise}
                        </h3>
                    </div>    
                ))}
            </div>
            
                    
        </div>
    );
}