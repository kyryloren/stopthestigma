import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import SafariPinnedTab from '@images/favicon/safari-pinned-tab.svg';

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            twitterUsername
          }
        }
      }
    `,
  );

  // defaultImage: image

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername,
    // defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <link rel="mask-icon" href={SafariPinnedTab} color="#ff7171" />
      <meta name="msapplication-TileColor" content="#f6f6f6" />

      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {/* <meta property="og:image" content={seo.image} /> */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
