import { BubbleComponent } from "./types"
import styles from "../../page.module.css";

export const Bubble: BubbleComponent = ({Skill, link}) => {

    return (
        <div 
            id="bubbleDiv"
            className={link === "" ? styles.bubbleDivNoHref : styles.bubbleDiv}
        >
            { link === "" ? 
                <p>{Skill} </p>
            :
                <a href={link}>
                    <p>{Skill} </p>
                </a>
            }
        </div>
    );
}