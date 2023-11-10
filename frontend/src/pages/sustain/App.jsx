import { Button, Content, Footer, Hero, Separator } from "./components";
import styles from "./App.module.css";

function App() {
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
            title="Why This Social Initiative?"
            content='In light of the imminent 1.5-degree Celsius temperature increase, our initiative, "SUSTAIN: Sustainability, Understanding, Synergy, and Training for a Green Tomorrow," is dedicated to fostering sustainable practices and energy conservation. We believe that the urgency of the situation necessitates immediate action. By focusing on sustainability, understanding, synergy, and training, we aim to empower individuals and communities to make eco-conscious choices and create a greener future. Together, we can make a substantial impact on the road to a more sustainable and thriving planet for generations to come.'
          />
          <Content
            title="ELT"
            content="In the context of global energy challenges, there is a pressing need for a shift towards sustainable and renewable energy sources. The current dependence on centralized, fossil fuel-based energy systems results in financial burdens, energy loss, and contributes significantly to global warming and climate change. This situation has led to a growing urgency for increased awareness and education on energy supply and consumption, as well as the adoption of alternative energy solutions. The Energy Literacy Training initiative aims to address these issues by educating individuals and institutions on the impact of energy on the environment and enabling informed decisions for a more sustainable future."
          />
          <Content
            title="REC"
            content="In the context of global energy challenges, there is a pressing need for a shift towards sustainable and renewable energy sources. The current dependence on centralized, fossil fuel-based energy systems results in financial burdens, energy loss, and contributes significantly to global warming and climate change. This situation has led to a growing urgency for increased awareness and education on energy supply and consumption, as well as the adoption of alternative energy solutions. The Energy Literacy Training initiative aims to address these issues by educating individuals and institutions on the impact of energy on the environment and enabling informed decisions for a more sustainable future."
          />
          <Separator />
          <br />
          <Separator />
          <div className={styles.register_btn_container}>
            <Button>
              <a href="#">Register</a>
            </Button>
          </div>
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
