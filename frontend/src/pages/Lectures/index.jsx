import { Link } from "react-router-dom";
import './lecture.css';

import Notify from "../../components/Notify/notify";
import WorldMap from "./map";
import bf from './assets/lectbg.png';
import OurReach from "../../components/OurReach/ourreach1";
import Carousel from "../../components/Carousel/carousel";
import ContactCard from "../../components/Contact/contact"; 

import img from './assets/europe.jpg';
import img2 from './assets/lectbg.png';
import img3 from './assets/map.png';
import img4 from './assets/NotifyMe.png';

import tiger from "../../components/Contact/test_tiger.jpeg"

const Lectures = () => {

    const style = {
        paddingBottom: '20px',
        background: `url(${bf})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100vw',
        overflowX: 'hidden',
    }
    return (
        <div className="Lectures" style={style}>
            <Notify />
            <WorldMap />
            <OurReach />
            <div className='checkThis'>
                <h1>CHECK THIS OUT</h1>
                <div>
                    <h2>Exhibitions</h2>
                    <Carousel
                        i1={img}
                        i2={img2}
                        i3={img3}
                        i4={img4}
                        i5={img} 
                        i8={img2}
                        i6={img3}
                        i7={img4}
                        i9={img}
                        i10={img2}
                    />
                    <div className="difPage">
                        <div className="check_rect1"></div>
                        <div className="check_rect2"><Link to='/exhibitions'>Explore</Link></div>
                    </div>
                </div>
                <div>
                    <h2>Lectures</h2>
                    <Carousel
                        i1={img}
                        i2={img2}
                        i3={img3}
                        i4={img4}
                        i5={img} 
                        i8={img2}
                        i6={img3}
                        i7={img4}
                        i9={img}
                        i10={img2}
                    />
                    <div className="difPage">
                        <div className="check_rect1"></div>
                        <div className="check_rect2"><Link to='/lectures'>Explore</Link></div>
                    </div>
            
                </div>
            </div>
            <div className="tray">
                <ContactCard
                    image={tiger}
                    headText="Contact Us"
                    emailText="contact@example.com"
                    phoneNumberText="123-456-7890"
                />
                <ContactCard
                    image=''
                    headText="Contact Us"
                    emailText="contact@example.com"
                    phoneNumberText="123-456-7890"
                />
                
            </div>
        </div>
    );
    
}

export default Lectures;