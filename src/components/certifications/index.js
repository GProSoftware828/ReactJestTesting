import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

// import ReactDOM from 'react-dom';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const images = [
  'https://i.ibb.co/j56TTtx/React-Redux-Node.jpg',
  'https://i.ibb.co/JdkFLZv/React-Redux10-23-2019.jpg',
  'https://i.ibb.co/7QL0Lt5/React-Advanced.jpg',
  'https://i.ibb.co/S0kX4gP/Type-Script6-2019.jpg',
  'https://i.ibb.co/Y24LX8m/Linux6-2019.jpg',
  'https://i.ibb.co/yFLtSjc/Cplusplus6-2019.jpg',
  'https://i.ibb.co/RSF6GXc/Java6-2019.jpg',
  'https://i.ibb.co/KmywwQ1/Angular5-2019.jpg',
  'https://i.ibb.co/rcPQsS9/Rails12-2018.jpg',
  'https://i.ibb.co/QK2Gqhw/HTMLCSS12-2018.jpg',
  'https://i.ibb.co/Hr6vk2m/PHP12-2018.jpg',
  'https://i.ibb.co/mT2mCkj/JS8-2018.jpg',
  'https://i.ibb.co/HddcMRs/AJAX8-2018.jpg',
  'https://i.ibb.co/W2rp2yX/AJAX5-2018.jpg',
  'https://i.ibb.co/5jsFdYd/Angular-Four5-2018.jpg'
];

const Certifications = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 12) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>
      <Gallery
        style={{
          background: 'black',
          height: '90vh',
          width: '100vw'
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
        data-test="CertificationsElement"
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Certifications;
