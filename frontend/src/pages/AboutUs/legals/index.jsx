import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";

const Legals = () => {
    return ( 
        <div style={{overflowX: "hidden"}}>
            <TermsAndConditions />
            <PrivacyPolicy />
        </div>
     );
}
 
export default Legals;