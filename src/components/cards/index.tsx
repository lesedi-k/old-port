import { CardComponent } from "./types"
import styles from "../../page.module.css"

export const ExCard: CardComponent = ({Employer, Job, Description, img}) => {
    return (
        <div 
            className={`${styles.cardBlur} ${styles.cardGrad}`}
            style={{
                display: "flex",
                flexDirection: "column",
                borderColor: "white",
                borderStyle: "solid",
                borderWidth: "0.5px 0 0 0.5px",
                borderRadius:"20px", 
                paddingInline: "30px",
                paddingBlock: "20px",
                flex: "0 0 25%", 
                margin: "1% 1%" ,
                textAlign: "center",
                height: 500,
                zIndex: 2,
                color: "#ffffff"
            }}
        >
            {img && 
                <img
                    src={img}
                    alt="expeirence icon"
                    style={{maxHeight: 100, maxWidth: 900, alignSelf: "center", marginBottom:"3vh", marginTop:"3vh", borderRadius: "10px", 
                    objectFit:"fill"}}
                />
            }
            
            <h2> {Employer[0]}{Employer.length > 1 && ","}</h2>
            {Employer.length > 1 && <h2> {Employer[1]} </h2>}
            <h3 style={{marginBottom: "1vh", fontWeight:"bold", color:"#d2f7f5"}}> {Job} </h3>
            <h3 style={{fontWeight: 300, fontSize: "13pt"}}> {Description} </h3>
        </div>
    );
}

export const Card: CardComponent = ({Employer, Job, Description, img}) => {
    return (
        <div 
            className={`${styles.cardBlur} ${styles.cardGrad}`}
            style={{
                display: "flex",
                flexDirection: "column",
                borderColor: "white",
                borderStyle: "solid",
                borderWidth: "0.5px 0 0 0.5px",
                borderRadius:"20px", 
                paddingInline: "30px",
                paddingBlock: "20px",
                flex: "0 0 30%", 
                margin: "1% 1%" ,
                textAlign: "center",
                minHeight: "auto",
                maxHeight: 600,
                zIndex: 2,
                boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            {img && 
                <img
                    src={img}
                    height={100}
                    alt="expeirence icon"
                    style={{alignSelf: "center", marginBottom:"3vh", marginTop:"3vh", borderRadius: "10px", 
                    objectFit:"fill"}}
                />
            }
            
            <h2> {Employer[0]}{Employer.length > 1 && ","}</h2>
            {Employer.length > 1 && <h2> {Employer[1]} </h2>}
            <h3 style={{marginBottom: "1vh", fontWeight:500, color:""}}> {Job} </h3>
            <h3 style={{fontWeight: 300}}> {Description} </h3>
        </div>
    );
}