import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import legals from './legals.module.css';

const Legals = () => {
  return (
    <div className={legals.background}>
      <div className={legals.tnc}>TERMS AND CONDITIONS</div>
      <TermsAndConditions/>
      <div className={legals.privacypolicy}></div>
      <PrivacyPolicy/>
    </div>
  )
}

export default Legals
