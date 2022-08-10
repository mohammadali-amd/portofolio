import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import { images } from '../../constants'
import './Work.scss';

// const works = [
//   { imgUrl: images.header_pic, name: 'Example', projectLink: '', codeLink: '', title: 'Example', description: 'Example', tags: ['همه', 'React JS', 'برنامه موبایل', 'UI/UX', 'وبسایت'] },
// ];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('همه');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // const query = '*[_type == "works"]';
    const query = [
      { imgUrl: images.gym_fitness, name: 'Fitness Club', projectLink: 'https://gym-exercises.pages.dev/', codeLink: 'https://github.com/mohammadali-amd/gym_exercises', title: 'Fitness Club', description: 'Fitness Club', tags: ['وبسایت', 'React JS', 'UI/UX', 'همه'] },
      { imgUrl: images.foodOrder, name: 'Food Order', projectLink: 'https://food-order-app.pages.dev/', codeLink: 'https://github.com/mohammadali-amd/Food-Order-App', title: 'Food Order', description: 'Food Order', tags: ['همه', 'React JS', 'وبسایت'] },
      { imgUrl: images.webstudio1, name: 'Webstudio', projectLink: 'https://webstudio.pages.dev/', codeLink: 'https://github.com/mohammadali-amd/portofolio', title: 'Webstudio', description: 'Webstudio', tags: ['همه', 'React JS', 'وبسایت'] },
    ];
    setWorks(query);
    setFilterWork(query);

    // fetch(query).then((data) => {
    //   setWorks(query);
    //   setFilterWork(query);
    // });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'همه') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <React.Fragment>
      <h2 className="head-text"> نمونه کار های ما در <span> وب استودیو </span> </h2>

      <div className="app__work-filter">
        {['React JS', 'UI/UX', 'وبسایت', 'برنامه موبایل', 'همه'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </React.Fragment>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'نمونه کار',
  'app__primarybg',
);