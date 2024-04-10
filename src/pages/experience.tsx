'use client'

import styles from "../page.module.css"
import { Card } from "../components/cards";
import wabfIcon from "../assets/wabf.png"
import slice from  "../assets/slice.jpg"
import cis from  "../assets/seas.png"
import partiton from  "../assets/partition.png"

export default function Experience() {
    return (
        <div style={{alignItems: "center", textAlign:"center", paddingInline:"10vw",
                    backgroundColor: "rgba(156, 164, 166, 1)", color:"#2c2e2e", 
                    borderRadius: "50pt", height: "95vh",
        }}
        >
            <h2 className={styles.h1}>Experience</h2>
            <h3 style={{fontWeight: 200, fontSize:"20pt"}}>Learn more about my professional experiences</h3>

            <div style={{display:"flex", textAlign:"left", columnGap: 10, marginTop: "5vh",
                        overflowX:"scroll" ,justifyContent:"flex-start",
            }}>
                <Card 
                    Employer={["Partition"]} 
                    Job="Entrepreneur/ Full-Stack Dveleoper"
                    Description="
                    Developing an AI powered spending planning that makes budgeting an on the go process and incentivizes healthy budgeting practices."
                    img={partiton}
                />

                <Card 
                    Employer={["Slice HealthTech"]} 
                    Job="Venture Studio Operator"
                    Description="Worked in a team of 3 as the Tech lead to launch a venture that solved the medical data interoperability problem between health care providers in Gaborone, Botswana."
                    img={slice}
                />   

                <Card 
                    Employer={["University of Pennsylvania","Department of Computer and Information Science" ]} 
                    Job="CIS3500: Teaching Assistant"
                    Description=
                        "Managing the execution of team projects, including coordinating team members, setting timelines, and ensuring project goals are achieved within scope and timeline constraints."
                    img={cis}
                />   

                <Card 
                    Employer={["Wharton Africa Business Forum"]} 
                    Job= "Vice President of Entertainment"
                    Description="Coordinating all aspects of entertainment, performances, and festivites for the US's longest running Africa business conference."
                    img={wabfIcon}
                />       
            </div>
        
        </div>
    );
}