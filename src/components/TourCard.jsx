import React, { useState } from 'react';
import { List, Modal, Button, Rate } from 'antd';
import { WhatsAppOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import './TourCard.css';

const TourCard = ({ tour }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!tour) {
    return null; // 如果没有数据，不渲染任何内容
  }

  return (
    <div className="tour-card">
      <div className="card-image" style={{ backgroundImage: `url(${tour.image})` }} />
      <div className="card-content">
        <h2 className="tour-title">{tour.title}</h2>
        <div className="rating-section">
          <div className="rating-score">
            <div class="star">
              <Rate 
                disabled 
                defaultValue={1} 
                count={1}
                style={{ color: '#00b8a9' }}
              />
            </div>
            <span className="score">({tour.rating})</span>
          </div>
          <div className="review-count">
            <UserOutlined />
            <span className="count">{tour.reviewCount}</span>
            <span className="text">reviews</span>
          </div>
        </div>
        <p className="description">{tour.description}</p>
        
        <div className="card-details">
          <h3 className="section-title">Duration:</h3>
          <p className="list-item">{tour.duration}</p>
          
          <h3 className="section-title">Destinations:</h3>
          <List
            dataSource={tour.destinations}
            renderItem={item => (
              <div className="list-item">
                <span>{item}</span>
              </div>
            )}
          />
          
          <h3 className="section-title">Highlights:</h3>
          <List
            dataSource={tour.highlights}
            renderItem={item => (
              <div className="list-item">
                <span>{item}</span>
              </div>
            )}
          />
        </div>
        
        <button className="book-now" onClick={() => setIsModalOpen(true)}>
          Book Now
        </button>
      </div>

      <Modal
        title="Contact Us"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <div className="contact-options">
          <Button 
            type="primary" 
            icon={<WhatsAppOutlined />}
            onClick={() => window.open('https://wa.me/8612345678900', '_blank')}
            className="contact-button whatsapp"
          >
            Contact via WhatsApp
          </Button>
          <Button 
            type="primary" 
            icon={<MailOutlined />}
            onClick={() => window.location.href = 'mailto:info@chinatravel.com'}
            className="contact-button email"
          >
            Contact via Email
          </Button>
          <Button 
            type="primary" 
            icon={<PhoneOutlined />}
            onClick={() => window.location.href = 'tel:+8612345678900'}
            className="contact-button phone"
          >
            Contact via Phone
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TourCard; 