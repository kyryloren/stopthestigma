import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from '@components/icon';
import { motion } from 'framer-motion';
import { useWindowSize } from '@hooks';
import { isMobile } from 'react-device-detect';
import { Container, media } from '@styles';

const FrequencySection = styled.section`
  height: 200vh;
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
  left: 350%;

  ${media.tablet`font-size: 8vw;`};
  ${media.phablet`font-size: 14vw;`};
`;
const ContactWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: sticky;
  top: 0;

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
  const [section2Progress, setSection2Progress] = useState(null);
  const width = useWindowSize().width;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scroll.on('scroll', args => {
          console.log(args.currentElements);
          if (args.currentElements['frequency_sticky_target']) {
            let progress = args.currentElements['frequency_sticky_target'].progress;
            setSectionProgress(progress);
          }

          if (args.currentElements['frequency_sticky_target2']) {
            let progress = args.currentElements['frequency_sticky_target2'].progress;
            setSection2Progress(progress);
          }
        });
      }, 2000);
    }
  }, []);

  let checkMobile = isMobile && width < 800;

  return (
    <>
      <FrequencySection
        data-scroll
        id="frequency_sticky_target"
        data-scroll-id="frequency_sticky_target">
        <Container style={{ height: '100%' }}>
          <ContactWrapper
            data-scroll
            data-scroll-sticky
            data-scroll-target="#frequency_sticky_target">
            <People>
              <OverflowWrapper>
                <PersonWrapper
                  className="filled"
                  isMobile={checkMobile}
                  animate={sectionProgress > 0.4 ? { y: '-100%' } : { y: 0 }}
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
                  isMobile={checkMobile}
                  animate={sectionProgress > 0.43 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  isMobile={checkMobile}
                  animate={sectionProgress > 0.46 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  isMobile={checkMobile}
                  animate={sectionProgress > 0.49 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  isMobile={checkMobile}
                  animate={sectionProgress > 0.52 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  isMobile={checkMobile}
                  animate={sectionProgress > 0.55 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  isMobile={checkMobile}
                  animate={sectionProgress > 0.59 ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.2,
                  }}>
                  <Icon name="person" />
                </PersonWrapper>
              </OverflowWrapper>
              <OverflowWrapper>
                <PersonWrapper
                  isMobile={checkMobile}
                  animate={sectionProgress > 0.62 ? { y: '-100%' } : { y: 0 }}
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
                animate={sectionProgress > 0.65 ? { y: '-150%' } : { y: 0 }}
                transition={{
                  ease: [0.6, 0.05, -0.01, 0.9],
                  duration: 0.2,
                }}>
                Someone you know suffers
              </Caption>
            </OverflowWrapper>
            <OverflowWrapper>
              <Caption
                animate={sectionProgress > 0.69 ? { y: '-150%' } : { y: 0 }}
                transition={{
                  ease: [0.6, 0.05, -0.01, 0.9],
                  duration: 0.2,
                }}>
                from a mental health condition
              </Caption>
            </OverflowWrapper>
          </ContactWrapper>
        </Container>
      </FrequencySection>
      <FrequencySection
        data-scroll
        id="frequency_sticky_target2"
        data-scroll-id="frequency_sticky_target2">
        <ContactWrapper
          secondSection
          style={{ overflow: 'hidden' }}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#frequency_sticky_target2">
          <BoldTitle
            animate={{ x: `${section2Progress * -820}%` }}
            transition={{
              duration: 0.1,
              ease: 'linear',
            }}>
            That’s too many f*cking people.
          </BoldTitle>
        </ContactWrapper>
      </FrequencySection>
    </>
  );
};

export default Frequency;
