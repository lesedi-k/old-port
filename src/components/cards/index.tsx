import React, { useState, useEffect } from 'react'

import styles from "../../page.module.css"

/* Assets */
import githubIcon from "../../assets/github.png"
import redirectIcon from "../../assets/redirect.svg"

/* Components */
import { CardComponent } from "./types"

export const Card: CardComponent = ({Name, Description, img, link, gitHub}) => {


    const [hover, setHover] = useState(false);

    const handleClick = () => {
        if (link !== "") window.location.href = link 
    };
    console.log(img === "")

    return (
        <div
            title={Name}
            className={`${styles.cardBlur} ${styles.cardGrad}`}
            style={{
                display: "flex",
                flexDirection: "column",
                borderColor: "white",
                borderStyle: "solid",
                borderWidth: "0.5px 0 0 0.5px",
                borderRadius:"20px", 
                margin: "1% 1%" ,
                textAlign: "center",
                width: "90%",
                height: "70vh",
                boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={()=> {setHover(true)}}
            onMouseLeave={()=>setHover(false)}
        >     
            {img !== "" && !hover && <img
                src={img}
                alt={Name[0]}
                width="100%"
                height="100%"
                style={{
                    borderRadius:"20px", 
                }}
            />}

            {
             (hover || img === "") && 
             <div style={{
                    display: "flex", flexDirection: "column", 
                    justifyContent: "center", alignSelf: "center", textAlign: "center", 
                    width:"60%", height: "100%"
                }}
            >
                {img === "" && <h1 style={{fontSize: "20pt"}}>More coming soon...</h1> } 
                <h1 style={{fontSize: "50pt"}}>{Name}</h1>
                <h3 style={{fontWeight: 300 }}> {Description} </h3>

                <div style={{marginTop: "1%"}}>
                    {gitHub && 
                        <a 
                            href={gitHub}
                            style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "14pt"}}
                        >
                            <img
                            src={githubIcon}
                            width={40}
                            alt="Github Icon"
                            style={{filter:"invert(100%)"}}
                            />
                    </a>
                    }

                    {link !== "" &&
                        <a 
                            href={link}
                            style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "14pt"}}
                        >
                            <img
                            src={redirectIcon}
                            width={40}
                            alt="Rediect"
                            style={{marginLeft:20, marginRight:10, filter:"invert(100%)"}}
                            />
                        </a>
                    }    
                </div>
             </div>
            }
            
        </div>
    );
}