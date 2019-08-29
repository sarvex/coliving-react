import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Parallax from 'components/Parallax/Parallax';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

import SectionDescription from 'views/PresentationPage/Sections/SectionDescription';
import SectionComponents from 'views/PresentationPage/Sections/SectionComponents';
import SectionCards from 'views/PresentationPage/Sections/SectionCards';
import SectionContent from 'views/PresentationPage/Sections/SectionContent';
import SectionSections from 'views/PresentationPage/Sections/SectionSections';
import SectionExamples from 'views/PresentationPage/Sections/SectionExamples';
import SectionFreeDemo from 'views/PresentationPage/Sections/SectionFreeDemo';
import SectionOverview from 'views/PresentationPage/Sections/SectionOverview';
import SectionPricing from 'views/PresentationPage/Sections/SectionPricing';

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle';

import background from 'assets/img/bg4.jpg';
import Header from './sections/Header';

const Intelligent = (props) => {
  const { classes } = props;
  return (
    <div>
      <Header />
      <Parallax image={background} className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Material Kit React
                  <span className={classes.proBadge}>PRO</span>
                </h1>
                <h3 className={classes.title}>A Badass Material-UI Kit based on Material Design.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />
      <Footer
        theme='white'
        content={
          <div>
            <div className={classes.left}>
              <a href='https://www.creative-tim.com/product/material-kit-pro-react' className={classes.footerBrand}>
                Material Kit PRO React
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href='https://www.creative-tim.com/' className={classes.block}>
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='https://www.creative-tim.com/presentation' className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='//blog.creative-tim.com/' className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='https://www.creative-tim.com/license' className={classes.block}>
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button href='https://twitter.com/CreativeTim' color='twitter' justIcon simple>
                    <i className='fab fa-twitter' />
                  </Button>
                </li>
                <li>
                  <Button href='https://dribbble.com/creativetim' color='dribbble' justIcon simple>
                    <i className='fab fa-dribbble' />
                  </Button>
                </li>
                <li>
                  <Button href='https://instagram.com/CreativeTimOfficial' color='instagram' justIcon simple>
                    <i className='fab fa-instagram' />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default withStyles(presentationStyle)(Intelligent);
