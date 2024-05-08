
import "../page.module.css"
import "../App.css";
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";
import githubIcon from "../assets/github.png"
import LinkedInIcon from "../assets/linkedin.webp"
import MailIcon from "../assets/mail.png"
import me from "../assets/city3.jpeg"



export default function About() {

    const skills : string[] = [
        "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "C, C++ & C#", "Kotlin",
        "Next.js", "Node.js", "OCaml", "UPPAAL", "Figma", "Illustrator"
]

    return (
        <div 
            className={`${styles.blackTopRightBottomLeft}`}
            style={{display: "flex", 
                    width: "100%", height: "100vh", zIndex: 1,
                }}
        >
            <div className={styles.slideUp2}
                style={{display: "flex", flexDirection: "row"}}
            >
                <div style={{display: "flex", flex: 3.5, flexDirection: "column",
                    paddingTop:150, 
                    marginInline:100, 
                }}>

                    <h1 style={{fontSize: "50pt",  marginTop: 60}}>Lesedi Kereteletswe</h1>
                    <h2 style={{fontSize: "30pt", color:"#9f9f9f", marginBottom: 10}}>Software Engineer</h2>
                    <p style={{marginBottom:20, textWrap: "wrap", width: "95%"}}>
                        My personal journey with tech.
                        About the goal of contributing to tech products.
                        Learning about the use of smart systems and what computer Engineering menst to
                        what growing in the space means to me.
                        The squeezer, the people that motivate the product. The thinking that motivates it all.
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
                            style={{marginRight:10}}
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
                            style={{marginLeft:20, marginRight:10, filter:"invert(100%)"}}
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
                            style={{marginLeft: 20, filter:"invert(100%)"}}
                            />
                            Email
                        </a>
                    </div>
                </div>
                
                {/* Photo Div*/}
                <div style={{
                        display: "flex", flex: 3,
                        backgroundColor: "black", 
                        height: "100%", 
                    }}
                >
                    <img 
                        src={me}
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            filter: "brightness(80%) contrast(100%)" 
                          }}
                    />
                </div>
            </div>
            
            {/* Absolute Divs */}
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
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "rgba(0,0,0,0.4)"
                }}
            >
                <h1> ... is my contribution to the vision</h1>
                <p>Maybe we were special not because of what we were born to do, but what we did.</p>
            </div>
            
        </div>
    );
}