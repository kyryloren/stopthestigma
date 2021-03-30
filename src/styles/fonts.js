import { css } from 'styled-components';

import BasierCircleRegularWOFF from '@fonts/BasierCircle-Regular.woff';
import BasierCircleRegularWOFF2 from '@fonts/BasierCircle-Regular.woff2';
import BasierCircleItalicWOFF from '@fonts/BasierCircle-Italic.woff';
import BasierCircleItalicWOFF2 from '@fonts/BasierCircle-Italic.woff2';
import BasierCircleMediumWOFF from '@fonts/BasierCircle-Medium.woff';
import BasierCircleMediumWOFF2 from '@fonts/BasierCircle-Medium.woff2';
import BasierCircleMediumItalicWOFF from '@fonts/BasierCircle-MediumItalic.woff';
import BasierCircleMediumItalicWOFF2 from '@fonts/BasierCircle-MediumItalic.woff2';
import BasierCircleSemiBoldWOFF from '@fonts/BasierCircle-SemiBold.woff';
import BasierCircleSemiBoldWOFF2 from '@fonts/BasierCircle-SemiBold.woff2';
import BasierCircleSemiBoldItalicWOFF from '@fonts/BasierCircle-SemiBoldItalic.woff';
import BasierCircleSemiBoldItalicWOFF2 from '@fonts/BasierCircle-SemiBoldItalic.woff2';
import BasierCircleBoldWOFF from '@fonts/BasierCircle-Bold.woff';
import BasierCircleBoldWOFF2 from '@fonts/BasierCircle-Bold.woff2';
import BasierCircleBoldItalicWOFF from '@fonts/BasierCircle-BoldItalic.woff';
import BasierCircleBoldItalicWOFF2 from '@fonts/BasierCircle-BoldItalic.woff2';

const basierRegularWeights = {
  400: [BasierCircleRegularWOFF, BasierCircleRegularWOFF2],
  500: [BasierCircleMediumWOFF, BasierCircleMediumWOFF2],
  600: [BasierCircleSemiBoldWOFF, BasierCircleSemiBoldWOFF2],
  700: [BasierCircleBoldWOFF, BasierCircleBoldWOFF2],
};

const basierItalicWeights = {
  400: [BasierCircleItalicWOFF, BasierCircleItalicWOFF2],
  500: [BasierCircleMediumItalicWOFF, BasierCircleMediumItalicWOFF2],
  600: [BasierCircleSemiBoldItalicWOFF, BasierCircleSemiBoldItalicWOFF2],
  700: [BasierCircleBoldItalicWOFF, BasierCircleBoldItalicWOFF2],
};

const basier = {
  name: 'Basier Circle',
  normal: basierRegularWeights,
  italic: basierItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const basierRegular = createFontFaces(basier);
const basierItalic = createFontFaces(basier, 'italic');

const Fonts = css`
  ${basierRegular + basierItalic}
`;

export default Fonts;
