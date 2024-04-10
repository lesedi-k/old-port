import { BubbleComponent } from "./types"

export const Bubble: BubbleComponent = ({Skill, link}) => {
    return (
        <div style={{
            border: "0.5px solid white", 
            borderRadius:"50px", 
            margin: "8px",
            paddingInline: "16px",
            paddingBlock: "8px",
            backgroundColor: "rgba(177, 238, 242, 0.25)"
        }}
        >
            <a href={link}>
                <p style={{fontSize: "14pt"}}>{Skill} </p>
            </a>
        </div>
    );
}