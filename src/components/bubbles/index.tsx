import { BubbleComponent } from "./types"
import React, { useEffect } from 'react';
import styles from "../../page.module.css";

export const Bubble: BubbleComponent = ({Skill, link}) => {

    return (
        <div 
            id="bubbleDiv"
            className={link === "" ? styles.bubbleDivNoHref : styles.bubbleDiv}
        >
            { link === "" ? 
                <p style={{fontSize: "14pt"}}>{Skill} </p>
            :
                <a href={link}>
                    <p style={{fontSize: "14pt"}}>{Skill} </p>
                </a>
            }
        </div>
    );
}