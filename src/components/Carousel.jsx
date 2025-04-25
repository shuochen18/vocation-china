import React from 'react';
import { Carousel as AntCarousel } from 'antd';

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d',
    title: '北京长城',
    description: '世界文化遗产，中国古代伟大的建筑工程'
  },
  {
    image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628',
    title: '上海外滩',
    description: '感受中西合璧的建筑风格，体验大都市的繁华'
  },
  {
    image: 'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57',
    title: '西安古城',
    description: '穿越千年历史，探访古都文化'
  }
];

const Carousel = () => {
  return (
    <AntCarousel autoplay className="mb-12">
      {carouselItems.map((item, index) => (
        <div key={index} className="relative h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image}?auto=format&fit=crop&w=1920&q=80)` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              <p className="text-xl">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </AntCarousel>
  );
};

export default Carousel;