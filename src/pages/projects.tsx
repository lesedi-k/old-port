import styles from "../page.module.css"

import { Card } from "../components/cards";
import { CardProps } from "../components/cards/types"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


/* Assets */
import stas from "../assets/stas.png"
import mentorLink from "../assets/mentorLink.png"
import ggle from "../assets/ggle.png"
import vvi from "../assets/vvi.png"


export default function Projects() {
    const projects : CardProps[] = [
        {
            Name: "Stas Finance",
            Description: "Developed a personal finance management platform.",
            img: stas,
            gitHub: "https://github.com/lesedi-k/crm",
            link: "https://stas-finance.vercel.app",
        },
        {
            Name: "MentorLink",
            Description: "Developed and Designed UX for an ML Powered Mentorship Matching website.",
            img: mentorLink,
            link: "",
            gitHub: "https://github.com/CassieHorwege/mentorLink",
        },
        {
            Name: "Gooooooogle",
            Description: "Built a google-based search engine that was composed of a frontend, Crawler, Indexer and Page Rank and dynamic server.",
            img: ggle,
            link: "",
            gitHub: "",
        },
        {
            Name: "IoT VVI Pacemaker",
            Description: "Engineered a VVI cardiac pacemaker.",
            img: vvi,
            link: "https://docs.google.com/document/d/15ue-MLZ_eUMnaUnijOEBE9Z2wMQg2p_sMp4-jTsFyRw/edit?usp=sharing",
            gitHub: "",
        },
        {
            Name: "Shell-based Operating System",
            Description: "Developed kernel infrastructure for C language UNIX-based operating system using C.",
            img: "",
            link: "",
            gitHub: "https://github.com/CIS548/22fa-project-2-group-27"
        },
        {
            Name: "ClothesMatcher",
            Description: "Developed and designed website and mobile app for clothes sharing initiatve.",
            img: "",
            link: "",
            gitHub: "https://github.com/cis350/project-team40",
        },
        
    ]

    const direction = getComputedStyle(document.documentElement).getPropertyValue('--swiper-direction')
    const height = getComputedStyle(document.documentElement).getPropertyValue('--swiper-height')
    const slidesPerView = getComputedStyle(document.documentElement).getPropertyValue('--slides-per-view')

    return (
        <div 
            className={`${styles.blackTopRightBottomLeft}`}
            style={{alignItems: "center", textAlign:"center", 
                paddingTop: 80, width:"100%", height: "fill-contents", 
            }}
        >
            <div> {/* Div here for animation reasons */}
                <h1>Projects</h1>
                <div style={{display:"flex", textAlign:"left", marginTop: 20,
                            justifyContent:"center", scrollbarWidth: "none", width: "100%",
                    }}>
                        <Swiper
                            initialSlide={0}
                            loop={true}
                            modules={[EffectCoverflow, Navigation, Autoplay]}
                            spaceBetween={-50}
                            height={height}
                            direction={direction}
                            slidesPerView={slidesPerView}
                            effect="coverflow"
                            centeredSlides={true}

                            coverflowEffect={{
                                rotate: 30, 
                                stretch: 1,
                                depth: 100, 
                                modifier: 1, 
                                slideShadows: false,
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            onSlideChange={() => console.log()}
                            onSwiper={() => console.log()}    
                            style={{
                                width: "75%",
                                height: "1%",
                            }}            
                        >
                        {projects.map((e, index) => (
                            <SwiperSlide key={index}>
                                <Card 
                                    Name={e.Name} 
                                    Description={e.Description}
                                    img={e.img}
                                    link={e.link}
                                    gitHub={e.gitHub}
                                />                
                            </SwiperSlide>    
                        ))}
                        </Swiper>
                        <div className="swiper-button-next" style={{marginRight: "2%", color: "rgba(255,255,255,0.5)", display: direction === "vertical" ? "none" : "block"}}/>
                        <div className="swiper-button-prev" style={{marginRight: "2%", color: "rgba(255,255,255,0.5)", display: direction === "vertical" ? "none" : "block"}}/>
                    </div>
            </div>
        </div>
        
    );
}