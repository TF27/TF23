import React, { Children } from 'react'
import ImageOne from './components/ImageOne'
import style from './sustain.module.css'
import { Link } from 'react-router-dom'

function Sustain() {
  return (
    <div className={style.bg}>
        <ImageOne/>
        <div className={style.body}>
            <div> 
                <TextBlocks
                    head = "VISION"
                    para= "To create a world where sustainable practices, deep understanding of environmental issues, collaborative synergy, and comprehensive training lead to a greener tomorrow through responsible and efficient energy conservation. We envision a future where communities and individuals are empowered to reduce their ecological footprint, making a positive impact on the planet for generations to come. Our initiative aims to inspire, educate, and mobilize people toward a more sustainable and energy-efficient world, where resources are preserved, and environmental harmony is achieved."
                />
            </div>
            <div>
                <TextBlocks
                    head = "WHY THIS SOCIAL INITIATIVE?"
                    para = 'In light of the imminent 1.5-degree Celsius temperature increase, our initiative, "SUSTAIN: Sustainability, Understanding, Synergy, and Training for a Green Tomorrow," is dedicated to fostering sustainable practices and energy conservation. We believe that the urgency of the situation necessitates immediate action. By focusing on sustainability, understanding, synergy, and training, we aim to empower individuals and communities to make eco-conscious choices and create a greener future. Together, we can make a substantial impact on the road to a more sustainable and thriving planet for generations to come.'
                />
            </div>
            <div> 
                <TextBlocks
                    head = "ELT"
                    para = "In the context of global energy challenges, there is a pressing need for a shift towards sustainable and renewable energy sources. The current dependence on centralized, fossil fuel-based energy systems results in financial burdens, energy loss, and contributes significantly to global warming and climate change. This situation has led to a growing urgency for increased awareness and education on energy supply and consumption, as well as the adoption of alternative energy solutions. The Energy Literacy Training initiative aims to address these issues by educating individuals and institutions on the impact of energy on the environment and enabling informed decisions for a more sustainable future."    
                />
            </div>
            <div>
                {/* 8 and 15*/}
                <Button text={"Register for Test"} link={"/sustainregtest"}/> 
            </div>
            <div>
                <TextBlocks
                    head = "REC"
                    para = "In the context of global energy challenges, there is a pressing need for a shift towards sustainable and renewable energy sources. The current dependence on centralized, fossil fuel-based energy systems results in financial burdens, energy loss, and contributes significantly to global warming and climate change. This situation has led to a growing urgency for increased awareness and education on energy supply and consumption, as well as the adoption of alternative energy solutions. The Energy Literacy Training initiative aims to address these issues by educating individuals and institutions on the impact of energy on the environment and enabling informed decisions for a more sustainable future."
                />
            </div>
            <div>
                <Button text={"Register for Webinar"} link={"/sustainregwebinar"}/>
            </div>

        </div>
        <SustainFooter/>
    </div>
  )
}

export default Sustain


function Button({text,link}) {

  return (
    <div className={style.button}>
        <Link to={link} className={style.button2} >{text}</Link>
    </div>
  )
}

function TextBlocks({head, para}) {
  return (
    <div className={style.textblock}> 
        <h3>{head}</h3> 
        <p>{para}</p>
    </div>
  )
}

const SustainFooter = () => {
    return (
        <div style={{height:'20vh', margin:'100px auto 5px auto', minWidth:'60%', maxWidth:'min-content', backgroundColor:'rgba(0,0,0,0.5)'}}>
            <div style={{
                border: '3px greenyellow solid',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                padding:'2vh 20vw'
            }}>
                <div>ARNAV PATEL</div>
                <div> +91 99999 99999</div>
                <div>arnav@techfest.org</div>
                
            </div>
        </div>
    )
}