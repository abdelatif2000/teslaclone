import Section from "./Section/index";
import Header from './Header'


function Home() {
    return (
      <div className="App">
          <Header/>
         <Section
          title='Model S'
          desc='Order Online for Toutchiess Delivery'
          background='images/model-s.jpg'
          rightBtn='Existing Inventry'
         ></Section>
         <Section
          title='Model Y'
          desc='Order Online for Toutchiess Delivery'
          background='images/model-y.jpg'
          rightBtn="Existing Inventry"
       
         ></Section>
         <Section
          title='Model 3'
          desc='Order Online for Toutchiess Delivery'
          background='images/model-3.jpg'
          rightBtn="Existing Inventry"
         ></Section>
         <Section
          title='Model X'
          desc='Order Online for Toutchiess Delivery'
          background='images/model-x.jpg'
          rightBtn='Existing Inventry'
         ></Section>
            <Section
          title='Lowest Cost Solar Panels in America'
          desc='Order Online for Toutchiess Deliver'
          background='images/solar-panel.jpg'
          rightBtn='Existing Inventry'
         ></Section>
           <Section
          title='Solar for New Roofs'
          desc='Order Online for Toutchiess Deliver'
          background='images/solar-roof.jpg'
          leftBtn="Order Now "
          rightBtn='Learn More'
         ></Section>
         <Section
          title='Accessories'
          background='images/accessories.jpg'
          leftBtn="Shop Now "
         ></Section>
      </div>
    );
  }
  export default Home;