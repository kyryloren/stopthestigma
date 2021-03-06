import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, media } from '@styles';

const StyledHero = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;
const LargeTitle = styled(motion.h1)`
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  line-height: 1.2;
`;
const Caption = styled(motion.p)`
  font-size: 3vw;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50vh;
  margin: 0;
  text-align: center;

  ${media.thone`
    font-size: 24px;
    padding: 0 3rem;
  `};
  ${media.phablet`
    font-size: 22px;
    padding: 1rem;
  `};
`;
const ArrowWrapper = styled(motion.div)`
  left: 50%;
  top: 70vh;
  transform: translateX(-50%);
  position: absolute;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

const DownArrow = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512">
      <path
        fill="currentColor"
        d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
      />
    </svg>
  );
};

const Hero = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowText(false);
    }, 3500);
  }, []);

  return (
    <StyledHero>
      <Container>
        {showText && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0.4, fontSize: '5vw', y: '60%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.4, 0.4, 0.4, 0.4, 0],
                fontSize: ['5vw', '5vw', '10vw', '10vw', '10vw'],
                y: ['60%', '60%', '60%', '300%', '300%'],
              }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <LargeTitle>Stop the Stigma</LargeTitle>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.6, fontSize: '7vw', y: '40%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.6, 0.6, 0.6, 0.6, 0],
                fontSize: ['7vw', '7vw', '10vw', '10vw', '10vw'],
                y: ['40%', '40%', '40%', '200%', '200%'],
              }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <LargeTitle>Stop the Stigma</LargeTitle>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.8, fontSize: '8.5vw', y: '20%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.8, 0.8, 0.8, 0.8, 0],
                fontSize: ['8.5vw', '8.5vw', '10vw', '10vw', '10vw'],
                y: ['20%', '20%', '20%', '100%', '100%'],
              }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <LargeTitle>Stop the Stigma</LargeTitle>
            </motion.div>
          </>
        )}

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '-55%' }}
          transition={{
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.5,
            delay: 3.4,
          }}>
          <motion.div
            initial={{ scale: 0, fontSize: '10vw' }}
            animate={{ scale: 1 }}
            transition={{
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 0.5,
              delay: 0.4,
            }}>
            <LargeTitle>Stop the Stigma</LargeTitle>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.5,
            delay: 3.4,
          }}>
          <Caption>Let's start a conversation about mental health</Caption>
        </motion.div>

        {showText && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0.8, fontSize: '8.5vw', y: '-20%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.8, 0.8, 0.8, 0.8, 0],
                fontSize: ['8.5vw', '8.5vw', '10vw', '10vw', '10vw'],
                y: ['-20%', '-20%', '-20%', '-100%', '-100%'],
              }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <LargeTitle>Stop the Stigma</LargeTitle>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.6, fontSize: '7vw', y: '-40%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.6, 0.6, 0.6, 0.6, 0],
                fontSize: ['7vw', '7vw', '10vw', '10vw', '10vw'],
                y: ['-40%', '-40%', '-40%', '-200%', '-200%'],
              }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <LargeTitle>Stop the Stigma</LargeTitle>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.4, fontSize: '5vw', y: '-60%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.4, 0.4, 0.4, 0.4, 0],
                fontSize: ['5vw', '5vw', '10vw', '10vw', '10vw'],
                y: ['-60%', '-60%', '-60%', '-300%', '-300%'],
              }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <LargeTitle>Stop the Stigma</LargeTitle>
            </motion.div>
          </>
        )}

        <ArrowWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.5,
            delay: 3.4,
          }}>
          <div data-scroll data-scroll-speed={1}>
            <DownArrow />
          </div>
        </ArrowWrapper>
      </Container>
    </StyledHero>
  );
};

export default Hero;
