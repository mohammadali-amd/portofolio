import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <motion.div
          whileInView={{ x: [-100,0], opacity: [0,1] }}
          transition= {{ duration: 0.5 }}
        >
          <a href="#twitter" target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <BsTwitter />
            </motion.div>
          </a>
        </motion.div>

        <motion.div
          whileInView={{ x: [-100,0], opacity: [0,1] }}
          transition= {{ duration: 0.5 }}
        >
          <a href="#twitter" target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <FaFacebookF />
            </motion.div>
          </a>
        </motion.div>

        <motion.div
          whileInView={{ x: [-100,0], opacity: [0,1] }}
          transition= {{ duration: 0.5 }}
        >
          <a href="#twitter" target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <BsInstagram />
            </motion.div>
          </a>
        </motion.div>
    </div>
  )
}

export default SocialMedia