import { Button, Content, Footer, Hero, Separator } from "./components";
import styles from "./App.module.css";
import esf_logo from "./assets/esf.png";
// import './index123.css'

function App() {
  const elt_reg = () => {
    window.location.href = "https://es-pal.org/lets_begin/Wnp1xs2yh590rOB";
  };
  const rec_reg = () => {
    window.location.href = "https://es-pal.org/lets_begin/TSuFtRpTV0TwABi";
  };

  return (
    <div>
      <Hero />
      <div className={styles.content_container}>
        <div>
          <Content
            title="Vision"
            content="To create a world where sustainable practices, deep understanding of environmental issues, collaborative synergy, and comprehensive training lead to a greener tomorrow through responsible and efficient energy conservation. We envision a future where communities and individuals are empowered to reduce their ecological footprint, making a positive impact on the planet for generations to come. Our initiative aims to inspire, educate, and mobilize people toward a more sustainable and energy-efficient world, where resources are preserved, and environmental harmony is achieved."
          />
          <Content
            title="Why This Initiative?"
            content='In light of the imminent 1.5-degree Celsius temperature increase, our initiative, "SUSTAIN: Sustainability, Understanding, Synergy, and Training for a Green Tomorrow," is dedicated to fostering sustainable practices and energy conservation. We believe that the urgency of the situation necessitates immediate action. By focusing on sustainability, understanding, synergy, and training, we aim to empower individuals and communities to make eco-conscious choices and create a greener future. Together, we can make a substantial impact on the road to a more sustainable and thriving planet for generations to come.'
          />
          <Content
            title="ELT"
            content="In the context of global energy challenges, there is a pressing need for a shift towards sustainable and renewable energy sources. The current dependence on centralized, fossil fuel-based energy systems results in financial burdens, energy loss, and contributes significantly to global warming and climate change. This situation has led to a growing urgency for increased awareness and education on energy supply and consumption, as well as the adoption of alternative energy solutions. The Energy Literacy Training initiative aims to address these issues by educating individuals and institutions on the impact of energy on the environment and enabling informed decisions for a more sustainable future."
          />

          {/* <br/> */}

          <Content title="ELT-Incentives" content="" />
          <p className={styles.para}>
            1. Certification from Techfest, IIT Bombay and Energy Swaraj
            <br />
            2. Backed by AICTE and NITI Aayog
            <br />
            3. Climate Clock to organisation on 500 registrations
          </p>

          <div onClick={elt_reg} className={styles.register_btn_container}>
            <Button onClick={elt_reg}>
              <h4 style={{ letterSpacing: "2px" }}>Register for ELT</h4>
            </Button>
          </div>

          <br />

          <Content
            title="REC-Why to take this challenge?"
            content="
            In India, despite advancements in renewable energy, coal still accounts for 75% of electricity generation, resulting in each unit of electricity use producing 800 grams to 1 kilogram of CO2 emissions with a 300-year lifespan in the atmosphere. This CO2, a potent greenhouse gas, contributes to long-term global warming. To combat this, increased awareness and efficient electricity use in daily life could save 10% to 30% of electricity consumption. Many individuals and organizations have already taken steps to address this issue."
          />
          <br />

          <Content
            title="REC-What is this challenge?"
            content="Electricity usage is measurable in units, reflected in our monthly bills. A 10-unit reduction equals roughly 10 kg of CO₂ saved, and a 50-unit reduction equates to about 50 kg of CO₂ savings each month. The challenge is to Reduce Electricity Consumption (REC) to save electricity, save the environment, and save money – a proactive step in climate correction. Our portal is designed to assist in monitoring electricity and CO₂ savings, making a positive impact on both the environment and your finances."
          />
          <br />

          <Content title="REC-Rewards" content="" />
          <p>
            Rewards for Shart Lagao Bijli Bachao Challenge Reduce Electricity
            Consumption Challenge The Foundation will recognise your efforts by
            giving you following certificates:
            <br />
            <br />
            Silver Certificate - average 10% electricity saving over three
            months
            <br />
            Gold Certificate - average 20% electricity saving over three months
            <br />
            Diamond Certificate - average 30% electricity saving over three
            months
            <br />
            <br />
            In addition The Energy Swaraj Foundation will send one elegant and
            valuable White Kurta with “Energy Swaraj” embroidery on it at front
            and back.
          </p>
          <br />
          <div onClick={rec_reg} className={styles.register_btn_container}>
            <Button>
              <h4 style={{ letterSpacing: "2px" }}>Register for REC</h4>
            </Button>
          </div>
          <br />
          <Content title="For Further Help" content="" />
          <div className="row row-gap">
            <div className="col-md-6 class1">
              <img
                src={esf_logo}
                alt="sorry no image"
                className="img-fluid"
                width="80%"
                height="100%"
              />
            </div>
            <div className="col-md-6 class2">
              <p className="visiontext">
                <br />
                Click below link
                <br />{" "}
                <a
                  style={{ fontSize: "25px" }}
                  href="mailto:info@energyswaraj.org"
                >
                  info@energyswaraj.org
                </a>
              </p>
            </div>
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
