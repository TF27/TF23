import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import legals from './legals.module.css';

const Legals = () => {
  return (
    <div className={legals.background}>
        <div className={legals.tnc}>TERMS AND CONDITIONS</div>
        <div className={legals.tnctxt}>These terms and conditions outline the rules and regulations for the use of the Techfest, IIT Bombay Website, located at https://techfest.org/.</div>
        <TermsAndConditions/>
        <div className={legals.privacypolicy}>PRIVACY POLICY</div>
        <div className={legals.privacypolicytxt}>At Techfest IIT Bombay, accessible from https://techfest.org/, one of our main priorities is the privacy of our visitors.</div>
        <PrivacyPolicy/>
    </div>
  )
}

export default Legals
