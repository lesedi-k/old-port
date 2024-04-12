import styles from "../page.module.css";

export default function Bg1() {

    return (
        <div className={styles.bgBlur}
            style={{
                width: "100vw",
            }}
        >
            <div
                className={styles.slideTopLeft}
                style={{
                    width: 500,
                    height: 500,
                    borderRadius: "50%", 
                    position: "relative",
                    transform: "translate(-40%, 100%)", /* center the circle */
                    background: "linear-gradient(45deg, #101d36, #79c4c9)", /* linear gradient */
                }}
            />

            <div
                className={styles.slideLeft}
                style={{
                    width: 250,
                    height: 250,
                    borderRadius: "50%", 
                    position: "relative",
                    transform: "translate(-130%, 270%)",
                    background: "linear-gradient(50deg, #092430, #79c4c9)", /* linear gradient */
                }}
            />

            <div
                className={styles.slideTopRight}
                style={{
                    width: 500,
                    height: 500,
                    borderRadius: "50%", 
                    position: "relative",
                    transform: "translate(80%, -20%)", /* center the circle */
                    background: "linear-gradient(230deg, #101d36, #79c4c9)", /* linear gradient */
                }}
            />                  


        </div>
    );

}