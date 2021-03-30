import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { media } from '@styles';

const StyledAbout = styled.section`
  padding-top: 5rem;
  padding-bottom: 10vw;

  ${media.tablet`padding-bottom: 5rem;`};
`;
const DefaultCard = styled.div`
  border: 4px solid var(--text);
  padding: 4vw 2.75vw;

  ${media.tablet`padding: 9vw 2.75vw;`};
`;
const OverflowWrapper = styled.div`
  overflow: hidden;
`;
const BoldTitle = styled(motion.h2)`
  font-weight: 500;
  color: var(--text);
  font-size: 7vw;
  margin: 0;

  ${media.tablet`font-size: 8vw;`};
  ${media.phablet`font-size: 42px;`};
`;
const InsideTextWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 2rem;

  p {
    max-width: 95%;

    ${media.tablet`max-width: 100%;`};
  }
`;
const Caption = styled.p`
  font-size: 3.5vw;
  margin: 1rem 0;
  line-height: 1.2;
  color: var(--text);

  ${media.tablet`font-size: 5vw;`};
  ${media.thone`font-size: 28px;`};
  ${media.phablet`font-size: 22px;`};
`;

const MovingWrapper = styled(DefaultCard)`
  overflow: hidden;
`;
const MarqueeWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
`;
const MarqueeText = styled.span`
  font-size: 7vw;
  line-height: 1.2;
  word-wrap: nowrap;
  margin: 0 1vw;
  line-height: 95%;
  font-weight: 400;
  text-transform: uppercase;

  ${media.tablet`font-size: 12.7vw;`};
`;

const Misinformation = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <StyledAbout ref={sectionRef}>
      <DefaultCard>
        <OverflowWrapper>
          <BoldTitle
            initial={{ y: '100%' }}
            animate={inView && { y: 0 }}
            transition={{
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 0.5,
            }}>
            And no, it's not just
          </BoldTitle>
        </OverflowWrapper>
        <OverflowWrapper>
          <BoldTitle
            initial={{ y: '100%' }}
            animate={inView && { y: 0 }}
            transition={{
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 0.5,
              delay: 0.2,
            }}>
            about feeling a
          </BoldTitle>
        </OverflowWrapper>
        <OverflowWrapper>
          <BoldTitle
            initial={{ y: '100%' }}
            animate={inView && { y: 0 }}
            transition={{
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 0.5,
              delay: 0.4,
            }}>
            little <em>sad</em>
          </BoldTitle>
        </OverflowWrapper>
        <InsideTextWrap>
          <Caption>
            If getting a bad grade on a test made you feel sad or angry, it doesn’t mean that you
            are depressed. Depression is characterized by a persistently depressed mood or loss of
            interest in activities, and has nothing to do with your test grade.
          </Caption>
        </InsideTextWrap>
      </DefaultCard>
      <MovingWrapper>
        <MarqueeWrapper
          initial={{ x: '0' }}
          animate={{ x: '-137.5%' }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity, delay: 1 }}>
          <MarqueeText>Thou shalt love thy neighbor</MarqueeText>
          <MarqueeText>—</MarqueeText>
          <MarqueeText>Thou shalt love thy neighbor</MarqueeText>
          <MarqueeText>—</MarqueeText>
          <MarqueeText>Thou shalt love thy neighbor</MarqueeText>
          <MarqueeText>—</MarqueeText>
          <MarqueeText>Thou shalt love thy neighbor</MarqueeText>
          <MarqueeText>—</MarqueeText>
        </MarqueeWrapper>
      </MovingWrapper>
    </StyledAbout>
  );
};

export default Misinformation;
