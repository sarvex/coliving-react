import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// core components
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
// sections for this page
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

class PresentationPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand='Material Kit PRO React'
          links={<HeaderLinks dropdownHoverColor='info' />}
          fixed
          color='transparent'
          changeColorOnScroll={{
            height: 400,
            color: 'info',
          }}
        />
        <Parallax image={require('assets/img/bg4.jpg')} className={classes.parallax}>
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
  }
}

export default withStyles(presentationStyle)(PresentationPage);
