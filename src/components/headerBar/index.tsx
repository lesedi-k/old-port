import { HeaderComponent } from "./types"

export const Header: HeaderComponent = ({Items, onClick}) => {

    return (
        <div 
            id="headerBar"
        style={{display:"flex", columnGap: "10px", position:"fixed", width:"60%", zIndex: 3, 
            borderRadius:"50px", backgroundColor: "rgba(0, 0, 0, 1)",
            marginTop: "3vh", padding: "20px",
            justifyContent:"space-between",
            boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.1)",  
            }}
        >
            <div style={{display:"flex", marginLeft: "10px"}}>
                {Items.map((i) => (
                    <p id={i + "_heading"} 
                        key={i + "_heading_id"}
                        onClick={() => onClick(i)} 
                        style={{zIndex:2, marginRight:"40px", fontSize:"16pt", cursor:"pointer"
                    }}> 
                        {i}
                    </p>
                ))}
            </div>
            
            <p>Built by <span style={{fontWeight:"bold"}}>Lesedi Kereteletswe</span></p>
            <div 
                id="slider"
                style={{
                    width: "100.55px",
                    left: 10,
                    height: "80%",
                    backgroundColor: "#256c73",
                    position:"absolute",
                    top: "10%",
                    borderRadius: "30px"
                }}
            />
        </div>
    );
}