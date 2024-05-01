'use client'

import styles from "../page.module.css"
import { ExCard } from "../components/cards";
import wabfIcon from "../assets/wabf.png"
import slice from  "../assets/slice.jpg"
import cis from  "../assets/seas.png"
import partiton from  "../assets/partition.png"

import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, Parallax, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Experience() {

    const exp = [
        {
            Employer:["Slice HealthTech"],
            Job: "Venture Studio Operator",
            Description:"Worked in a team of 3 as the Tech lead to launch a venture that solved the medical data interoperability problem between health care providers in Gaborone, Botswana.",
            img: slice
        },
        {
            Employer: ["Wharton Africa Business Forum"],
            Job: "Vice President of Entertainment",
            Description: "Coordinating all aspects of entertainment, performances, and festivites for the US's longest running Africa business conference.",
            img:wabfIcon
        },
        {
            Employer:["University of Pennsylvania","Department of Computer and Information Science" ],
            Job:"CIS3500: Teaching Assistant",
            Description: "Managing the team projects, including coordinating team members, setting timelines, and ensuring project goals are achieved within scope and timeline constraints.",
            img: cis
        },
        {
            Employer: ["Partition"],
            Job: "Entrepreneur/ Full-Stack Developer",
            Description:"Developing an AI powered spending planning that makes budgeting an on the go process and incentivizes healthy budgeting practices.",
            img: partiton
        },
    ]
    
    return (
        <div 
            // className={styles.experienceGrad}
            style={{alignItems: "center", textAlign:"center", paddingInline:100,
                    height: "100vh",  width: "100%"  
                }}
        >
            <div id="experience_div_slide"
            >
                <h2 className={styles.h1}>Experience</h2>
                <h3 style={{fontWeight: 200, fontSize:"20pt"}}>Learn more about my professional experiences</h3>

                <div style={{display:"flex", textAlign:"left", columnGap: 3, marginTop: 50,
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
                            width: "80%"
                        }}     
                        autoplay={{ delay: 3000 }}                
                    >
                    <SwiperSlide/>
                    {exp.map((e) => (
                        <SwiperSlide>
                            <ExCard 
                            Employer={e.Employer} 
                            Job={e.Job}
                            Description={e.Description}
                            img={e.img}
                        />                
                        </SwiperSlide>    
                    ))}
                    <SwiperSlide/>
                    </Swiper>
                </div>
                
            
            </div>
        
        </div>
    );
}