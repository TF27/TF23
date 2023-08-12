import WorldMap from "./map";
import Notify from "../../components/Notify/notify";
import OurReach from "./ourreach";

const Exhibition =()=>{
    
    return(
        <div className="Exhibitions">
            <Notify/>
            <WorldMap/>
            <OurReach />
        </div>
    )
}
export default Exhibition;
