import React from 'react';
import './TravelEssentials.css';
import ReactMarkdown from 'react-markdown';
const TravelEssentials = ({ title, originalPrice, discountedPrice, content }) => {
  return (
    <div className="travel-essentials">
      <div className="essentials-header">
        <h3 className="essentials-title">{title}</h3>
        <div className="essentials-price">
            {discountedPrice && (
            <span className="discounted-price">${discountedPrice}</span>
          )}
          {originalPrice && (
            <span className="original-price">${originalPrice}</span>
          )}
        </div>
      </div>
      
      <div 
        className="markdown-content-1"
      />
      <ReactMarkdown breaks>{content}</ReactMarkdown>
    </div>
  );
};

export default TravelEssentials;