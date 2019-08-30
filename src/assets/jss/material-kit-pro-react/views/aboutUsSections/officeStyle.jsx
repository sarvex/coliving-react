import { title, description, mrAuto, mlAuto } from '../../../material-kit-pro-react';
import imagesStyles from '../../imagesStyles';

const { imgRaised } = imagesStyles;
const rounded = imagesStyles.imgRounded;
const { imgFluid } = imagesStyles;

const servicesStyle = {
  title,
  description,
  mrAuto,
  mlAuto,
  textCenter: {
    textAlign: 'center!important',
  },
  office: {
    '& img': {
      margin: '20px 0px',
    },
  },
  imgRaised,
  rounded,
  imgFluid,
};

export default servicesStyle;
