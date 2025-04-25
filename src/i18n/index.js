import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.tours': 'Tours',
      'nav.contact': 'Contact',
      'tour.leisure': 'Leisure Tours',
      'tour.medical': 'Medical Tours',
      'tour.shopping': 'Shopping Tours',
      'home.title': 'Discover China',
      'home.subtitle': 'Experience the Beauty and Culture of China',
      'contact.title': 'Contact Us',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.address': 'Address'
    }
  },
  zh: {
    translation: {
      'nav.home': '首页',
      'nav.tours': '旅游项目',
      'nav.contact': '联系我们',
      'tour.leisure': '纯玩团',
      'tour.medical': '医疗团',
      'tour.shopping': '购物团',
      'home.title': '探索中国',
      'home.subtitle': '体验中国的美景与文化',
      'contact.title': '联系我们',
      'contact.email': '邮箱',
      'contact.phone': '电话',
      'contact.address': '地址',
      'product.advantages': '产品优势',
      'advantage.title1': '专业服务团队',
      'advantage.desc1': '10年旅游行业经验，500+成功案例',
      'advantage.title2': '全程无忧保障',
      'advantage.desc2': '旅行保险+24小时中文服务',
      'advantage.title3': '定制专属行程',
      'advantage.desc3': '根据需求量身打造个性化方案',
      'destinations.title': '精选目的地',
      'view.more': '查看更多',
      'about.title': '关于我们',
      'about.desc': '我们致力于为国际游客提供优质的中国旅游体验',
      'quick.links': '快速链接',
      'contact.info': '联系方式',
      'footer.copyright': '© 2024 中国之旅 保留所有权利',
      'footer.record': '京ICP备12345678号'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;