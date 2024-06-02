
import styles from "../page.module.css"

function GlassCard({}) {
    return (
        <div 
            className={`${styles.cardBlur} ${styles.cardGrad}`}
            style={{
                position: "absolute", right: 350, top: 600,
                width: 700,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                borderColor: "white",
                borderStyle: "solid",
                borderWidth: "0.5px 0 0 0.5px",
                borderRadius:"20px", 
                paddingInline: "30px",
                paddingBlock: "20px",
                zIndex: 2,
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* {content} */}
        </div>
    );
}