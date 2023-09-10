import React from 'react';
import './media.css';
import i1 from "./media/2021/media/11.jpg"
import i2 from "./media/logo/TOI.jpg"
import i3 from "./media/2020/media/bolt.jpg"
import i4 from "./media/logo/hindustantimes.jpg"
import i5 from "./media/media2019/CA portal Launch - Maharashtra Times.jpg"
import i6 from "./media/logo/Maharashtra_Times.png"
import i7 from "./media/media2018/Android U - News 18 Hindi.png"
import i8 from "./media/logo/news18.jpg"
import i9 from "./media/2021/media/11.jpg" // "./media/media2018/Android U - Zee News.png"
import i10 from "./media/logo/zee-news-logo.jpg"
import i11 from "./media/2021/media/11.jpg"  //"./media/media2018/Android U - The Hindu.png"
import i12 from "./media/logo/The Hindu.jpg"
import i13 from "./media/media2018/Cyclothon - Times of India.png"
import i14 from "./media/logo/TOI.jpg"
import i15 from "./media/media2018/BARC Director-The Hindu.png"
import i16 from "./media/media2018/India Education Diary - Website and Theme release.png"
import i17 from "./media/logo/India-education-diary.png"
import i18 from "./media/media2017/2017 coverage/robowars - Hindustan Times.png"
import i19 from "./media/logo/hindustantimes.jpg"
import i20 from "./media/media2018/Maharashtra Times Theme Release.jpg"
import i21 from "./media/logo/Maharashtra_Times.png"
import i22 from "./media/media2017/2017 coverage/01-09-16 ADC news.JPG"
import i23 from "./media/logo/adc.jpeg"
import i24 from "./media/media2017/2017 coverage/19-07-16 Deccan Herald.jpg"
import i25 from "./media/logo/Deccan Herald.jpg"
import i26 from "./media/media2017/2017 coverage/Compi - DNA.PNG"
import i27 from "./media/logo/DNA.jpg"
import i28 from "./media/media2017/2017 coverage/CURED - DNA.JPG"
import i29 from "./media/media2017/2017 coverage/CURED - DNA.JPG"
import i30 from "./media/media2017/2017 coverage/The Free Press Journal_Mumbai_P-5_29-12-15.jpg"
import i31 from "./media/media2017/2017 coverage/The The Indian Express_Mumbai_P-7_27-12-15.jpg"
import i32 from "./media/logo/indian-express-logo.png"
import i33 from "./media/media2017/2017 coverage/The Times Of India_Mumbai_P-6_27-12-15-2.jpg"
import i34 from "./media/logo/TOI.jpg" 
import i35 from "./media/2021/media/12.png"
import i36 from "./media/logo/hindustantimes.jpg"
import i37 from "./media/2020/media/einstein.png"
import i38 from "./media/media2018/Robowars Iran - Times of India.png"
import i39 from "./media/media2018/SPEAK launch - Maharashtra Times.png"
import i40 from "./media/logo/Maharashtra_Times.png"
import i41 from "./media/media2018/SPEAK launch - Mumbai Mirror.png"
import i42 from "./media/logo/mumbaimirror.png"
import i43 from "./media/media2018/SPEAK-launch-Bollywood-Hungama.png"
import i44 from "./media/logo/b_hungama.jpg"
import i45 from "./media/media2018/SSAP - DNA.png"
import i46 from "./media/logo/DNA.jpg"
import i47 from "./media/media2018/SSAP - Maharashtra Times.png"
import i48 from "./media/logo/Maharashtra_Times.png"
import i49 from "./media/media2018/VarunGandhi-TheHindu.png"
import i50 from "./media/logo/The Hindu.jpg"
import i51 from "./media/media2018/Viral Acharya - Economic Times.png"
import i52 from "./media/logo/economic times.jpeg"
import i53 from "./media/media2018/Viral Acharya - CNBC TV 18.png"
import i54 from "./media/logo/CNBCTV18.jpg"
import i55 from  "./media/media2018/Viral Acharya - Indian Express.png"
import i56 from "./media/logo/indian-express-logo.png"
import i57 from "./media/media2018/Day 3 - Free Press Journal.png"
import i58 from "./media/logo/freepress.jpeg"
import i59 from "./media/media2017/2017 coverage/mumbai mirror 4jan.jpg"
import i60 from "./media/logo/mumbaimirror.png"
import i61 from "./media/media2017/2017 coverage/Mumbai Mirror_Mumbai_P-12_28-12-15.jpg"
import i62 from "./media/media2017/2017 coverage/Mumbai Mirror_Mumbai_P-13_28-12-15.jpg"
import i63 from "./media/media2017/2017 coverage/Navbharat Times_Mumbai_P-6_26-12-15.jpg"
import i64 from "./media/logo/nbt.jpeg"
import i65 from "./media/media2017/2017 coverage/The Free Press Journal_Mumbai_P-3_28-12-15.jpg"
import i66 from "./media/2021/media/3.jpg"
import i67 from "./media/logo/indian-express-logo.png"
import i68 from "./media/2020/media/vidyabalan.png"
import i69 from "./media/logo/The Hindu.jpg"
import i70 from "./media/media2017/2017 coverage/19-07-16 Deccan Herald.jpg"
import i71 from "./media/logo/Deccan Herald.jpg"
import i72 from "./media/media2017/2017 coverage/Compi - DNA.PNG"
import i73 from "./media/logo/DNA.jpg"
import i74 from "./media/media2017/2017 coverage/CURED - DNA.JPG"
import i75 from "./media/media2017/2017 coverage/Cured - The Asian Age.jpg"
import i76 from "./media/logo/The Asian Age.png"
import i77 from "./media/media2017/2017 coverage/Exhibitions - DNA.jpg"
import i78 from "./media/media2017/2017 coverage/Robo - Hindustan Times.jpg"
import i79 from "./media/media2017/2017 coverage/robowars - Mumbai Mirror.jpg"
import i80 from "./media/logo/mumbaimirror.png"
import i81 from "./media/media2017/2017 coverage/The Asian Age robowars.png"
import i82 from "./media/logo/The Asian Age.png"
import i83 from "./media/media2018/Viral Acharya Deccan Chronicle.png"
import i84 from "./media/logo/DeccanChronicle.jpg" 
import i85 from "./media/media2017/2017 coverage/Modi Smart City.png"
import i86 from "./media/logo/bs).png"
import i87 from "./media/2021/media/4.jpeg"
import i88 from "./media/logo/TOI.jpg"
import i89 from "./media/2020/media/TOI-Robothespian.PNG"
import i90 from "./media/media2018/SSAP Launch - India Education Diary.png"
import i91 from "./media/logo/India-education-diary.png"
import i92 from "./media/media2018/SSAP - Times of India.png"
import i93 from "./media/media2018/The Hills Times - SSAP.png"
import i94 from "./media/logo/hill.jpg"
import i95 from "./media/media2018/The Hindu - Simon Taufel.png" 
import i96 from "./media/logo/The Hindu.jpg"
import i97 from "./media/media2018/The-Pioneer-Zonals.png"
import i98 from "./media/logo/thepioneer.jpg"
import i99 from "./media/media2018/Dalai Lama -MidDay.png"
import i100 from "./media/logo/thepioneer.jpg"
import i101 from "./media/media2018/Robowars - Mumbai Mirror.png"
import i102 from "./media/logo/mumbaimirror.png"
import i103 from "./media/media2017/2017 coverage/Hindustan Times - Google and Microsoft.jpg"
import i104 from "./media/logo/hindustantimes.jpg"
import i105 from "./media/media2017/2017 coverage/Hindustan Times - Techfest National Quiz.png"
import i106 from "./media/media2017/2017 coverage/Hindustan Times Digital Literacy 15-07-17.png"
import i107 from "./media/media2017/2017 coverage/IMPower Campaign - Hindustan TImes.JPG"
import i108 from "./media/media2017/2017 coverage/ISMOKE DNA.png"
import i109 from "./media/media2017/2017 coverage/Lectures - Mumbai Mirror.jpg"
import i110 from "./media/media2017/2017 coverage/RTI Government - Times Of India.png"
import n1 from "./media/2022/1.jpg"
import n2 from "./media/2022/2.jpg"
import n3 from "./media/2022/3.jpg"
import n4 from "./media/2022/4.jpg"
import n5 from "./media/2022/5.jpg"
import n6 from "./media/2022/6.jpg"
import n7 from "./media/2022/7.jpg"
import n8 from "./media/2022/8.jpg"
import n9 from "./media/2022/9.jpg"
import n10 from "./media/2022/10.jpg"
import n11 from "./media/2022/11.jpg"
import n12 from "./media/2022/12.jpg"
import n13 from "./media/2022/13.jpg"
import n14 from "./media/2022/14.jpg"
import n15 from "./media/2022/15.jpg"
import n16 from "./media/2022/16.jpg"
import n17 from "./media/2022/17.jpg"
import n18 from "./media/2022/18.jpg"
import n19 from "./media/2022/19.jpg"
import n20 from "./media/2022/20.jpg"

