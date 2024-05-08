'use client'
import styles from "../page.module.css"
import React, { useState, useEffect} from 'react'

export default function Overview() {
    const [selected, setSelected] = useState(-1);

    const areas = [
        {
            expertise: "Frontend", 
            decription: "Cross-platform application development", 
        },
        {
            expertise: "Backend Dev", 
            decription: "Distributed Web Systems Design" ,
        },
        {
            expertise: "Software Product Design", 
            decription: "",
        },
        {
            expertise: "IoT System", 
            decription: "",
        }
    ]

    

    return (
        <div 
        className={`${styles.blackTopLeftBottomRight }`}
            style={{textAlign: "left",
                    width:"100%", height: "20vh",  
                    display: "flex", flexDirection: "row",
                }}
        > 

            <div 
                onMouseEnter={() => setSelected(-1)}
                style={{
                    display: "flex", 
                    flex: 1.3,
                    flexDirection: "column",
                    minWidth: "25%",
                    paddingInline: 40,
                    alignItems: "center"
                }}
            >
                <h1 style={{
                        width: "80%", 
                        fontSize: 50 , 
                        marginTop: 30,
                        // marginTop: 300
                    }}
                >
                    Areas of Expertise 
                </h1>
                {/* <p>What I build with those skills</p> */}
            </div>    
            {areas.map((a, index) => (
                <div 
                    // onMouseEnter={() => setSelected(index)}
                    className={styles.overviewDiv}
                    style={{
                        display: "flex", 
                        flexDirection: "column",
                        flex: index === selected ? 7 : 1, 
                        paddingInline: index === selected ? 40 : 20,
                        backgroundColor: "rgba(17, 156, 156, 0." + (index + 1) +")",
                        // transition: "flex 0.01s ease-out"
                        justifyContent: "center"
                    }}
                >
                    <h1 style={{
                            width: "80%", 
                            fontSize: index === selected ? 50 : 30, 
                            // marginTop: index === selected ? 50 : 500
                            // marginTop: 50
                        }}
                    >
                        {a.expertise}
                    </h1>
                    {   index === selected && 
                        <p>{a.decription}</p>
                    }
                </div>    
            ))}

                    
        </div>
    );
}