
import "../page.module.css"
import "../App.css";
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";
import { Card } from "../components/cards";
import githubIcon from "../assets/github.png"
import LinkedInIcon from "../assets/linkedin.webp"
import MailIcon from "../assets/mail.png"
import tower1 from "../assets/tower1.jpg"



export default function About() {

    const skills : string[] = [
        "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "C, C++ & C#", "Kotlin",
        "Next.js", "Node.js", "OCaml", "UPPAAL", "Figma", "Illustrator"
]

    return (
        <div 
            className={`${styles.blackTopRightBottomLeft}`}
            style={{display: "flex", width: "100%",
                    paddingTop:200,
                    paddingInline:"10%", height: "105vh", zIndex: 1,
                    borderBottomRightRadius: 40, 
                    borderBottomLeftRadius: 40, 
            }}
        >
            <div className={styles.slideUp2}>
                <h1 style={{fontSize: "50pt", color:"black", marginTop: 60}}>Lesedi Kereteletswe</h1>
                <h2 style={{fontSize: "30pt", color:"grey", marginBottom: 10}}>Software Engineer</h2>
                <p style={{marginBottom:20, textWrap: "wrap", width: "50%"}}>
                    I’m not the kind of special that comes attached to every “I love you” I hear.
                    You’re so special. I love you.
                    You’re so smart. I love you.
                    You’re going to change the world I love you.
                    You’re so beautiful. i love you.
                    But what if i wasn’t. What if I’m not. What happens to the love then?
                    Does it stop?
                </p>

                <div style={{marginBottom: 40}}>
                    <a
                        href="https://www.linkedin.com/in/lesedi-kereteletswe/"
                        style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "14pt"}}
                    >
                        <img
                        src={LinkedInIcon}
                        width={30}
                        alt="LinkedIn Icon"
                        style={{marginRight:10, filter:"invert(100%)"}}
                        />
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/lesedi-k"
                        style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "14pt"}}
                    >
                        <img
                        src={githubIcon}
                        width={30}
                        alt="Github Icon"
                        style={{marginLeft:20, marginRight:10}}
                        />
                        Github
                    </a>

                    <a 
                        href="mailto:lesedi.kereteletswe@gmail.com"
                        style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "14pt"}}
                    >
                        <img
                        src={MailIcon}
                        height={30}
                        alt="mail"
                        style={{marginLeft: 20}}
                        />
                        Email
                    </a>

                    <div style={{
                            position: "absolute", right: 200, top: 200,
                            // backgroundColor: "black", 
                            width: 400, height: 500, zIndex: 1
                        }}
                    >
                        <img 
                            src={tower1}
                            style={{height: "100%"}}
                        />
                    </div>

                    <div 
                        className={`${styles.cardBlur} ${styles.cardGrad}`}
                        style={{
                            position: "absolute", right: 330, top: 620,
                            width: 700,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            borderColor: "white",
                            borderStyle: "solid",
                            borderWidth: "0.5px 0 0 0.5px",
                            borderRadius:"20px", 
                            paddingInline: "30px",
                            paddingBlock: "20px",
                            zIndex: 2,
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <h1> Skills & Tools</h1>
                        <div 
                            className={styles.dotAppear}
                            style={{
                                display: "flex", 
                                flexDirection: 'row', 
                                flexWrap: "wrap", 
                                justifyContent:"flex-start",
                            }}
                        >
                            {skills.map((s) => (
                                <Bubble key={s+"_id"} Skill={s} link={""}/>
                            ))}
                        </div>
                    </div>


                    <div 
                        className={`${styles.cardBlur} ${styles.cardGrad}`}
                        style={{
                            position: "absolute", right: 50, top: 150,
                            width: 450,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            borderColor: "white",
                            borderStyle: "solid",
                            borderWidth: "0.5px 0 0 0.5px",
                            borderRadius:"20px", 
                            paddingInline: "30px",
                            paddingBlock: "20px",
                            zIndex: 2,
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <h1> Something Smaller Will go here</h1>
                        <p>Maybe we were special not because of what we were born to do, but what we did.</p>
                        
                    </div>

                </div>
                
            </div>
            
            
        </div>
    );
}