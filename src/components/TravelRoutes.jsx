import { Row, Col } from 'antd';
import TourCard from './TourCard';
import './TravelRoutes.css';
import toursData from '../data/tours.json';

const TravelRoutes = () => {
  const { tours } = toursData;

  return (
    <div className="routes-page">
      <div className="hero-section">
        <h1>Travel Routes</h1>
        <p>Discover our carefully planned routes combining the best of Chinese culture, healthcare, and shopping</p>
      </div>
      <div className="routes-container">
        <Row gutter={[24, 24]} className="tour-cards">
          {tours.map((tour, index) => (
            <Col key={index} xs={24} md={8}>
              <TourCard tour={tour} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TravelRoutes;