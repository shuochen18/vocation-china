import { Row, Col } from 'antd';
import TourCard from './TourCard';
import './TravelRoutes.css';
import toursData from '../data/tours.json';
import TravelEssentials from './TravelEssentials';
const TravelRoutes = () => {
  const { tours, essentials } = toursData;

  return (
    <div className="routes-page">
      <div className="hero-section">
        <h1>Travel Routes</h1>
        <p>Discover our carefully planned routes combining the best of Chinese culture, healthcare, and shopping</p>
      </div>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={18}>
          <div className="routes-container">
            <Row gutter={[24, 24]} className="tour-cards">
              {tours.map((tour, index) => (
                <Col key={index} xs={24} sm={12} md={6}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col key={tours.length} xs={24} sm={12} md={6}>
                <TravelEssentials
                  title={essentials.title}
                  originalPrice={essentials.originalPrice}
                  discountedPrice={essentials.discountPrice}
                  content={essentials.description}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TravelRoutes;