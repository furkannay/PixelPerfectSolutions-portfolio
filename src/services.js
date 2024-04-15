import React, { useState, useEffect } from 'react';
import './Services.css';
import url1 from './resim1.png';
import url2 from './resim2.png';
import url3 from './resim3.png';
import url4 from './resim4.png';
import url5 from './resim5.png';
import url6 from './resim6.png';

const servicesData = [
  { id: 1, title: "Web Sitesi Tasarımı ve Geliştirme", description: "Müşterilerimize özelleştirilmiş, modern ve kullanıcı dostu web siteleri oluşturuyoruz. Tasarımlarımızda estetik ve işlevsellik bir araya gelerek, markaların dijital dünyada güçlü bir varlık olmalarını sağlıyoruz.", imageUrl: url1 },
  { id: 2, title: "Mobil Uygulama Geliştirme", description: "Mobil cihazlar için özel uygulamalar geliştirerek müşterilerimize geniş kitlelere erişim sağlamalarına yardımcı oluyoruz. Kullanıcı dostu arayüzler ve yüksek performanslı uygulamalarla mobil deneyimleri optimize ediyoruz.", imageUrl: url2 },
  { id: 3, title: "UI/UX Tasarımı", description: "Kullanıcı deneyimini ön planda tutarak, interaktif ve kullanıcı odaklı tasarımlar yapıyoruz. Markaların hedef kitlesini etkilemek ve dönüşümleri artırmak için görsel ve işlevsel çözümler üretiyoruz.", imageUrl: url3 },
  { id: 4, title: "Dijital Pazarlama Stratejileri", description: "Müşterilerimizin çevrimiçi varlıklarını güçlendirmek için kapsamlı dijital pazarlama stratejileri geliştiriyoruz. SEO, sosyal medya yönetimi, içerik pazarlaması ve reklam kampanyaları gibi alanlarda uzmanız.", imageUrl: url4 },
  { id: 5, title: "E-ticaret Çözümleri", description: "Müşterilerimize ölçeklenebilir ve güvenli e-ticaret platformları sağlıyoruz. Online satışları artırmak için kullanıcı dostu e-ticaret siteleri tasarlayarak müşterilerimize rekabet avantajı sağlıyoruz.", imageUrl: url5 },
  { id: 6, title: "SEO Danışmanlığı ve Optimizasyon", description: "Arama motorlarında daha görünür olmalarını sağlamak için müşterilerimize SEO danışmanlığı ve optimizasyon hizmetleri sunuyoruz. Arama sonuçlarında üst sıralarda yer alarak organik trafiklerini artırıyoruz.", imageUrl: url6 }
];

const Services = () => {
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setCardsToShow(1);
      } else {
        setCardsToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [startIndex, setStartIndex] = useState(3);

  const goToPrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
  };

  const goToNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const getCardsToShow = () => {
    return Array.from({ length: cardsToShow }, (_, index) => (startIndex + index) % servicesData.length);
  };

  return (
    <div className="services-container">
      <div className="arrow-buttons-container">
        <button className="arrow-button left" onClick={goToPrevious}>&#8249;</button>
      </div>
      <div className="service-gallery">
        {getCardsToShow().map((index) => (
          <div key={servicesData[index].id} className="service-card">
            <img src={servicesData[index].imageUrl} alt={servicesData[index].title} />
            <h2>{servicesData[index].title}</h2>
            <h3>{servicesData[index].description}</h3>
          </div>
        ))}
      </div>
      <div className="arrow-buttons-container">
        <button className="arrow-button right" onClick={goToNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default Services;
