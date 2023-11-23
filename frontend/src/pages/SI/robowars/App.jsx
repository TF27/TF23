import { Button, Content, Footer, Hero, Separator } from "./components";
import styles from "./App.module.css";
import esf_logo from './assets/esf.png';
import logo from './assets/varsitylogo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import './index123.css'

function App() {

  const w1_reg = () => {
    window.location.href = 'https://docs.google.com/forms/d/1Xk-cMmQSQQe47-50rbLHcbI9b2I-_E1LJ56ugVgCbQw/prefill'; 
  };
  const w2_reg = () => {
    window.location.href = 'https://docs.google.com/forms/d/1SzR5IYXYmJzbV5mo8Qqfnp6aCOwH4WFRGZKWi6HTJpY/prefill'; 
  };
  const t1_reg = () => {
    window.location.href = 'https://rzp.io/l/gqqpOlU9'; 
  };
  const t2_reg = () => {
    window.location.href = 'https://rzp.io/l/RFLv9bQxtH'; 
  };

  return (
    <div>
      <Hero />
      <div className={styles.content_container}>
      <Content
            title="Timeline"
            content=''
          />
          <h3>Webinars</h3>
          <h4 className={styles.para}>
            Personal Finance webinars by Zerodha<br/>
            Webinar 1: 8th dec, 4:00-5:00 pm<br/>
            Webinar 2: 16th dec, 4:00-5:00 pm<br/>
    

          </h4>
        
          <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-3">
        <div onClick={w1_reg} className={`${styles.register_btn_container}`}>
            <Button onClick={w1_reg}>
            <h4 style={{letterSpacing:'2px'}}>Register for Webinar:8th dec</h4>
            </Button>
          </div>
        </Col>
        <Col md={6}>
        <div onClick={w2_reg} className={`${styles.register_btn_container}`}>
            <Button onClick={w2_reg}>
            <h4 style={{letterSpacing:'2px'}}>Register for Webinar:16th dec</h4>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
          
          <br/>
          <h3>Tests</h3>
          <h4>Test 1: Exam 15th Dec
            <br/>
            Test 2: Exam 22nd Dec
          </h4>
  
          <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-3">
        <div onClick={t1_reg} className={styles.register_btn_container}>
            <Button >
            <h4 style={{letterSpacing:'2px'}}>Register for Test:15th dec</h4>
            </Button>
          </div>
        </Col>
        <Col md={6}>
        <div onClick={t2_reg} className={styles.register_btn_container}>
            <Button >
            <h4 style={{letterSpacing:'2px'}}>Register for Test:22nd dec</h4>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
          <br/>
          <p>**A nominal fee of ₹295 ( ₹250 + 18% GST ) is charged to cover the cost of organising the test**</p>
          <br/>
        <div>
          <Content
            title="Vision"
            content="Our vision is to empower individuals and communities with the knowledge and tools they need to achieve financial well-being. Through our financial literacy initiative, we aim to create a future where everyone, regardless of their background or circumstances, has the skills and confidence to make informed financial decisions. We envision a society where people can build and secure their financial futures, reduce financial stress, and ultimately achieve their dreams and aspirations. Our commitment to promoting financial literacy will foster economic empowerment, resilience, and a more equitable and prosperous society for all."
          />
          
          <br/>
          <Content
            title="Why This Social Initiative?"
            content='Financial literacy is essential for economic empowerment, poverty alleviation, and debt reduction. It helps people make better financial decisions, plan for retirement, start businesses, and build wealth. Financial literacy also contributes to economic stability, consumer protection, and inclusive growth. By reducing financial stress, strengthening communities, and fostering economic security, financial literacy improves societal well-being.'
          />
          <Content
            title=""
            content="Financial literacy is essential for young people to build a solid foundation for lifelong financial well-being. Teaching financial literacy at a young age helps young people develop positive financial habits, make informed decisions about budgeting, saving, and spending responsibly, and think about their long-term financial goals. Financial literacy also helps young people avoid unnecessary debt, foster responsible consumption, and promote economic independence, reducing their reliance on external assistance.

            Moreover, financial literacy equips young people with the skills they need to be entrepreneurs, think critically, and manage risk. It also influences their career choices by enabling them to assess the financial implications of their decisions. By providing young people with these essential skills, we can improve their financial futures and set the stage for generational financial well-being."
          />
          <Content
            title="Why Varsity?"
            content=''
          />
          <Content
            title=""
            content=''
          />
          <p>Varsity Certified is an online certification program designed to test your market knowledge and give you the confidence to start your career in capital markets.<br/>
          Varsity is an extensive and in-depth collection of stock market and financial lessons created by Karthik Rangappa at Zerodha. It is free and openly accessible to everyone and is one of the largest financial education resources on the web. No signup, no pay-wall, no ads.
          </p>
             <br/>
          <Content
            title="In Association With"
            content=''
          />
       
          <div className="pkmkb">
            
            <img src={logo} style={{width: '300px'}}/>
          </div>
          {/* <img src={esf_logo} alt="sorry no image" className="img-fluid esf_logo" /> */}
          <br />
          <br />
          <br />
          <div className={styles.register_btn_container}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
