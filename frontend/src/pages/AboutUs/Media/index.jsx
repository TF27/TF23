import React from 'react';
import i1 from "./media/2021/media/11.jpg"
import i2 from "./media/logo/TOI.jpg"
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
        <div>

        <section class="container-fluid ftco-gallery ftco-no-pb mb-4" id="Offline-section">
            <div class="row">
                <div class="col-md-3">
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={i1}><img class="card-img-top " src={"./media/2021/media/11.jpg"} alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i2} alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>  
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/2020/media/bolt.jpg"><img class="card-img-top " src="./media/2020/media/bolt.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body" >
                            <img src="./media/logo/hindustantimes.jpg" alt="" style={{maxWidth:"80%"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2019/CA portal Launch - Maharashtra Times.jpg"><img class="card-img-top " src="./media/media2019/CA portal Launch - Maharashtra Times.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body" >
                            <img src="./media/logo/Maharashtra_Times.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://hindi.news18.com/news/maharashtra/mumbai-n-a-three-day-tech-fest-in-bombay-iit-bombay-a-robot-with-a-man-made-face-was-in-the-discussion-1620587.html"><img class="card-img-top " src="./media/media2018/Android U - News 18 Hindi.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/news18.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">News 18</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://zeenews.india.com/hindi/india/mumbai-android-u-robot-shadowed-in-techfest-talking-like-human-being/479893"><img class="card-img-top " src="./media/media2018/Android U - Zee News hindi.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/zee-news-logo.jpg" alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Zee News</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehindu.com/news/cities/mumbai/india-should-be-pioneers-of-new-technology-former-barc-director/article25747206.ece"><img class="card-img-top " src="./media/media2018/BARC Director-The Hindu.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/The Hindu.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://timesofindia.indiatimes.com/entertainment/events/mumbai/mumbaikars-take-part-in-a-cyclothon-at-iit/articleshow/66118169.cms"><img class="card-img-top " src="./media/media2018/Cyclothon - Times of India.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/TOI.jpg" alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2018/BARC Director-The Hindu.png"><img class="card-img-top " src="./media/media2018/BARC Director-The Hindu.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/The Hindu.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="http://indiaeducationdiary.in/website-theme-launch-iit-bombays-techfest/"><img class="card-img-top" src="./media/media2018/India Education Diary - Website and Theme release.png" alt="Card image" style={{width:"100%"}}/>
                            <div class="card-body">
                                <img src="./media/logo/India-education-diary.png" alt="" style={{maxHeight: " 40px"}}/>

                                {/*							<h4 class="card-title" style={{margin-bottom: 0px;">India Education Diary</h4>*/}
                            </div>
                        </a>

                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/robowars - Hindustan Times.png"><img class="card-img-top" src="./media/media2017/2017 coverage/robowars - Hindustan Times.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/hindustantimes.jpg" alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2018/Maharashtra Times Theme Release.jpg"><img class="card-img-top" src="./media/media2018/Maharashtra Times Theme Release.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/Maharashtra_Times.png" alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/01-09-16 ADC news.JPG"><img class="card-img-top" src="./media/media2017/2017 coverage/01-09-16 ADC news.JPG" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/adc.jpeg" alt="" style={{maxHeight:"60px"}}/>
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/19-07-16 Deccan Herald.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/19-07-16 Deccan Herald.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/Deccan Herald.jpg" alt="" style={{maxHeight: " 40px"}}/>

                            {/*					<img src="./media/logo/DeccanChronicle.jpg" alt="" style={{maxHeight: " 40px"}}/>*/}
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Deccan Herald</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Compi - DNA.PNG"><img class="card-img-top" src="./media/media2017/2017 coverage/Compi - DNA.PNG" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DNA.jpg" alt="" style={{maxHeight: "55px"}}/>

                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/CURED - DNA.JPG"><img class="card-img-top" src="./media/media2017/2017 coverage/CURED - DNA.JPG" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DNA.jpg" alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href={"./media/media2017/2017 coverage/CURED - DNA.JPG"}><img class="card-img-top" src="./media/media2017/2017 coverage/CURED - DNA.JPG" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DNA.jpg" alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/CURED - DNA.JPG"><img class="card-img-top" src="./media/media2017/2017 coverage/The Free Press Journal_Mumbai_P-5_29-12-15.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src={i1} alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/The The Indian Express_Mumbai_P-7_27-12-15.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/The The Indian Express_Mumbai_P-7_27-12-15.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/indian-express-logo.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/The Times Of India_Mumbai_P-6_27-12-15-2.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/The Times Of India_Mumbai_P-6_27-12-15-2.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/TOI.jpg" alt="" style={{maxHeight: "50px"}}/>

                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>

                    </div>  
                </div>
                <div class="col-md-3">
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/2021/media/12.png"><img class="card-img-top " src="./media/2021/media/12.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body" >
                            <img src="./media/logo/hindustantimes.jpg" alt="" style={{maxWidth:"80%"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/2020/media/einstein.png"><img class="card-img-top " src="./media/2020/media/einstein.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body" >
                            <img src="./media/logo/TOI.jpg" alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehindu.com/news/cities/mumbai/robotics-a-big-draw-at-techfest/article25753850.ece"><img class="card-img-top" src="./media/media2018/Robowars Iran - Times of India.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/TOI.jpg" alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Times of India</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2018/SPEAK launch - Maharashtra Times.png"><img class="card-img-top" src="./media/media2018/SPEAK launch - Maharashtra Times.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/Maharashtra_Times.png" alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2018/SPEAK launch - Mumbai Mirror.png"><img class="card-img-top" src="./media/media2018/SPEAK launch - Mumbai Mirror.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/mumbaimirror.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Mumbai Mirror</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="http://www.bollywoodhungama.com/videos/parties-events/launch-of-techfest-initiative-with-yami-gautam/"><img class="card-img-top" src="./media/media2018/SPEAK-launch-Bollywood-Hungama.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/b_hungama.jpg" alt="" style={{maxHeight: "40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Bollywood Hungama</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2018/SSAP - DNA.png"><img class="card-img-top" src="./media/media2018/SSAP - DNA.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DNA.jpg" alt="" style={{maxHeight: "55px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2018/SSAP - Maharashtra Times.png"><img class="card-img-top" src="./media/media2018/SSAP - Maharashtra Times.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/Maharashtra_Times.png" alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Maharashtra Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehindu.com/news/cities/mumbai/inequality-a-key-issue-of-our-times/article25753795.ece"><img class="card-img-top" src="./media/media2018/VarunGandhi-TheHindu.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/The Hindu.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://retail.economictimes.indiatimes.com/news/industry/public-credit-registry-better-for-smes-not-special-norms-viral-acharya/67105185"><img class="card-img-top" src="./media/media2018/Viral Acharya - Economic Times.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/economic times.jpeg" alt="" style={{maxHeight: " 40px"}}/>

                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.cnbctv18.com/economy/public-credit-registry-better-for-smes-not-special-norms-says-viral-acharya-1706051.htm 	"><img class="card-img-top" src="./media/media2018/Viral Acharya - CNBC TV 18.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/CNBCTV18.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">CNBC TV 18</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.msn.com/en-in/news/other/many-economists-believe-poor-take-best-economic-decisions-rbi-deputy-governor/ar-BBR0yXr"><img class="card-img-top" src="./media/media2018/Viral Acharya - Indian Express.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/indian-express-logo.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Indian Express</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.freepressjournal.in/mumbai/iit-b-techfeststudents-now-shift-their-interests-towards-robotics-ai"><img class="card-img-top" src="./media/media2018/Day 3 - Free Press Journal.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/freepress.jpeg" alt="" style={{maxHeight: "55px"}}/>
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
                        <a class="image-popup" href="./media/media2017/2017 coverage/mumbai mirror 4jan.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/mumbai mirror 4jan.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/mumbaimirror.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Mumbai Mirror_Mumbai_P-12_28-12-15.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/Mumbai Mirror_Mumbai_P-12_28-12-15.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/mumbaimirror.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Mumbai Mirror_Mumbai_P-13_28-12-15.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/Mumbai Mirror_Mumbai_P-13_28-12-15.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/mumbaimirror.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Navbharat Times_Mumbai_P-6_26-12-15.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/Navbharat Times_Mumbai_P-6_26-12-15.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/nbt.jpeg" alt="" style={{maxHeight: "50px"}}/>

                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/The Free Press Journal_Mumbai_P-3_28-12-15.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/The Free Press Journal_Mumbai_P-3_28-12-15.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/freepress.jpeg" alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/2021/media/3.jpg"><img class="card-img-top" src="./media/2021/media/3.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/indian-express-logo.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Indian Express</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/2020/media/vidyabalan.png"><img class="card-img-top" src="./media/2020/media/vidyabalan.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/The Hindu.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">The Asian Age</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/19-07-16 Deccan Herald.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/19-07-16 Deccan Herald.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/Deccan Herald.jpg" alt="" style={{maxHeight: " 40px"}}/>

                            {/*					<img src="./media/logo/DeccanChronicle.jpg" alt="" style={{maxHeight: " 40px"}}/>*/}
                            {/*							<h4 class="card-title" style={{margin-bottom: 0px;">Deccan Herald</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Compi - DNA.PNG"><img class="card-img-top" src="./media/media2017/2017 coverage/Compi - DNA.PNG" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DNA.jpg" alt="" style={{maxHeight: "55px"}}/>

                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/CURED - DNA.JPG"><img class="card-img-top" src="./media/media2017/2017 coverage/CURED - DNA.JPG" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DNA.jpg" alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Cured - The Asian Age.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/Cured - The Asian Age.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/The Asian Age.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">The Asian Age</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Exhibitions - DNA.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/Exhibitions - DNA.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DNA.jpg" alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Robo - Hindustan Times.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/Robo - Hindustan Times.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/hindustantimes.jpg" alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/robowars - Mumbai Mirror.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/robowars - Mumbai Mirror.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/mumbaimirror.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>


                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/The Asian Age robowars.png"><img class="card-img-top" src="./media/media2017/2017 coverage/The Asian Age robowars.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/The Asian Age.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.deccanchronicle.com/business/economy/151218/public-credit-registry-better-for-smes-not-spl-norms-acharya.html"><img class="card-img-top" src="./media/media2018/Viral Acharya Deccan Chronicle.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DeccanChronicle.jpg" alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Deccan Chronicle</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Modi Smart City.png"><img class="card-img-top" src="./media/media2017/2017 coverage/Modi Smart City.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/bs).png" alt="" style={{maxHeight: " 40px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Business Standard</h4>*/}
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="card" style={{width: "100%", overflow: "hidden"}} title="Click here to read the full article">
                        <a class="image-popup"  href="./media/2021/media/4.jpeg"><img class="card-img-top" src="./media/2021/media/4.jpeg" alt="Card image" style={{width: "100%", position: "relative", right: "0.5rem"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/TOI.jpg" alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;"> India Education Diary</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width: "100%", overflow: "hidden"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="./media/2020/media/TOI-Robothespian.PNG"><img class="card-img-top" src="./media/2020/media/TOI-Robothespian.PNG" alt="Card image" style={{width: "100%", position: "relative", right: "0.5rem"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/TOI.jpg" alt="" style={{maxHeight: "50px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;"> India Education Diary</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="http://indiaeducationdiary.in/student-solar-ambassadors-workshop-150th-birth-anniversary-gandhi-jayanti-2nd-october-2018-1-lakh-students/"><img class="card-img-top" src="./media/media2018/SSAP Launch - India Education Diary.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/India-education-diary.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;"> India Education Diary</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2018/SSAP - Times of India.png"><img class="card-img-top" src="./media/media2018/SSAP - Times of India.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/TOI.jpg" alt="" style={{maxHeight: "50px"}}/>

                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Times of India</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehillstimes.in/regional/iit-bombay-trains-15000-students-from-assam-under-souls-initiative/"><img class="card-img-top" src="./media/media2018/The Hills Times - SSAP.png" alt="Card image" style={{width: "100%",    height: "39px"}} /></a>
                        <div class="card-body">
                            <img src="./media/logo/hill.jpg" alt="" style={{maxHeight: "40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hills Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.thehindu.com/news/cities/mumbai/apologise-when-wrong-to-earn-respect/article25767173.ece"><img class="card-img-top" src="./media/media2018/The Hindu - Simon Taufel.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/The Hindu.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The Hindu</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.dailypioneer.com/2018/state-editions/state-level-tech-competition-technorion-held.html"><img class="card-img-top" src="./media/media2018/The-Pioneer-Zonals.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/thepioneer.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The-Pioneer</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://www.mid-day.com/articles/dalai-lama-to-address-mumbai-students-during-visit/20088164"><img class="card-img-top" src="./media/media2018/Dalai Lama -MidDay.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/thepioneer.jpg" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">The-Pioneer</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="" target="_blank" href="https://mumbaimirror.indiatimes.com/mumbai/other/witness-the-cutting-edge/articleshow/67100286.cms"><img class="card-img-top" src="./media/media2018/Robowars - Mumbai Mirror.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/mumbaimirror.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*						<h4 class="card-title" style={{margin-bottom: 0px;">Mumbai Mirror</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Hindustan Times - Google and Microsoft.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/Hindustan Times - Google and Microsoft.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/hindustantimes.jpg" alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">Hindustan Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Hindustan Times - Techfest National Quiz.png"><img class="card-img-top" src="./media/media2017/2017 coverage/Hindustan Times - Techfest National Quiz.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/hindustantimes.jpg" alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">Hindustan Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Hindustan Times Digital Literacy 15-07-17.png"><img class="card-img-top" src="./media/media2017/2017 coverage/Hindustan Times Digital Literacy 15-07-17.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/hindustantimes.jpg" alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">Hindustan Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/IMPower Campaign - Hindustan TImes.JPG"><img class="card-img-top" src="./media/media2017/2017 coverage/IMPower Campaign - Hindustan TImes.JPG" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/hindustantimes.jpg" alt="" style={{maxWidth:"80%"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">Hindustan Times</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/ISMOKE DNA.png"><img class="card-img-top" src="./media/media2017/2017 coverage/ISMOKE DNA.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/DNA.jpg" alt="" style={{maxHeight: "55px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">DNA</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/Lectures - Mumbai Mirror.jpg"><img class="card-img-top" src="./media/media2017/2017 coverage/Lectures - Mumbai Mirror.jpg" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/mumbaimirror.png" alt="" style={{maxHeight: " 40px"}}/>
                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;"> Mumbai Mirror</h4>*/}
                        </div>
                    </div>
                    <div class="card" style={{width:"100%"}} title="Click here to read the full article">
                        <a class="image-popup" href="./media/media2017/2017 coverage/RTI Government - Times Of India.png"><img class="card-img-top" src="./media/media2017/2017 coverage/RTI Government - Times Of India.png" alt="Card image" style={{width:"100%"}}/></a>
                        <div class="card-body">
                            <img src="./media/logo/TOI.jpg" alt="" style={{maxHeight: "50px"}}/>

                            {/*					<h4 class="card-title" style={{margin-bottom: 0px;">dfjbndfkjbnkdj</h4>*/}
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
