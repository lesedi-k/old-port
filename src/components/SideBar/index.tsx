import { SideComponent } from "./types"
import styles from "../../page.module.css"

export const SideBar: SideComponent = ({Items, onClick, onScroll}) => {
    return (
        <div style={{display: "flex", flex:1, flexDirection: "column"}}>
                {Items.map((i, index) => (
                    <div
                        //onClick
                        key={index}
                        style={{
                            flex: 1,
                            cursor: "pointer",
                            display:"flex",
                            flexDirection: "row",
                        }}
                    >
                        <div>
                            <div style={{ 
                                backgroundColor: "#a3b1b5", 
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",  
                                height: 50, width: 50, 
                                borderRadius: 50, marginRight: 20
                            }}/>
                            { index < Items.length - 1 && <div style={{borderLeft: "1.5px dashed white", height: 50, marginLeft: 25}}/>}
                        </div>

                        <div style={{marginTop: 5}}>
                            <h3> {i.Employer[0]}</h3>
                            {i.Employer.length > 1 && <h4> {i.Employer[1]}</h4>}
                            <p>{i.Job}</p>
                        </div> 
                    </div>
                ))}
        </div>
    );
}