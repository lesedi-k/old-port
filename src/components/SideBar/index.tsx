import { SideComponent } from "./types"
import styles from "../../page.module.css"

export const SideBar: SideComponent = ({Items, onClick, selected}) => {
    // ${index === selected && styles.buttonColor}
    return (
        <div 
            className={`${styles.cardBlur} ${styles.cardGrad}`}
            style={{
                display: "flex", flex:1, flexDirection: "column",
                height: 560, 
                justifyItems: "space-between",
                alignItems: "flex-start"
            }}
        >
                {Items.map((i, index) => (
                    <div
                    className={`${index === selected && styles.buttonColor}`}
                        onClick={() => onClick(index)}
                        key={index}
                        style={{
                            flex: 1,
                            display:"flex",
                            flexDirection: "column",
                            zIndex: 2,
                            cursor: "pointer",
                            paddingBlock: "3%",
                            paddingInline: "10%",
                            width: "100%",
                            borderBottom: index < Items.length - 1 ? "0.2px solid white" : "",
                            justifyContent: "center",
                        }}
                    >
                            <h3> {i.Employer[0]}</h3>
                            {i.Employer.length > 1 && <h4> {i.Employer[1]}</h4>}
                            <p>{i.Job}</p>
                    </div>
                ))}
        </div>
    );
}