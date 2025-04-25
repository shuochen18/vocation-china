import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Card, Row, Col, Form, Input, Button } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <MailOutlined className="text-3xl text-blue-500" />,
      title: t('contact.email'),
      content: 'info@chinatours.com'
    },
    {
      icon: <PhoneOutlined className="text-3xl text-green-500" />,
      title: t('contact.phone'),
      content: '+86 123 4567 8900'
    },
    {
      icon: <EnvironmentOutlined className="text-3xl text-red-500" />,
      title: t('contact.address'),
      content: '北京市朝阳区建国路88号'
    },
    {
      icon: <GlobalOutlined className="text-3xl text-purple-500" />,
      title: 'WeChat',
      content: 'ChinaTours888'
    }
  ];

  const onFinish = (values) => {
    console.log('Received values:', values);
    // 这里可以添加发送表单数据的逻辑
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Title level={1} className="text-center mb-8">{t('contact.title')}</Title>

      <Row gutter={[24, 24]} className="mb-12">
        {contactInfo.map((info, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className="text-center h-full hover:shadow-lg transition-shadow">
              <div className="mb-4">{info.icon}</div>
              <Title level={4}>{info.title}</Title>
              <Paragraph className="text-gray-600">{info.content}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Row justify="center">
        <Col xs={24} md={16} lg={12}>
          <Card className="shadow-lg">
            <Title level={3} className="text-center mb-6">发送询问</Title>
            <Form
              name="contact"
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: '请输入您的姓名' }]}
              >
                <Input placeholder="您的姓名" size="large" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ required: true, message: '请输入您的邮箱' }, { type: 'email' }]}
              >
                <Input placeholder="您的邮箱" size="large" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: '请输入您的电话' }]}
              >
                <Input placeholder="您的电话" size="large" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: '请输入您的留言' }]}
              >
                <TextArea
                  placeholder="您想了解的内容"
                  rows={4}
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  发送信息
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;