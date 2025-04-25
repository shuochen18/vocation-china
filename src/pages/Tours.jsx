import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Row, Col, Typography, Button, Divider } from 'antd';
import { EnvironmentOutlined, MedicineBoxOutlined, ShoppingOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Tours = () => {
  const { t } = useTranslation();

  const tourTypes = [
    {
      icon: <EnvironmentOutlined className="text-5xl text-blue-500" />,
      title: t('tour.leisure'),
      description: '纯玩团为您提供最纯粹的旅行体验，没有任何购物压力。',
      features: [
        '专业导游全程陪同',
        '精选景点深度游览',
        '舒适住宿和用餐安排',
        '灵活的行程定制',
        '无购物压力'
      ],
      highlights: [
        '长城徒步探险',
        '故宫深度文化之旅',
        '张家界自然风光游',
        '西湖人文景观游'
      ]
    },
    {
      icon: <MedicineBoxOutlined className="text-5xl text-green-500" />,
      title: t('tour.medical'),
      description: '医疗团结合高质量医疗服务和休闲观光，为您的健康保驾护航。',
      features: [
        '专业医疗团队服务',
        '个性化体检套餐',
        '医疗翻译陪同',
        '康养休闲相结合',
        '就医绿色通道'
      ],
      highlights: [
        '高端体检套餐',
        '中医养生体验',
        '医疗美容服务',
        '康复疗养项目'
      ]
    },
    {
      icon: <ShoppingOutlined className="text-5xl text-red-500" />,
      title: t('tour.shopping'),
      description: '购物团带您探索中国特色商圈，享受独特的购物体验。',
      features: [
        '特色商圈深度游',
        '品牌折扣优惠',
        '退税便捷服务',
        '商品邮寄服务',
        '专业导购陪同'
      ],
      highlights: [
        '丝绸、茶叶采购',
        '珠宝玉器选购',
        '电子产品优惠',
        '奢侈品专柜游'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Title level={1} className="text-center mb-8">{t('nav.tours')}</Title>
      
      <Row gutter={[24, 24]}>
        {tourTypes.map((tour, index) => (
          <Col xs={24} lg={8} key={index}>
            <Card className="h-full hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                {tour.icon}
                <Title level={2} className="mt-4">{tour.title}</Title>
                <Paragraph className="text-gray-600">{tour.description}</Paragraph>
              </div>

              <Divider>特色服务</Divider>
              <ul className="mb-6">
                {tour.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <CheckCircleOutlined className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Divider>精选行程</Divider>
              <ul className="mb-6">
                {tour.highlights.map((highlight, idx) => (
                  <li key={idx} className="mb-2 pl-4 border-l-2 border-blue-500">
                    {highlight}
                  </li>
                ))}
              </ul>

              <Button type="primary" block size="large" className="mt-4">
                咨询详情
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tours;