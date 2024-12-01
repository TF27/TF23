import { useState } from 'react';
import legals from './legals.module.css';


function TermsAndConditions(){
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
      <div className="container justify-container-center" >
        <ul className="list-group">
        
        <div className={`item ${legals.itemuoi}`}>
            <li  className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f1}>GENERAL DATA PROTECTION REGULATIONS(GDPR)</li>
            
                <div  className={`${legals.whatd} ${toggle1 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Techfest IIT Bombay if you do not agree to take all of the terms and conditions stated on this page.</p>
                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and is compliant with the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
                </div>
            
        </div>

        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f2}>COOKIES</li>
        <div  className={`${legals.whatd} ${toggle2 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>We employ the use of cookies. By accessing Techfest, IIT Bombay, you agreed to use cookies in agreement with Techfest IIT Bombay’s Privacy Policy.Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f3}>PRIVACY POLICIES</li>
        <div className={`${legals.whatd} ${toggle3 ? legals.whatdopen: ''} drop-content border border-light border-1`}><p>Unless otherwise stated, Techfest, IIT Bombay and/or its licensors own the intellectual property rights for all material on Techfest IIT Bombay. All intellectual property rights are reserved. You may access this from Techfest, IIT Bombay for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <p>You must not:</p>
            <p>Republish Material from Techfest IIT Bombay
                Sell, rent, or sub-license material from Techfest IIT Bombay
                Reproduce, duplicate or copy material from Techfest IIT Bombay
                Redistribute content from Techfest IIT Bombay</p>
        <p>This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Techfest, IIT Bombay does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Techfest, IIT Bombay, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Techfest, IIT Bombay shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
        <p>Techfest, IIT Bombay reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes a breach of these Terms and Conditions. You warrant and represent that:</p>
        <p>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy
The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
You hereby grant Techfest, IIT Bombay a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded " onClick={f4}>HYPERLINKING TO OUR CONTENT</li>
        <div className={`${legals.whatd} ${toggle4 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>The following organizations may link to our Website without prior written approval:</p>
            <p>Government agencies;
                Search Engines;
                News organizations;
                Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.
            </p>
            <p>These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>
            <p>We may consider and approve other link requests from the following types of organizations:</p>
            <p>commonly-known consumer and/or business information sources;
                dot.com community sites;
                associations or other groups representing charities;
                online directory distributors;
                internet portals;
                accounting, law and consulting firms; and
                educational institutions and trade associations.</p>
            <p>We will approve link requests from these organizations if we decide that:
                (a) the link would not make us look unfavorably to ourselves or to our accredited businesses;
                (b) the organization does not have any negative records with us;
                (c) the benefit to us from the visibility of the hyperlink compensates for the absence of Techfest, IIT Bombay; and
                (d) the link is in the context of general resource information.</p>
            <p>These organizations may link to our home page so long as the link:
(a) is not in any way deceptive;
(b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and
(c) fits within the context of the linking party’s site.</p>
            <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Techfest, IIT Bombay.</p>
            <p>Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
            <p>Approved organizations may hyperlink to our Website as follows:
By use of our corporate name;
By use of the uniform resource locator being linked to; or
By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</p>
            <p>No use of Techfest, IIT Bombay's logo, or other artwork will be allowed for linking absent a trademark license agreement.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li  className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f5}>FRAMES</li>
        <div className={`${legals.whatd} ${toggle5 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f6}>CONTENT LIABILITY</li>
        <div className={`${legals.whatd} ${toggle6 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li  className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f7}>RESERVATION OF RIGHTS</li>
        <div className={`${legals.whatd} ${toggle7 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
        </div>
        </div>
        <div className={`item ${legals.itemuoi}`}>
        <li   className="list-group-item text-light bg-dark bg-opacity-50 border border-light border-1 rounded" onClick={f8}>DISCLAIMER</li>
        <div className={`${legals.whatd} ${toggle8 ? legals.whatdopen: ''} drop-content border border-light border-1`}>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <p>limit or exclude our or your liability for death or personal injury;
limit or exclude our or your liability for fraud or fraudulent misrepresentation;
limit any of our or your liabilities in any way that is not permitted under applicable law; or
exclude any of our or your liabilities that may not be excluded under applicable law.
            </p>
            <p>The limitations and prohibitions of liability are set in this Section and elsewhere in this disclaimer:
(a) are subject to the preceding paragraph; and
(b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
        </div>
        </div>
      </ul>
      </div>
    );
}

export default TermsAndConditions;