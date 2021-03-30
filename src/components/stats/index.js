import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Container, media } from '@styles';

const StyledAbout = styled.section`
  padding-top: 15rem;
`;
const SplitWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 4rem;

  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
  `};
`;
const OverflowWrapper = styled.div`
  overflow: hidden;
`;
const StatRows = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 4vw;

  ${media.tablet`order: 1;`};
`;
const BoldTitle = styled(motion.h2)`
  position: sticky;
  top: 10px;
  font-weight: 500;
  color: ${props => (props.normal ? 'var(--text)' : 'var(--purple)')};
  font-size: ${props => (props.normal ? '7vw' : '5vw')};
  margin: 0;

  ${media.tablet`font-size: 8vw;`};
  ${media.thone`font-size: 54px;`};
`;
const Caption = styled.p`
  font-size: 2.5vw;
  margin: 1rem 0;
  line-height: 1.2;
  color: var(--text);

  span {
    color: var(--purple);
  }

  ${media.tablet`font-size: 5vw;`};
  ${media.thone`font-size: 28px;`};
  ${media.phablet`font-size: 22px;`};
`;

const Stats = () => {
  const [statsRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <StyledAbout>
      <Container>
        <SplitWrapper id="stat_sticky_target" ref={statsRef}>
          <StatRows>
            <div>
              <OverflowWrapper>
                <BoldTitle
                  initial={{ y: '100%' }}
                  animate={inView && { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.5,
                  }}>
                  284,000,000
                </BoldTitle>
              </OverflowWrapper>
              <Caption>
                people suffering from <span>anxiety</span>
              </Caption>
            </div>
            <div>
              <OverflowWrapper>
                <BoldTitle
                  initial={{ y: '100%' }}
                  animate={inView && { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.5,
                  }}>
                  264,000,000
                </BoldTitle>
              </OverflowWrapper>
              <Caption>
                people suffering from <span>depression</span>
              </Caption>
            </div>
            <div>
              <OverflowWrapper>
                <BoldTitle
                  initial={{ y: '100%' }}
                  animate={inView && { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.5,
                  }}>
                  46,000,000
                </BoldTitle>
              </OverflowWrapper>
              <Caption>
                people suffering from <span>bipolar</span>
              </Caption>
            </div>
            <div>
              <OverflowWrapper>
                <BoldTitle
                  initial={{ y: '100%' }}
                  animate={inView && { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.5,
                  }}>
                  16,000,000
                </BoldTitle>
              </OverflowWrapper>
              <Caption>
                people suffering from <span>eating disorders</span>
              </Caption>
            </div>
            <div>
              <OverflowWrapper>
                <BoldTitle
                  initial={{ y: '100%' }}
                  animate={inView && { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.5,
                  }}>
                  20,000,000
                </BoldTitle>
              </OverflowWrapper>
              <Caption>
                people suffering from <span>schizophrenia</span>
              </Caption>
            </div>
          </StatRows>
          <div>
            <BoldTitle
              normal
              data-scroll
              data-scroll-sticky
              data-scroll-target="#stat_sticky_target">
              Let's crunch the numbers
            </BoldTitle>
          </div>
        </SplitWrapper>
      </Container>
    </StyledAbout>
  );
};

export default Stats;
