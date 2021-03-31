import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { useWindowSize } from '@hooks';
import { Container, media } from '@styles';

const StyledInfo = styled.section`
  padding-top: 15rem;
  padding-bottom: 20rem;
  overflow: hidden;

  ${media.phablet`
    padding-top: 5rem;
    padding-bottom: 5rem;
  `};
`;
const RectWrapper = styled(motion.div)`
  background-color: var(--gray);
  padding: 4rem;

  ${media.tablet`padding: 1rem;`};
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
  ${media.phone`font-size: 30px;`};
`;
const InsideTextWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 2rem;

  p {
    max-width: 80%;

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

const Info = () => {
  const [scrollPos, setScrollPos] = useState(null);
  const width = useWindowSize().width;

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.scroll.on('scroll', func => {
        setScrollPos(func.scroll.y);
      });
    }, 2000);
  }

  return (
    <StyledInfo>
      <Container>
        <RectWrapper
          animate={scrollPos && width > 800 && !isMobile && { rotate: scrollPos / 240 - 20 }}>
          <OverflowWrapper>
            <BoldTitle>Mental illness</BoldTitle>
          </OverflowWrapper>
          <OverflowWrapper>
            <BoldTitle>
              is <span className="highlight">continuously rising</span>
            </BoldTitle>
          </OverflowWrapper>
          <InsideTextWrap>
            <Caption>
              Poor mental health is increasing, and the number of mental health providers isn’t
              going up. Both government organizations and independent organizations are reporting an
              increase in mental health related issues every year.
            </Caption>
          </InsideTextWrap>
        </RectWrapper>
        <Caption style={{ padding: '2rem 3vh' }}>
          “Mental illnesses, such as depression, are the third most common cause of hospitalization
          in the United States for those aged 18-44 years old, and adults living with serious mental
          illness die on average 25 years earlier than others.” - CDC
        </Caption>
      </Container>
    </StyledInfo>
  );
};

export default Info;
