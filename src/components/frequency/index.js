import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from '@components/icon';
import { motion } from 'framer-motion';
import { Container, media } from '@styles';

const FrequencySection = styled.section`
  height: 600vh;
`;
const OverflowWrapper = styled.div`
  overflow: hidden;

  :not(:last-child) {
    margin-right: 3vw;
  }
`;
const BoldTitle = styled(motion.h1)`
  position: relative;
  font-weight: 500;
  color: var(--text);
  font-size: 13vw;
  margin: 0;
  flex-wrap: nowrap;
  white-space: nowrap;

  top: 35%;
  left: 110%;
  position: absolute;

  ${media.tablet`font-size: 8vw;`};
  ${media.phablet`font-size: 14vw;`};
`;
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
const ContactWrapper = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden;

  ${props =>
    !props.secondSection &&
    `
    align-items: center;
    text-align: center;
  `};
`;
const Caption = styled(motion.p)`
  font-size: 3.5vw;
  margin: 0.2rem auto;
  line-height: 1.2;
  color: var(--text);

  ${media.tablet`font-size: 5vw;`};
  ${media.thone`font-size: 28px;`};
`;
const People = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;
const PersonWrapper = styled(motion.div)`
  width: 7vw;

  :not(.filled) {
    color: #484848;
  }

  .filled {
    color: var(--text);
  }
`;

const Frequency = () => {
  const [sectionProgress, setSectionProgress] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scroll.on('scroll', args => {
          if (args.currentElements['sticky_element']) {
            let progress = args.currentElements['sticky_element'].progress;
            setSectionProgress(progress);
          }
        });
      }, 2000);
    }
  }, []);

  return (
    <>
      <FrequencySection data-scroll id="frequency_sticky_target">
        <ContactWrapper
          data-scroll
          data-scroll-sticky
          data-scroll-target="#frequency_sticky_target"
          data-scroll-id="sticky_element">
          <StyledContainer>
            <People>
              <OverflowWrapper>
                <PersonWrapper
                  className="filled"
                  animate={sectionProgress > 0.15 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  className="filled"
                  animate={sectionProgress > 0.18 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  animate={sectionProgress > 0.21 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  animate={sectionProgress > 0.23 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  animate={sectionProgress > 0.25 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  animate={sectionProgress > 0.28 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  animate={sectionProgress > 0.31 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  animate={sectionProgress > 0.34 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
            </People>
            <OverflowWrapper>
              <Caption
                animate={sectionProgress > 0.37 ? { y: '-150%' } : { y: 0 }}
                transition={{
                  ease: [0.6, 0.05, -0.01, 0.9],
                  duration: 0.2,
                }}>
                Someone you know suffers
              </Caption>
            </OverflowWrapper>
            <OverflowWrapper>
              <Caption
                animate={sectionProgress > 0.4 ? { y: '-150%' } : { y: 0 }}
                transition={{
                  ease: [0.6, 0.05, -0.01, 0.9],
                  duration: 0.2,
                }}>
                from a mental health condition
              </Caption>
            </OverflowWrapper>
          </StyledContainer>
          <OverflowWrapper>
            <BoldTitle
              animate={sectionProgress > 0.4 && { x: `${sectionProgress * -300 + 120}%` }}
              transition={{
                duration: 0.1,
                ease: 'linear',
              }}>
              That’s too many f*cking people.
            </BoldTitle>
          </OverflowWrapper>
        </ContactWrapper>
      </FrequencySection>
    </>
  );
};

export default Frequency;
