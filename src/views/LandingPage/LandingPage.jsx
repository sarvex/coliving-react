import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';

import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle';

// Sections for this page
import SectionProduct from './Sections/SectionProduct';
import SectionTeam from './Sections/SectionTeam';
import SectionWork from './Sections/SectionWork';

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color='transparent'
          brand='Material Kit PRO React'
          links={<HeaderLinks dropdownHoverColor='info' />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: 'info',
          }}
          {...rest}
        />
        <Parallax image={require('assets/img/bg8.jpg')} filter='dark'>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big bold title, that's why we added this text
                  here. Add here all the information that can make you or your product create the first impression.
                </h4>
                <br />
                <Button
                  color='danger'
                  size='lg'
                  href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fas fa-play' />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct />
            <SectionTeam />
            <SectionWork />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
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
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} /> by{' '}
                <a href='https://www.creative-tim.com'>Creative Tim</a> for a better web.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
