import { SideComponent } from "./types"
import styles from "../../page.module.css"

export const SideBar: SideComponent = ({Items, onClick, selected}) => {
    // ${index === selected && styles.buttonColor}
    return (
        <div 
            className={`
                        ${styles.cardBlur} 
                        ${styles.cardGrad}
                        ${styles.sideCompHeight}
                        ${styles.flexSwapCR}`}
                        
            style={{
                display: "flex", 
                flex:1,
                width: "100%",
                justifyItems: "space-between",
                alignItems: "flex-start",
                overflow: "auto", 
                overflowX: "auto", 
                overflowY: "hidden", 
                position: "relative", 
            }}
        >
                {Items.map((i, index) => (
                    <div
                        className={`${index === selected && styles.buttonColor}
                                    ${index < Items.length - 1 && styles.lineFlex}
                                `}
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
                            height: "100%",
                            justifyContent: "center",
                            clipPath: "inset(0 0 0 0)"
                        }}
                    >
                            <h3> {i.Employer[0]}</h3>
                            {i.Employer.length > 1 && <h4 className={styles.hideOnMobile}> {i.Employer[1]}</h4>}
                            <p >{i.Job}</p>
                    </div>
                ))}
        </div>
    );
}