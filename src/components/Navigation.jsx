import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Select } from 'antd';
import { HomeOutlined, CompassOutlined, ContactsOutlined, GlobalOutlined } from '@ant-design/icons';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const items = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">{t('nav.home')}</Link>
    },
    {
      key: '/tours',
      icon: <CompassOutlined />,
      label: <Link to="/tours">{t('nav.tours')}</Link>
    },
    {
      key: '/contact',
      icon: <ContactsOutlined />,
      label: <Link to="/contact">{t('nav.contact')}</Link>
    }
  ];

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          className="border-none flex-1"
        />
        <div className="flex items-center ml-4">
          <GlobalOutlined className="mr-2" />
          <Select
            defaultValue="en"
            onChange={handleLanguageChange}
            options={[
              { value: 'en', label: 'English' },
              { value: 'zh', label: '中文' }
            ]}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;