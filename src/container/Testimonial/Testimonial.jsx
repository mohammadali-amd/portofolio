import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './Testimonial.scss';

const testimonials = [
  { imgurl: images.amazon, name: 'Lorem', company: 'Lorem', feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus doloremque aliquam natus eligendi voluptatibus totam expedita ex dicta, rerum consequatur omnis voluptas ipsam corporis eius assumenda minima sequi est possimus.' },
  { imgurl: images.sass, name: 'Lorem2', company: 'Lorem2', feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus doloremque aliquam natus eligendi voluptatibus totam expedita ex dicta, rerum consequatur omnis voluptas ipsam corporis eius assumenda minima sequi est possimus.' },
];
const brands = [
  { _id: '1', imgUrl: images.figma, name: 'Test' },
  { _id: '2', imgUrl: images.asus, name: 'Asus' },
  { _id: '3', imgUrl: images.git, name: 'Git' },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <React.Fragment>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);