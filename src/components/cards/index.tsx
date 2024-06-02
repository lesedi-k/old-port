import { CardComponent } from "./types"
import styles from "../../page.module.css"
import { isReturnStatement } from "typescript";

export const Card: CardComponent = ({Employer, Job, Description, img, link}) => {

    const handleClick = () => {
        if (link !== "") window.location.href = link 
      };

    return (
        <div 
            className={`${styles.cardBlur} ${styles.cardGrad}`}
            onClick={handleClick}
            style={{
                display: "flex",
                flexDirection: "column",
                borderColor: "white",
                borderStyle: "solid",
                borderWidth: "0.5px 0 0 0.5px",
                borderRadius:"20px", 
                paddingInline: "30px",
                paddingBlock: "20px",
                margin: "1% 1%" ,
                textAlign: "center",
                width: "80%",
                height: "65vh",
                boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: link !== "" ? "pointer" : "",
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