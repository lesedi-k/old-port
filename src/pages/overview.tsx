'use client'
import styles from "../page.module.css"

export default function Overview() {

    const areas = [
        "Frontend Development", 
        "UI/UX Design",
        "Backend Development",
        "Full-stack Development", 
        "Distributed Web Systems Design",
        "Cross-platform application development", 
        "IoT Systems",
    ]

    return (
        <div 
        className={`${styles.blackTopLeftBottomRight }`}
            style={{alignItems: "center", textAlign: "right", paddingInline:100 ,
                    width:"100%", height: "80vh",  
                }}
        > 
            <h1 className={styles.h1}>Overview</h1>
            <p> What build with those skills</p>
            <div>
                
            </div>
            
        </div>
    );
}