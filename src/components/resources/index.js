import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '@styles';

const StyledAbout = styled.section`
  padding-top: 10vw;
  padding-bottom: 1rem;
`;
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const DefaultCard = styled(motion.div)`
  border: 4px solid var(--text);
  padding: 4vw 2.75vw;

  ${media.tablet`padding: 9vw 2.75vw;`};
`;
const DefaultCardA = styled.a`
  border: 4px solid var(--text);
  padding: 4vw 2.75vw;
  color: inherit;

  :hover {
    color: var(--background);
    background-color: var(--text);
  }

  ${media.tablet`padding: 9vw 2.75vw;`};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Col = styled(DefaultCardA)`
  grid-column-end: span 1;

  ${media.tablet`grid-column-end: span 3;`};
`;
const BoldTitle = styled(motion.h2)`
  font-weight: 400;
  font-size: 5vw;
  margin: 0;

  ${media.tablet`font-size: 8vw;`};
`;
const Caption = styled.small`
  font-size: 16px;
  margin: 1rem 0;
  line-height: 1.2;
  color: var(--text);
  padding: 1rem 0;

  a {
    color: inherit;
    text-decoration: underline;

    :hover {
      text-decoration: none;
    }
  }
`;

const MovingWrapper = styled(DefaultCard)`
  display: grid;
  grid-column-end: span 3;
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

const Resources = () => {
  return (
    <StyledAbout>
      <CardsWrapper>
        <MovingWrapper>
          <MarqueeWrapper
            initial={{ x: '0' }}
            animate={{ x: '-50%' }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity, delay: 1 }}>
            <MarqueeText>Resources</MarqueeText>
            <MarqueeText>—</MarqueeText>
            <MarqueeText>Resources</MarqueeText>
            <MarqueeText>—</MarqueeText>
            <MarqueeText>Resources</MarqueeText>
            <MarqueeText>—</MarqueeText>
            <MarqueeText>Resources</MarqueeText>
            <MarqueeText>—</MarqueeText>
          </MarqueeWrapper>
        </MovingWrapper>
        <Col
          href="https://www.nami.org/About-NAMI/Donate-to-NAMI"
          target="_blank"
          rel="noopener noreferrer">
          <BoldTitle>Support by donating</BoldTitle>
        </Col>
        <Col
          href="https://www.cdc.gov/mentalhealth/index.htm"
          target="_blank"
          rel="noopener noreferrer">
          <BoldTitle>Educate yourself</BoldTitle>
        </Col>
        <Col>
          <BoldTitle
            href="https://www.washingtonpost.com/national/health-science/instagram-public-awareness-campaign-aims-for-real-talk-about-mental-health/2019/05/24/cecfba8e-7cb5-11e9-8ede-f4abf521ef17_story.html"
            target="_blank"
            rel="noopener noreferrer">
            Start talking
          </BoldTitle>
        </Col>
      </CardsWrapper>
      <Wrapper>
        <Caption>
          Created by{' '}
          <a href="https://kyryloorlov.com" target="_blank" rel="noopener noreferrer">
            Kyrylo Orlov
          </a>
        </Caption>
      </Wrapper>
    </StyledAbout>
  );
};

export default Resources;
