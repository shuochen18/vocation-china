import React, { useState, useEffect, useRef } from 'react';
import { List, Modal, Button, Rate } from 'antd';
import { WhatsAppOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import './TourCard.css';

const TourCard = ({ tour }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const shouldHighlight = (
      (hash === 'shopping' && tour.title === 'Shopping Escapes') ||
      (hash === 'medical' && tour.title === 'Medical Journeys') ||
      (hash === 'play' && tour.title === 'Pure Play Travel')
    );

    setIsHighlighted(shouldHighlight);
    
    if (shouldHighlight && cardRef.current) {
      const yOffset = -100; // 调整滚动位置，考虑导航栏高度
      const y = cardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [tour.title]);

  if (!tour) {
    return null; // 如果没有数据，不渲染任何内容
  }

  return (
    <div ref={cardRef} className={`tour-card ${isHighlighted ? 'highlighted' : ''}`}>
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
          <div className="markdown-content">
            <ReactMarkdown breaks>{tour.details}</ReactMarkdown>
          </div>
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
            onClick={() => window.open('https://wa.me/17815214920', '_blank')}
            className="contact-button whatsapp"
          >
            Contact via WhatsApp
          </Button>
          <Button 
            type="primary" 
            icon={<MailOutlined />}
            onClick={() => window.location.href = 'mailto:dreamexperience@126.com'}
            className="contact-button email"
          >
            Contact via Email
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TourCard;