'use client'
import styles from "../page.module.css"
import { Card } from "../components/cards";
import { CardProps } from "../components/cards/types"

import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, Parallax, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Projects() {
    const projects : CardProps[] = [
        {
            Employer: ["MentorLink"],
            Job: "UI/UX Designer & Full-Stack Developer",
            Description: "Developed and Designed UX for an ML Powered Mentorship Matching website.",
            img: "",
        },
        {
            Employer: ["Gooooooogle"],
            Job: "Software Engineer",
            Description: "Built a google-based search engine that was composed of a frontend, Crawler, Indexer and Page Rank and dynamic server.",
            img: "",
        },
        {
            Employer: ["ClothesMatcher"],
            Job: "UI/UX Designer & Full-Stack Developer",
            Description: "Developed and designed UI for clothes sharing initiatve.",
            img: "",
        },
        {
            Employer: ["Shell-based Operating System"],
            Job: "Software Engineer",
            Description: "Developed kernel infrastructure for C language UNIX-based operating system using C.",
            img: "",
        },
        {
            Employer: ["IoT VVI Pacemaker"],
            Job: "Embedded Systems Engineer",
            Description: "Engineered a VVI cardiac pacemaker.",
            img: "",
        },
    ]
    
    return (
        <div 
        className={`${styles.blackTopLeftBottomRight }`}
            style={{alignItems: "center", textAlign:"center", paddingInline: 230 , 
                paddingTop: 80, width:"100%", height: "100vh", 
            }}
        >
            <h1 className={styles.h1}>Projects</h1>

            {/* <div style={{display:"flex", textAlign:"left", columnGap: 3, marginTop: 50,
                            justifyContent:"center", scrollbarWidth: "none", width: "100%",
                }}>
                    <Swiper
                        initialSlide={0}
                        loop={true}
                        modules={[EffectCoverflow]}
                        spaceBetween={40}
                        slidesPerView={3}
                        effect="coverflow" // Set the effect to 'coverflow'
                        coverflowEffect={{
                            rotate: 30, 
                            stretch: 0,
                            depth: 100, 
                            modifier: 1, 
                            slideShadows: false,
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={() => console.log()}    
                        style={{
                            width: "100%"
                        }}     
                        autoplay={{ delay: 3000 }}                
                    >
                    <SwiperSlide/>
                    {projects.map((e) => (
                        <SwiperSlide>
                            <Card 
                            Employer={e.Employer} 
                            Job={e.Job}
                            Description={e.Description}
                            img={e.img}
                        />                
                        </SwiperSlide>    
                    ))}
                    <SwiperSlide/>
                    </Swiper>
                </div> */}
                <div style={{
                display: "flex", 
                flexDirection: 'row', 
                flexWrap: "wrap", 
                justifyContent:"center",
                marginTop:"2vh",
            }}>
                {projects.map((p) => (
                    <Card
                        key={p.Employer[0]}
                        Employer={p.Employer}
                        Job={p.Job}
                        Description={p.Description}
                        img={p.img}
                    />
                ))}

            </div>
            
        </div>
    );
}