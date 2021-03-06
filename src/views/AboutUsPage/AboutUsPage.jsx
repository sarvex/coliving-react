import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Favorite from '@material-ui/icons/Favorite'
import Header from 'Components/Header/Header'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Parallax from 'Components/Parallax/Parallax'
import Footer from 'Components/Footer/Footer'
import HeaderLinks from 'Components/Header/HeaderLinks'

import aboutUsStyle from 'Assets/jss/material-kit-pro-react/views/aboutUsStyle'
import background from 'Assets/img/bg9.jpg'
import SectionDescription from './Sections/SectionDescription'
import SectionTeam from './Sections/SectionTeam'
import SectionServices from './Sections/SectionServices'
import SectionOffice from './Sections/SectionOffice'
import SectionContact from './Sections/SectionContact'

const AboutUsPage = (props) => {
  const { classes } = props
  return (
    <div>
      <Header
        brand='Material Kit PRO React'
        links={<HeaderLinks dropdownHoverColor='info' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: 'info',
        }}
      />
      <Parallax image={background} filter='dark' small>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h1 className={classes.title}>About Us</h1>
              <h4>Meet the amazing team behind this project and find out more about how we work.</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          <SectionServices />
          <SectionOffice />
          <SectionContact />
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
  )
}

export default withStyles(aboutUsStyle)(AboutUsPage)
