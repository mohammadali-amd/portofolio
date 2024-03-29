import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './Skills.scss';

const skills = [
  { name: 'Wordpress', icon: images.wordpress, bgColor: '#eef1ff' },
  { name: 'Flutter', icon: images.flutter, bgColor: 'rgb(236, 251, 255)' },
  { name: 'Bootstrap', icon: images.bootstrap, bgColor: '#fcebffdd' },
  { name: 'Material UI', icon: images.mu5, bgColor: '#e6feff' },
  { name: 'Sass', icon: images.sass, bgColor: '#ffeef8de' },
  { name: 'Javascript', icon: images.javascript, bgColor: '#fbfde5' },
  { name: 'React Js', icon: images.reactjs, bgColor: '#edfbff' },
  { name: 'Node', icon: images.node, bgColor: '#eefff1e7' },
];

const experiences = [
  { year: '2022', works: [
    {name: 'این متن برای نمونه نوشته شده و جنبه تزئینی داره.', company: 'نمونه', desc: 'این متن برای نمونه نوشته شده و جنبه تزئینی داره. این متن برای نمونه نوشته شده و جنبه تزئینی داره. این متن برای نمونه نوشته شده و جنبه تزئینی داره. این متن برای نمونه نوشته شده و جنبه تزئینی داره.'},
    {name: 'این متن برای نمونه نوشته شده و جنبه تزئینی داره.', company: 'نمونه', desc: 'این متن برای نمونه نوشته شده و جنبه تزئینی داره. این متن برای نمونه نوشته شده و جنبه تزئینی داره. این متن برای نمونه نوشته شده و جنبه تزئینی داره. این متن برای نمونه نوشته شده و جنبه تزئینی داره.'},
  ]},
];

const Skills = () => {

  return (
    <React.Fragment>
      <h2 className="head-text">
        مهارت ها و تجربیات ما
      </h2>

      <div className="app__skills-container">

      <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>

              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

            </motion.div>
          ))}
        </div>

        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </React.Fragment>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'مهارت ها',
  'app__whitebg',
);