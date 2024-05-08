import { SideComponent } from "./types"
import styles from "../../page.module.css"

export const SideBar: SideComponent = ({Items, onClick, selected}) => {
    return (
        <div style={{display: "flex", flex:1, flexDirection: "column"}}>
                {Items.map((i, index) => (
                    <div
                        onClick={() => onClick(index)}
                        key={index}
                        style={{
                            flex: 1,
                            cursor: "pointer",
                            display:"flex",
                            flexDirection: "row",
                            zIndex: 2,
                        }}
                    >
                        <div>
                            <div 
                                className={`${styles.cardBlur} ${styles.cardGrad}`}
                                style={{ 
                                    backgroundColor: index === selected ? "rgba(29, 224, 224, 0.7)":  "", 
                                    height: 50, width: 50, 
                                    borderRadius: 50, marginRight: 20,
                                    borderColor: "white",
                                    borderStyle: "solid",
                                    borderWidth: "0.1px 0 0 0.1px",
                                }}
                            >
                            </div>    
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