import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Row, Col, Typography, Button } from 'antd';
import { EnvironmentOutlined, MedicineBoxOutlined, ShoppingOutlined, ArrowRightOutlined, CheckCircleOutlined, SafetyCertificateOutlined, RocketOutlined } from '@ant-design/icons';
import Carousel from '../components/Carousel';

const { Title, Paragraph } = Typography;

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <EnvironmentOutlined className="text-4xl text-blue-500" />,
      title: t('tour.leisure'),
      description: '探索中国最美的自然风光和文化遗产，享受无购物压力的纯玩之旅。'
    },
    {
      icon: <MedicineBoxOutlined className="text-4xl text-green-500" />,
      title: t('tour.medical'),
      description: '结合优质医疗资源和休闲观光，为您提供专业的医疗旅游服务。'
    },
    {
      icon: <ShoppingOutlined className="text-4xl text-red-500" />,
      title: t('tour.shopping'),
      description: '体验中国特色购物文化，享受独特的购物之旅。'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <Carousel />
      <div className="text-center mb-12">
        <Title level={1} className="text-4xl font-bold mb-4">{t('home.title')}</Title>
        <Paragraph className="text-xl text-gray-600">{t('home.subtitle')}</Paragraph>
      </div>

      <Row gutter={[24, 24]} className="mb-12">
        {features.map((feature, index) => (
          <Col xs={24} md={8} key={index}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="text-center">
                {feature.icon}
                <Title level={3} className="mt-4 mb-2">{feature.title}</Title>
                <Paragraph className="text-gray-600">{feature.description}</Paragraph>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="py-12">
        <Title level={2} className="text-center mb-8">{t('product.advantages')}</Title>
        <Row gutter={[24, 24]} className="mb-12">
          <Col xs={24} md={8}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircleOutlined className="text-4xl text-blue-500 mb-4" />
              <Title level={4} className="mb-2">{t('advantage.title1')}</Title>
              <Paragraph className="text-gray-600">{t('advantage.desc1')}</Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <SafetyCertificateOutlined className="text-4xl text-green-500 mb-4" />
              <Title level={4} className="mb-2">{t('advantage.title2')}</Title>
              <Paragraph className="text-gray-600">{t('advantage.desc2')}</Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <RocketOutlined className="text-4xl text-purple-500 mb-4" />
              <Title level={4} className="mb-2">{t('advantage.title3')}</Title>
              <Paragraph className="text-gray-600">{t('advantage.desc3')}</Paragraph>
            </div>
          </Col>
        </Row>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <div className="flex justify-between items-center mb-6">
            <Title level={2} className="!mb-0">{t('destinations.title')}</Title>
            <Button type="link" size="large" className="flex items-center">
              查看更多 <ArrowRightOutlined className="ml-1" />
            </Button>
          </div>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card
                cover={<div className="h-48 bg-[url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />}
                className="hover:shadow-lg transition-shadow"
              >
                <Card.Meta
                  title="北京"
                  description="探索中国首都的历史文化，参观长城、故宫等世界文化遗产。"
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                cover={<div className="h-48 bg-[url('https://images.unsplash.com/photo-1545893835-abaa50cbe628?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />}
                className="hover:shadow-lg transition-shadow"
              >
                <Card.Meta
                  title="上海"
                  description="体验现代化国际大都市的魅力，感受东西方文化的完美融合。"
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                cover={<div className="h-48 bg-[url('https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />}
                className="hover:shadow-lg transition-shadow"
              >
                <Card.Meta
                  title="西安"
                  description="穿越千年历史，探访兵马俑、古城墙等历史遗迹。"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;