'use client'
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";

export default function Skills() {
    const skills : string[] = [
        "Frontend Development", 
        "Backend Development",
        "Full-stack Development", 
        "Distributed Web Systems Design",
        // "Cross-platform application development", 
        "Figma",
        "UI/UX Design",
        "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "C, C++ & C#", "Kotlin",
        "Next.js", "Node.js", "OCaml", "UPPAAL", 
]

    
    return (
        <div style={{alignItems: "center", textAlign:"center", paddingInline: 100 , 
            background: "rgba(255,255,255, 0.1)",  borderRadius: 50,
            paddingTop: 20, width:"98%", height: 200, marginBlock:20,
        }}>
            <div 
                className={styles.dotAppear}
                style={{
                    display: "flex", 
                    flexDirection: 'row', 
                    flexWrap: "wrap", 
                    justifyContent:"center",
                    marginInline: 70
                }}
            >
                {skills.map((s) => (
                    <Bubble key={s+"_id"} Skill={s} link={""}/>
                ))}
            </div>
            
        </div>
    );
}