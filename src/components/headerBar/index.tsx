import { HeaderComponent } from "./types"
import styles from "../../page.module.css"

export const Header: HeaderComponent = ({Items, onClick}) => {

    return (
        <>
            <div 
                className={`${styles.cardBlur} ${styles.cardGrad} ${styles.headerBar}`}
                id="headerBar"
            >
                <div 
                    className={styles.headerTitleDiv}
                >
                    {Items.map((i) => (
                        <p 
                            id={i + "_heading"} 
                            key={i + "_heading_id"}
                            onClick={() => onClick(i)} 
                        > 
                            {i}
                        </p>
                    ))}
                </div>
                
                <p className={styles.hideOnMobile}>Built by <span style={{fontWeight:"bold"}}>Lesedi Kereteletswe</span></p>
                <div 
                    id="slider"
                    className={`${styles.cardBlur} ${styles.cardGrad} ${styles.buttonColor} ${styles.slider}`}
                />
            </div>
            <div className={styles.blur}/>
        </>
    );
}