import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { Head, SmoothScroll } from '@components';
import { GlobalStyle } from '@styles';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={site => (
        <>
          <Head metadata={site.site.siteMetadata} />
          <SmoothScroll callbacks={location} />

          <GlobalStyle />
          <AnimatePresence>
            <motion.main
              key={location.pathname}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit">
              {children}
            </motion.main>
          </AnimatePresence>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
