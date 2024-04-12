import { ContactComponent } from "./types"

export const Contact: ContactComponent = ({link, icon, label}) => {
    return (
        <a 
            href={link}
            style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "16pt", marginRight: 30}}
        >
        <img
        src={icon}
        height={40}
        alt="contactIcon"
        style={{marginRight:10, filter: "brightness(0) invert(1) grayscale(100%) brightness(100%) contrast(100%)"}}
        />
            {label}
        </a>
    );
}