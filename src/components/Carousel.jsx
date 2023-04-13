import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/bfae01d6f985746b.jpg?q=50"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/275a28281f9262c7.jpg?q=50"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/058acefcd9c1807a.jpg?q=50"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;