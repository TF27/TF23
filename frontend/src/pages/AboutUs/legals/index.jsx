import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import "./legals.css";

const Legals = () => {
    return ( 
        <div style={{overflowX: "hidden"}}>
            <div className="legal_bg" />
            <TermsAndConditions />
            <PrivacyPolicy />
        </div>
     );
}
 
export default Legals;