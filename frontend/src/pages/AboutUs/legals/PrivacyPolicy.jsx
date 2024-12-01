import { useState } from 'react';
import legals from './legals.module.css';

function PrivacyPolicy(){
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);
    const [toggle6, setToggle6] = useState(false);
    const [toggle7, setToggle7] = useState(false);
    const [toggle8, setToggle8] = useState(false);

    function f1(){
        setToggle1(!toggle1);
        setToggle2(false);
        setToggle3(false);
        setToggle4(false);
        setToggle5(false);
        setToggle6(false);
        setToggle7(false);
        setToggle8(false);
    }
    function f2(){
        setToggle1(false);
        setToggle2(!toggle2);
        setToggle3(false);
        setToggle4(false);
        setToggle5(false);
        setToggle6(false);
        setToggle7(false);
        setToggle8(false);
    }
    function f3(){
        setToggle1(false);
        setToggle2(false);
        setToggle3(!toggle3);
        setToggle4(false);
        setToggle5(false);
        setToggle6(false);
        setToggle7(false);
        setToggle8(false);
    }
    function f4(){
        setToggle1(false);
        setToggle2(false);
        setToggle3(false);
        setToggle4(!toggle4);
        setToggle5(false);
        setToggle6(false);
        setToggle7(false);
        setToggle8(false);
    }
    function f5(){
        setToggle1(false);
        setToggle2(false);
        setToggle3(false);
        setToggle4(false);
        setToggle5(!toggle5);
        setToggle6(false);
        setToggle7(false);
        setToggle8(false);
    }
    function f6(){
        setToggle1(false);
        setToggle2(false);
        setToggle3(false);
        setToggle4(false);
        setToggle5(false);
        setToggle6(!toggle6);
        setToggle7(false);
        setToggle8(false);
    }
    function f7(){
        setToggle1(false);
        setToggle2(false);
        setToggle3(false);
        setToggle4(false);
        setToggle5(false);
        setToggle6(false);
        setToggle7(!toggle7);
        setToggle8(false);
    }
    function f8(){
        setToggle1(false);
        setToggle2(false);
        setToggle3(false);
        setToggle4(false);
        setToggle5(false);
        setToggle6(false);
        setToggle7(false);
        setToggle8(!toggle8);
    }

    return (
        <div className="container justify-content-center" style={{margin:'0 auto', marginTop:'40 px', marginBottom: '50px',borderRadius:'10px'}}>
            <ul className="list-group">
        <div className={`item ${legals.itemuoi}`} >
        <li  className=" list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded " onClick={f1}>GENERAL DATA PROTECTION RULES (GDPR)</li>
        <div className={`${legals.whatd} ${toggle1 ? legals.whatdopen: ''} drop-content border border-light border-1`} >
            <p style={{transition:'ease-in-out'}}>We are a Data Controller of your information.
TECHFEST IIT BOMBAY legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
TECHFEST IIT BOMBAY needs to perform a contract with you
You have given TECHFEST IIT BOMBAY permission to do so
Processing your personal information is in TECHFEST IIT BOMBAY legitimate interests
TECHFEST IIT BOMBAY needs to comply with the law
TECHFEST IIT BOMBAY will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
If you are a European Economic Area (EEA) resident, you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.
In certain circumstances, you have the following data protection rights:
The right to access, update or delete the information we have on you.
The right of rectification.
The right to object.
The right of restriction.
The right to data portability
The right to withdraw consent</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`} >
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f2}>LOG FILES</li>
        <div className={`${legals.whatd} ${toggle2 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>Techfest IIT Bombay follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information. The information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f3}>COOKIES AND WEB BEACONS</li>
        <div className={`${legals.whatd} ${toggle3 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>Like any other website, techfest.org uses 'cookies.' These cookies store information, including visitors' preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors browser type and/or other information.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f4}>PRIVACY POLICIES</li>
        <div className={`${legals.whatd} ${toggle4 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Techfest IIT Bombay.
Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Techfest IIT Bombay, which are sent directly to users' browser.
They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or personalize the advertising content you see on websites you visit.
Note that Techfest IIT Bombay has no access to or control over third-party advertisers' cookies.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f5}>THIRD-PARTY PRIVACY POLICIES</li>
        <div className={`${legals.whatd} ${toggle5 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>Techfest IIT Bombay's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
You can choose to disable cookies through your individual browser options. It can be found on the browsers' respective websites to know more detailed information about cookie management with specific web browsers.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f6}>CHILDREN'S INFORMATION</li>
        <div className={`${legals.whatd} ${toggle6 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
Techfest IIT Bombay does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will do our best efforts to remove such information from our records promptly.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f7}>ONLINE PRIVACY POLICY</li>
       <div className={`${legals.whatd} ${toggle7 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>Our Privacy Policy created at GDPRPrivacyPolicy.net) applies only to our online activities and is valid for visitors to our website regarding the information they shared and/or collected in Techfest IIT Bombay. This policy does not apply to any information collected offline or via channels other than this website.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f8}>CONSENT</li>
        <div className={`${legals.whatd} ${toggle8 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        </div>
        </div>
        </ul>
        </div>
    );
}

export default PrivacyPolicy;