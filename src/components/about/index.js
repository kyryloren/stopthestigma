import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { media } from '@styles';

const StyledAbout = styled.section`
  padding-top: 5vw;
`;
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;
const DefaultCard = styled(motion.div)`
  border: 4px solid var(--text);
  padding: 4vw 2.75vw;

  ${media.tablet`padding: 9vw 2.75vw;`};
`;
const OverflowWrapper = styled.div`
  overflow: hidden;
`;
const LeftStats = styled(DefaultCard)`
  grid-column-end: span 1;

  ${media.tablet`grid-column-end: span 2;`};
`;
const RightStats = styled(DefaultCard)`
  grid-column-end: span 1;

  ${media.tablet`grid-column-end: span 2;`};
`;
const BoldTitle = styled(motion.h2)`
  font-weight: 500;
  color: ${props => (props.red ? 'var(--red)' : 'var(--blue)')};
  font-size: 5vw;
  margin: 0;

  ${media.tablet`font-size: 8vw;`};
  ${media.thone`font-size: 54px;`};
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

const GridCenterStats = styled.div`
  grid-column-end: span 2;
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

const About = () => {
  const [aboutRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <StyledAbout ref={aboutRef}>
      <CardsWrapper>
        <LeftStats>
          <OverflowWrapper>
            <BoldTitle
              initial={{ y: '100%' }}
              animate={inView && { y: 0 }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 0.5,
              }}>
              792,000,000
            </BoldTitle>
          </OverflowWrapper>
          <Caption>People who are suffering from a mental illness</Caption>
        </LeftStats>
        <RightStats>
          <OverflowWrapper>
            <BoldTitle
              initial={{ y: '100%' }}
              animate={inView && { y: 0 }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 0.5,
              }}
              red>
              14.3%
            </BoldTitle>
          </OverflowWrapper>
          <Caption>Of all deaths are from mental illness</Caption>
        </RightStats>
        <GridCenterStats>
          <DefaultCard
            initial={{ y: '-100%' }}
            animate={inView && { y: 0 }}
            transition={{
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 0.5,
            }}>
            <MarqueeWrapper
              initial={{ x: '0' }}
              animate={{ x: '-70%' }}
              transition={{ duration: 10, ease: 'linear', repeat: Infinity, delay: 1 }}>
              <MarqueeText>The statistics</MarqueeText>
              <MarqueeText>—</MarqueeText>
              <MarqueeText>The statistics</MarqueeText>
              <MarqueeText>—</MarqueeText>
              <MarqueeText>The statistics</MarqueeText>
              <MarqueeText>—</MarqueeText>
              <MarqueeText>The statistics</MarqueeText>
              <MarqueeText>—</MarqueeText>
            </MarqueeWrapper>
          </DefaultCard>
        </GridCenterStats>
        <GridCenterStats>
          <DefaultCard
            initial={{ y: '-200%' }}
            animate={inView && { y: 0 }}
            transition={{
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 1,
            }}>
            <Caption>
              Mental health is considered one of the most neglected problems in the modern world.
              Dismantling the stigma around mental illness is more important now than ever. So let’s
              educate ourselves about mental health!
            </Caption>
          </DefaultCard>
        </GridCenterStats>
      </CardsWrapper>
    </StyledAbout>
  );
};

export default About;
