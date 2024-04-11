import { CardComponent } from "./types"

export const Card: CardComponent = ({Employer, Job, Description, img}) => {
    return (
        <div style={{
                display: "flex",
                flexDirection: "column",
                border: "0.5px solid white", 
                borderRadius:"20px", 
                paddingInline: "30px",
                paddingBlock: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                flex: "0 0 25%", 
                margin: "1% 1%" ,
                textAlign: "center",
                minHeight: "auto",
                maxHeight: "60vh"
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