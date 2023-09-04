import { Link } from "react-router-dom";
import './lecture.css';
import styles from './parallax.module.css';
import ImageOne from "./ImageOne";

import Notify from "../../components/Notify/notify";
import WorldMap from "./map";
// import OurReach from "../../components/OurReach/ourreach1";
import OurReach from "./ourreach";
import Carousel from "../../components/Carousel/carousel";
import ContactCard from "../../components/Contact/contact"; 

import img from './assets/europe.jpg';
import img2 from './assets/lectbg.png';
import img3 from './assets/map.png';
import img4 from './assets/NotifyMe.png';

import tiger from "../../components/Contact/test_tiger.jpeg"

const Lectures = () => {

    return (
        <div style={{height:'120vh'}}>
            <ImageOne/>
            <div className={styles.image}>
            
            <Notify />
            <WorldMap />
            <OurReach />
            <div className='checkThis'>
                <h1 style={{marginTop:'80px',marginBottom:'40px'}}>CHECK THIS OUT</h1>
                <div>
                    <h2 style={{marginBottom:'-20px'}}>Exhibitions</h2>
                    <Carousel
                        i1={img}
                        i2={img2}
                        i3={img}
                        i4={img2}
                        i5={img} 
                        i8={img2}
                        i6={img}
                        i7={img2}
                        i9={img}
                        i10={img2}
                    />
                    <div className="difPage">
                        <div className="check_rect1"></div>
                        <div className="check_rect2"><Link to='/exhibitions'>Explore</Link></div>
                    </div>
                </div>
                <div>
                    <h2 style={{marginTop:'40px',marginBottom:'-20px'}}>Lectures</h2>
                    <Carousel
                        i1={img}
                        i2={img2}
                        i3={img}
                        i4={img2}
                        i5={img} 
                        i8={img2}
                        i6={img}
                        i7={img2}
                        i9={img}
                        i10={img2}
                    />
                    <div className="difPage">
                        <div className="check_rect1"></div>
                        <div className="check_rect2"><Link to='/lectures'>Explore</Link></div>
                    </div>
            
                </div>
            </div>
            <div style={{paddingBottom:'100px'}}>
            <h1 style={{marginTop:'80px'}}>CONTACT US</h1>
            <div className="tray">
                
                <div >
                <ContactCard
                    image={tiger}
                    headText="Contact Us"
                    emailText="contact@example.com"
                    phoneNumberText="123-456-7890"
                />
                </div>
                <div >
                <ContactCard
                    image=''
                    headText="Contact Us"
                    emailText="contact@example.com"
                    phoneNumberText="123-456-7890"
                />
                </div>
                
            </div>
            
            </div>
        </div>
        </div>
    );
    
}

export default Lectures;