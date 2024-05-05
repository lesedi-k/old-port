import { SideComponent } from "./types"
import styles from "../../page.module.css"

export const SideBar: SideComponent = ({Items, onClick}) => {

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
                            marginBottom: 40
                        }}
                    >
                        <div style={{ 
                            backgroundColor: "#a3b1b5", height: 50, width: 50, 
                            borderRadius: 50, marginRight: 20
                        }}/>

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