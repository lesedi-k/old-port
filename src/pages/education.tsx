'use client'
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";

export default function Education() {

    const classes = [
        {
            class: "Software Development",
            link: "https://www.seas.upenn.edu/~cis3500/",
        },
        {
            class: "Internet and Web Systems",
            link: "https://cis5550.seas.upenn.edu"
        },
        {
            class: "Data Structures and Algorithms",
            link: "https://www.cis.upenn.edu/~cis1210/current/index.html"
        },
        {
            class: "Operating Systems",
            link: "https://www.seas.upenn.edu/~cis3800/23fa/"
        },
        {
            class: " Computer Organization and Design",
            link: "https://www.cis.upenn.edu/~cis5710/current/"
        },
        {
            class: "Product Design",
            link: "https://catalog.upenn.edu/courses/ipd/"
        },
        {
            class: "Strategy for Intelectual property",
            link: "https://catalog.upenn.edu/courses/lgst/"
        },
        {
            class: "Venture Captial & Entreprenural Managament",
            link: "https://apps.wharton.upenn.edu/syllabi/202230/MGMT2640001/"
        },
        {
            class: "Circuit-Level Modeling, Design, and Optimization for Digital Systems",
            link: "https://www.seas.upenn.edu/~ese3700/"
        },
        {
            class: "Embedded Systems and Micro Controllers",
            link: "https://ese3500.seas.upenn.edu"
        },
        {
            class: "Electrical Circuits and Systems",
            link: "https://detkin.ese.upenn.edu/ese-215/"
        }
    ];

    return (
        <div
        className={`${styles.blackTopRightBottomLeft}`}
            style={{alignItems: "center", textAlign:"center", paddingInline:100 ,
                    width:"100%", height: "100vh",  
                }}
        > 
            <div> {/* Div here for animation reasons */}
                <h1 style={{marginTop:40}}>Education</h1>
                <h1>University of Pennsylvania</h1>
                <h2 style={{fontWeight: 300,}}>Bachelor of Science in Computer Engineering</h2>	
                <h3 style={{fontWeight: 600}}>May 2024</h3>
                
                <h4 style={{marginTop: "30px", fontSize: "25pt"}}>Relavent Coursework:</h4>
                <h3 style={{fontWeight: 200, fontSize:"18pt", color: "grey"}}>Click to learm more about the course</h3>

                <div style={{
                    display:"flex", 
                    flexDirection: 'row', 
                    flexWrap: "wrap", 
                    justifyContent:"center",
                    marginTop:"2vh"
                }}
                >
                    {classes.map((c, index) => (
                        <Bubble key={c+"_id"+index} Skill={c.class} link={c.link}/>
                    ))}
                </div>
            </div>
        </div>
    );
}