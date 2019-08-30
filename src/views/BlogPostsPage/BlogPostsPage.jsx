import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Parallax from 'components/Parallax/Parallax';
// sections for this page
import blogPostsPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostsPageStyle';
import background from 'assets/img/bg10.jpg';
import SectionPills from './Sections/SectionPills';
import SectionInterested from './Sections/SectionInterested';
import SectionImage from './Sections/SectionImage';
import SubscribeLine from './Sections/SubscribeLine';

class BlogPostsPage extends React.Component {
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
        <Parallax image={background} filter='dark' small>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title}>A Place for Entrepreneurs to Share and Discover New Stories</h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionPills />
            <SectionInterested />
          </div>
          <SectionImage />
          <SubscribeLine />
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

export default withStyles(blogPostsPageStyle)(BlogPostsPage);