import i21a from "./media/2022/21.jpg"

import i22_1 from "./media/2022/22_1.jpg"
import i22_2 from "./media/2022/22_2.jpg"
import i22_3 from "./media/2022/22_3.jpg"
import i22_4 from "./media/2022/22_4.jpg"
import i22_5 from "./media/2022/22_5.jpg"
import i22_6 from "./media/2022/22_6.jpg"
import i22_7 from "./media/2022/22_7.jpg"
import i22_8 from "./media/2022/22_8.jpg"
import i22_9 from "./media/2022/22_9.jpg"
import i22_10 from "./media/2022/22_10.jpg"
import i22_11 from "./media/2022/22_11.jpg"
import i22_12 from "./media/2022/22_12.jpg"
import i22_13 from "./media/2022/22_13.jpg"
import i22_14 from "./media/2022/22_14.jpg"
import i22_15 from "./media/2022/22_15.jpg"


import "./stars.css"

const Media = () => {
    const iframeSources = [
        "https://www.youtube.com/embed/4alBMIq2LXw",
        "https://www.youtube.com/embed/As-AE4aSwKk",
        "https://www.youtube.com/embed/ZEbs-RwVguw",
        "https://www.youtube.com/embed/eSg3OtwnNwA",
        "https://www.youtube.com/embed/zCEiN2VsmFw",
        "https://www.youtube.com/embed/sBDtYoxqlYE",
        "https://www.youtube.com/embed/BECTxCVcpv8",
        "https://www.youtube.com/embed/NX_bFoJPTEE",
        "https://www.youtube.com/embed/IqJBnKUXcDI",
        "https://www.youtube.com/embed/HVYPV48qQDI",
        "https://www.youtube.com/embed/d32xw27ScK8",
        "https://www.youtube.com/embed/e1NbKFTnaxI"
    ];
    return ( 
        <div className='media'>
            <div id='stars'/>
            <div id='stars2'/>
            <div id='stars3'/>'
        <div className='media_fixedbg'/>
        <section class="container-fluid ftco-gallery ftco-no-pb mb-4" id="Offline-section">
            <div class="row">
                <div class="col-md-3">

                <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_1}><img class="card-img-top " src={i22_1} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_2}><img class="card-img-top " src={i22_2} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_3}><img class="card-img-top " src={i22_3} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_4}><img class="card-img-top " src={i22_4} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i1}><img class="card-img-top " src={i1} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i2} alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>  
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i3}><img class="card-img-top " src={i3} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body" >
                            <img src={i4} alt="" style={{maxWidth:"80%"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://hindi.news18.com/news/maharashtra/mumbai-n-a-three-day-tech-fest-in-bombay-iit-bombay-a-robot-with-a-man-made-face-was-in-the-discussion-1620587.html"><img class="card-img-top " src={i7} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i8} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">News 18</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://zeenews.india.com/hindi/india/mumbai-android-u-robot-shadowed-in-techfest-talking-like-human-being/479893"><img class="card-img-top " src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i10} alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Zee News</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehindu.com/news/cities/mumbai/india-should-be-pioneers-of-new-technology-former-barc-director/article25747206.ece"><img class="card-img-top " src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i12} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://timesofindia.indiatimes.com/entertainment/events/mumbai/mumbaikars-take-part-in-a-cyclothon-at-iit/articleshow/66118169.cms"><img class="card-img-top " src={i13} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i14} alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i15}><img class="card-img-top " src={i15} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i12} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="http://indiaeducationdiary.in/website-theme-launch-iit-bombays-techfest/"><img class="card-img-top" src={i16} alt="Card image" style={{width:"100%"}}/>
                            <div class="card-body">
                                <img src={i17} alt="" style={{maxHeight: " 40px"}}/>

                                {/*							<h4 class="card-title" style={{margin-bottom: 0px;">India Education Diary</h4>*/}
                            </div>
                        </a>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i18}><img class="card-img-top" src={i18} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i19} alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i20}><img class="card-img-top" src={i20} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i21} alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22}><img class="card-img-top" src={i22} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i23} alt="" style={{maxHeight:"60px"}}/>
                        </div>
                    </div>
                   
        
                
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/CURED - DNA.JPG"><img class="card-img-top" src={i30} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i1} alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i31}><img class="card-img-top" src={i31} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i32} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i33}><img class="card-img-top" src={i33} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i34} alt="" style={{maxHeight: "50px"}}/>

                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>

                </div>  
                <div class="col-md-3">

                <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_5}><img class="card-img-top " src={i22_5} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>


                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_6}><img class="card-img-top " src={i22_6} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_7}><img class="card-img-top " src={i22_7} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_8}><img class="card-img-top " src={i22_8} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>


                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i35}><img class="card-img-top " src={i35} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body" >
                            <img src={i36} alt="" style={{maxWidth:"80%"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i37}><img class="card-img-top " src={i37} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body" >
                            <img src={i14} alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href=""><img class="card-img-top" src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i14} alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Times of India</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i39}><img class="card-img-top" src={i39} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i40} alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i41}><img class="card-img-top" src={i41} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i42} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Mumbai Mirror</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="http://www.bollywoodhungama.com/videos/parties-events/launch-of-techfest-initiative-with-yami-gautam/"><img class="card-img-top" src={i43} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i44} alt="" style={{maxHeight: "40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Bollywood Hungama</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i45}><img class="card-img-top" src={i45} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i46} alt="" style={{maxHeight: "55px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i47}><img class="card-img-top" src={i47} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i48} alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehindu.com/news/cities/mumbai/inequality-a-key-issue-of-our-times/article25753795.ece"><img class="card-img-top" src={i49} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i50} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://retail.economictimes.indiatimes.com/news/industry/public-credit-registry-better-for-smes-not-special-norms-viral-acharya/67105185"><img class="card-img-top" src={i51} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i52} alt="" style={{maxHeight: " 40px"}}/>

                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.cnbctv18.com/economy/public-credit-registry-better-for-smes-not-special-norms-says-viral-acharya-1706051.htm 	"><img class="card-img-top" src={i53} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i54} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">CNBC TV 18</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.msn.com/en-in/news/other/many-economists-believe-poor-take-best-economic-decisions-rbi-deputy-governor/ar-BBR0yXr"><img class="card-img-top" src={i55} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i56} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Indian Express</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.freepressjournal.in/mumbai/iit-b-techfeststudents-now-shift-their-interests-towards-robotics-ai"><img class="card-img-top" src={i57} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i58} alt="" style={{maxHeight: "55px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Free Press Journal</h4>*/}
                        </div>
                    </div>

                    {/*				<div class="card" style={{width:"100%"}} title="Click here to read the full article">*/}
                    {/*					<a class="image-popup" href="./media/gallery-2.jpg"><img class="card-img-top" src="./media/media2018/Peoples Samachar Bhopal.jpg" alt="Card image" style={{width:"100%"}}/></a>*/}
                    {/*					<div class="card-body">*/}
                    {/*						<h4 class="card-title" style={{margin-bottom: 0px;">People's Samachar</h4>*/}
                    {/*					</div>*/}
                    {/*				</div>*/}
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i59}><img class="card-img-top" src={i59} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i60} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i61}><img class="card-img-top" src="./media/media2017/2017 coverage/Mumbai Mirror_Mumbai_P-12_28-12-15.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i60} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i62}><img class="card-img-top" src={i62} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i60} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i63}><img class="card-img-top" src={i63} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i64} alt="" style={{maxHeight: "50px"}}/>

                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i65}><img class="card-img-top" src={i65} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i58} alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>

                </div>
                <div class="col-md-3">

                <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_9}><img class="card-img-top " src={i22_9} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_10}><img class="card-img-top " src={i22_10} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_11}><img class="card-img-top " src={i22_11} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_12}><img class="card-img-top " src={i22_12} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>


                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i66}><img class="card-img-top" src={i66} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i67} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Indian Express</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i68}><img class="card-img-top" src={i68} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i69} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">The Asian Age</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={""}><img class="card-img-top" src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i71} alt="" style={{maxHeight: " 40px"}}/>

                            {/*					<img src="./media/logo/DeccanChronicle.jpg" alt="" style={{maxHeight: " 40px"}}/>*/}
                            {/*							<h4 class="card-title" style={{margin-bottom: 0px;">Deccan Herald</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i72}><img class="card-img-top" src={i72} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i73} alt="" style={{maxHeight: "55px"}}/>

                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i74}><img class="card-img-top" src={i74} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i27} alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i75}><img class="card-img-top" src={i75} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i76} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">The Asian Age</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={""}><img class="card-img-top" src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i27} alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={""}><img class="card-img-top" src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i36} alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i79}><img class="card-img-top" src={i79} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i80} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>


                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i81} ><img class="card-img-top" src={i81} style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i82} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i85}><img class="card-img-top" src={i85} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i86} alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Business Standard</h4>*/}
                        </div>
                    </div>

                </div>
                <div class="col-md-3">  

                <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_13}><img class="card-img-top " src={i22_13} alt="Card image" style={{width:"100%", height:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{Height: " 0px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_15}><img class="card-img-top " src={i22_15} alt="Card image" style={{width:"100%", height:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i22_14}><img class="card-img-top " src={i22_14} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={""} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>


                    <div class="card" style={{width: "100%", overflow: "hidden"}} title="Click here to read the full article">
                        <a class="" target="_blank" href={i89}><img class="card-img-top" src={i89} alt="Card image" style={{width: "100%", position: "relative", right: "0.5rem"}}/></a>
                        <div class="card-body">
                            <img src={i88} alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;"> India Education Diary</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="http://indiaeducationdiary.in/student-solar-ambassadors-workshop-150th-birth-anniversary-gandhi-jayanti-2nd-october-2018-1-lakh-students/"><img class="card-img-top" src={i90} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i91} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;"> India Education Diary</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i92}><img class="card-img-top" src={i92} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i88} alt="" style={{maxHeight: "50px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Times of India</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehillstimes.in/regional/iit-bombay-trains-15000-students-from-assam-under-souls-initiative/"><img class="card-img-top" src={i93} alt="Card image" style={{width: "100%",    height: "39px"}} /></a>
                        <div class="card-body">
                            <img src={i94} alt="" style={{maxHeight: "40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hills Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehindu.com/news/cities/mumbai/apologise-when-wrong-to-earn-respect/article25767173.ece"><img class="card-img-top" src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i96} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.dailypioneer.com/2018/state-editions/state-level-tech-competition-technorion-held.html"><img class="card-img-top" src={i97} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i98} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The-Pioneer</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.mid-day.com/articles/dalai-lama-to-address-mumbai-students-during-visit/20088164"><img class="card-img-top" src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i100} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The-Pioneer</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://mumbaimirror.indiatimes.com/mumbai/other/witness-the-cutting-edge/articleshow/67100286.cms"><img class="card-img-top" src={""} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i102} alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Mumbai Mirror</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i103}><img class="card-img-top" src={i103} style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i104} alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">Hindustan Times</h4>*/}
                        </div>
                    </div>

                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i106}><img class="card-img-top" src={i106} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i104} alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">Hindustan Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i107}><img class="card-img-top" src={i107} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i104} alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">Hindustan Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i108}><img class="card-img-top" src={i108} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i73} alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i109}><img class="card-img-top" src={i109} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i102} alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;"> Mumbai Mirror</h4>*/}
                        </div>
                    </div>
            
                </div>
            </div>
        </section>

            <section style={{ marginBottom: '3vw' }} id="tv-section">
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 style={{ marginTop: '4vw', fontWeight: 700 }} className="text-white text-center">TV Coverage</h1>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container-fluid">
                    <div className="row tv_coverage">

                        {iframeSources.map((src, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <iframe style={{ width: 'auto', height: '200px' }} src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
     );
}

function ImageCard({ imageUrl, logoUrl }) {
    return (
      <div className="card" style={{ width: '100%' }} title="Click here to read the full article">
        <a className="image-popup" href={imageUrl}><img className="card-img-top" src={imageUrl} alt="Card image" style={{ width: '100%' }} /></a>
        <div className="card-body">
          <img src={logoUrl} alt="" style={{ maxHeight: '50px' }} />
        </div>
      </div>
    );
  }
  
  function ImageGallery() {
    return (
      <div className="col-md-3">
        <ImageCard imageUrl="{% stmedia/2021/media/11.jpg' %}" logoUrl="{% static 'media/logo/TOI.jpg' %}" />
        <ImageCard imageUrl="{% static 'media/2020/media/bolt.jpg' %}" logoUrl="{% static 'media/logo/hindustantimes.jpg' %}" />
        <ImageCard imageUrl="{% static 'media/media2019/CA portal Launch - Maharashtra Times.jpg' %}" logoUrl="{% static 'media/logo/Maharashtra_Times.png' %}" />
      </div>
    );
  }
 
export default Media;
