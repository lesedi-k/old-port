'use client'

import styles from "../page.module.css"
import { ExCard } from "../components/cards";
import wabfIcon from "../assets/wabf.png"
import slice from  "../assets/slice.jpg"
import cis from  "../assets/seas.png"
import partiton from  "../assets/partition.png"

import { SideBar } from "../components/SideBar";

export default function Experience() {

    const exp = [
        {
            Employer:["Slice HealthTech"],
            Job: "Venture Studio Operator",
            img: slice
        },
        {
            Employer: ["Partition"],
            Job: "Entrepreneur/ Full-Stack Developer",
            img: partiton
        },
        {
            Employer:["University of Pennsylvania","Department of Computer & Information Science" ],
            Job:"CIS 3500: Teaching Assistant",
            img: cis
        },
        {
            Employer:["University of Pennsylvania","Department of Electrical & Systems Engineering" ],
            Job:"ESE 2150: Teaching Assistant",
            img: cis
        },
        {
            Employer: ["Wharton Africa Business Forum"],
            Job: "Vice President of Entertainment",
            img:wabfIcon
        },
    ]


    function changeExperience(exp_id: string){

    }
    
    return (
        <div 
            style={{alignItems: "center", textAlign:"left", paddingInline:100,
                    height: "90vh",  width: "100%",  
                    backgroundColor: "#ebebeb"
                }}
        >
            <div id="experience_div_slide">
                <h2 className={styles.h1}>Experience</h2>
                <h3 style={{fontWeight: 200, fontSize:"20pt", marginBottom: 30}}>Learn more about my professional experiences</h3>

                <div style={{display: "flex", flexDirection: "row", width: "100%", height: "100%"}}>
                    <SideBar 
                        Items={exp} 
                        onClick={(event) => changeExperience(event)}
                        onScroll={(event) => changeExperience(event)}
                    />
                    <div style={{display: "flex", flex:2}}>
                        {/* <p>the world and the story</p> */}
                    </div>

                </div>
                
            </div>
        
        </div>
    );
}