import Notify from "../../components/Notify/notify";
import WorldMap from "./map";
import bf from './assets/lectbg.png';
import OurReach from "../../components/OurReach/ourreach";

const Lectures = () => {

    const style = {
        paddingBottom: '20px',
        background: `url(${bf})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    }
    return ( 
        <div className="Lectures" style={style}>
            <Notify />
            <WorldMap />
            <OurReach />
        </div>
     );
}
 
export default Lectures;