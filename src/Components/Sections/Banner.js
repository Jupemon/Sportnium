import React from 'react';
import { Jumbotron, Button, Image, Container, Row, Col } from "react-bootstrap";

// A Headline, along with to buttons which allow 
const Banner = () => {
    return (<>
    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1662,h_900/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png" style={{backgroundSize:"cover", backgroundImage: "url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1662,h_900/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png)"}}/>
    <Container>
    <Row><Col sm={6}>
            <Jumbotron className="landing" variant="primary">
            
            
        <h1>Brings sportstars and companies together!</h1>
        <p>
        Join a social network wich allows two mutual benefactors join together!
        </p>
        <Button variant="secondary">Look for sponsors</Button>
        <Button variant="secondary">Look for athelets</Button>
        
        
          
      </Jumbotron>
      </Col>
      </Row>
      </Container>
      </>)
}
 
export default Banner;