import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70" />
      <Card.Body>
        <Card.Title>APPLE iPhone 13 (Starlight, 128 GB)</Card.Title>
        <Card.Text>
            iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;