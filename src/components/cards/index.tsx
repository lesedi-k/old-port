import { CardComponent } from "./types"
import styles from "../../page.module.css"

export const ExCard: CardComponent = ({Employer, Job, Description, img}) => {
    return (
        <div 
            className={styles.cardBlur}
            style={{
                display: "flex",
                flexDirection: "column",
                border: "0.5px solid white", 
                borderRadius:"20px", 
                paddingInline: "30px",
                paddingBlock: "20px",
                flex: "0 0 25%", 
                margin: "1% 1%" ,
                textAlign: "center",
                minHeight: "auto",
                maxHeight: 600,
                zIndex: 2,
                boxShadow: "inset 2px 2px 9px rgba(191, 238, 242, 0.5)",
                background: "rgba(245, 245, 245, 0.2)",
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
            <h3 style={{marginBottom: "1vh", fontWeight:300, color:""}}> {Job} </h3>
            <h3 style={{fontWeight: 500}}> {Description} </h3>
        </div>
    );
}

export const Card: CardComponent = ({Employer, Job, Description, img}) => {
    return (
        <div 
            className={styles.cardBlur}
            style={{
                display: "flex",
                flexDirection: "column",
                border: "0.5px solid white", 
                borderRadius:"20px", 
                paddingInline: "30px",
                paddingBlock: "20px",
                flex: "0 0 25%", 
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
            <h3 style={{marginBottom: "1vh", fontWeight:300, color:""}}> {Job} </h3>
            <h3 style={{fontWeight: 500}}> {Description} </h3>
        </div>
    );
}