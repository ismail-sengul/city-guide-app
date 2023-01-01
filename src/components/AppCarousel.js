import Carousel from 'react-bootstrap/Carousel';
import attractionImg from '../img/efes.jpg';
import restaurantImg from '../img/restaurant.jpg';
import eventImg from '../img/event.jpg';
import accommodationImg from '../img/accommodation.jpg';
import newsImg from '../img/news.jpg';
import { Link } from 'react-router-dom';
import { notImplementedYet } from '../App';

function AppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Link onClick={notImplementedYet}>
          <img
            className="d-block w-100"
            src={attractionImg}
            alt="Attractions"/>
        </Link>
        
        <Carousel.Caption>
          <Link className='text-white text-decoration-none h3' onClick={notImplementedYet}>Attractions</Link>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link onClick={notImplementedYet}>
          <img
            className="d-block w-100"
            src={restaurantImg}
            alt="Restaurants"/>
        </Link>
        
        <Carousel.Caption>
          <Link className='text-white text-decoration-none h3' onClick={notImplementedYet}>Restaurants</Link>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link onClick={notImplementedYet}>
          <img
            className="d-block w-100"
            src={eventImg}
            alt="Events"/>
        </Link>
        
        <Carousel.Caption>
          <Link className='text-white text-decoration-none h3' onClick={notImplementedYet}>Events</Link>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link onClick={notImplementedYet}>
          <img
            className="d-block w-100"
            src={accommodationImg}
            alt="Accommodation"/>
        </Link>
        
        <Carousel.Caption>
          <Link className='text-white text-decoration-none h3' onClick={notImplementedYet}>Accommodation</Link>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link onClick={notImplementedYet}>
          <img
            className="d-block w-100"
            src={newsImg}
            alt="News"/>
        </Link>
        
        <Carousel.Caption>
          <Link className='text-white text-decoration-none h3' onClick={notImplementedYet}>News</Link>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default AppCarousel;