
import "../page.module.css"
import "../App.css";
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";
import githubIcon from "../assets/github.png"
import LinkedInIcon from "../assets/linkedin.webp"
import MailIcon from "../assets/mail.png"
import me from "../assets/art1.png"



export default function About() {

    const skills : string[] = [
        "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "C, C++ & C#", "Kotlin",
        "Next.js", "Node.js", "OCaml", "UPPAAL", "Figma", "Illustrator"
]

    return (
        <div 
            className={`${styles.blackTopRightBottomLeft}`}
            style={{display: "flex", 
                    width: "100%", height: "96vh", zIndex: 1,
                }}
        >
            <div className={styles.slideUp2}
                style={{display: "flex", flexDirection: "row"}}
            >
                <div style={{display: "flex", flex: 3.5, flexDirection: "column",
                    paddingTop:150, 
                    marginInline:100, 
                }}>
                    <code className={styles.typewriter} style={{fontSize: "18pt", marginTop: 60}}> Website Developed by</code>
                    <h1 style={{fontSize: "50pt"}}>Lesedi Kereteletswe</h1>
                    <h2 style={{fontSize: "30pt",  color:"#9f9f9f", marginBottom: 10}}>Software Engineer</h2>
                    <p style={{marginBottom:20, textWrap: "wrap", width: "50%", fontSize: "120%"}}>
                        My journey with technology is driven by the ambition to create meaningful 
                        products that bring us closer to a "smart" world. This has led me to explore the 
                        intersection of technology and entrepreneurship, revealing technology's potential 
                        to enhance quality of life and create better systems of living.
                    </p>

                    <div style={{marginBottom: 20}}>
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

                 {/* <img 
                    src={me}
                    style={{
                        position: "absolute",
                        top: 200,
                        right: 100,
                        height: "50%",
                        objectFit: "cover",
                        filter: "brightness(80%) contrast(100%)" 
                    }}
                /> */}

            </div>
            
            {/* Absolute Divs */}
            <div 
                className={`${styles.cardBlur} ${styles.cardGrad} ${styles.slideLeft}`}
                style={{
                    position: "absolute", 
                    right: "45%", 
                    bottom: "10%",
                    width: "47%",
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
                className={`${styles.cardBlur} ${styles.cardGrad} ${styles.slideLeft}`}
                style={{
                    position: "absolute", 
                    right: "30%", 
                    top: 120,
                    width: "35%",
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
                <h3> Building a Product is Like Telling a Story</h3>
                <p> 
                I view a product as a story evolving with each user interaction,
                line of code, and decision, creating a dynamic narrative of innovation 
                and progress shaped by the challenges it overcomes, the solutions 
                it provides, and the lives it impacts.
                </p>
            </div>
            
        </div>
    );
}