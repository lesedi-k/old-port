import { HeaderComponent } from "./types"
import styles from "../../page.module.css"

export const Header: HeaderComponent = ({Items, onClick}) => {

    return (
        <>
            <div 
                className={`${styles.cardBlur} ${styles.cardGrad}`}
                id="headerBar"
                style={{display:"flex", columnGap: "10px", position:"fixed", width:"60%", zIndex: 3, 
                    borderRadius:"50px", 
                    marginTop: "3vh", padding: "20px",
                    justifyContent:"space-between",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",  
                }}
            >
                <div style={{display:"flex", marginLeft: "10px"}}>
                    {Items.map((i) => (
                        <p id={i + "_heading"} 
                            key={i + "_heading_id"}
                            onClick={() => onClick(i)} 
                            style={{zIndex:2, marginRight:"40px", fontSize:"14pt", cursor:"pointer"
                        }}> 
                            {i}
                        </p>
                    ))}
                </div>
                
                <p>Built by <span style={{fontWeight:"bold"}}>Lesedi Kereteletswe</span></p>
                <div 
                    id="slider"
                    className={`${styles.cardBlur} ${styles.cardGrad}`}
                    style={{
                        width: "90px",
                        left: 10,
                        height: "80%",
                        backgroundColor: "rgba(75, 155, 179, 0.4)",
                        position:"absolute",
                        top: "10%",
                        borderRadius: "30px",
                    }}
                />
            </div>
            <div className={styles.blur}/>
        </>
    );
}