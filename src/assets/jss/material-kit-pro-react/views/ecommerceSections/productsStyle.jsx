import {
  section,
  container,
  cardTitle,
  coloredShadow,
  mlAuto,
  mrAuto,
  grayColor,
} from '../../../material-kit-pro-react';

import customCheckboxRadioSwitch from '../../customCheckboxRadioSwitchStyle';

import tooltipsStyle from '../../tooltipsStyle';

const styles = {
  ...customCheckboxRadioSwitch,
  ...tooltipsStyle,
  coloredShadow,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: 'center',
    marginBottom: '0px !important',
  },
  cardDescription: {
    color: grayColor[0],
    textAlign: 'center',
  },
  container: {
    ...container,
  },
  description: {
    color: grayColor[0],
  },
  section: {
    ...section,
    padding: '70px 0px',
  },
  priceContainer: {
    display: 'inline-flex',
  },
  price: {
    fontSize: '18px',
    color: grayColor[22],
  },
  pullRight: {
    float: 'right',
  },
  cardHeaderImage: {
    position: 'relative',
    padding: '0',
    zIndex: '1',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    borderRadius: '6px',
    '& img': {
      width: '100%',
      borderRadius: '6px',
      pointerEvents: 'none',
    },
    '& a': {
      display: 'block',
    },
  },
  justifyContentBetween: {
    WebkitBoxPack: 'justify!important',
    justifyContent: 'space-between !important',
  },
  customExpandPanel: {
    maxHeight: '273px',
    overflowY: 'scroll',
    '&  label': {
      display: 'block',
    },
  },
  priceSlider: {
    fontWeight: '500',
  },
  refineButton: {
    margin: '-3px 0',
  },
  cardBodyRefine: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  textLeft: {
    textAlign: 'left',
  },
};

export default styles;
