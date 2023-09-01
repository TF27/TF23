import WorldMap from "./map";
import Notify from "../../components/Notify/notify";
import OurReach from "./ourreach";
import ImageOne from "./ImageOne";
import parallax from './parallax.module.css';

const Exhibition =()=>{
    
    return(
        <div style={{height:'120vh'}}>
            <ImageOne/>
           <div className={parallax.exhi}>
            <Notify/>
            <WorldMap/>
            <OurReach />
        </div>
        </div>
    )
}
export default Exhibition;
