import React from 'react'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import withStyles from '@material-ui/core/styles/withStyles'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import contentStyle from 'Assets/jss/material-kit-pro-react/views/presentationSections/contentStyle'
import presentationiPad from 'Assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg'
import presentationiPadComments from 'Assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg'
import presentationiPadTable from 'Assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg'

class SectionContent extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={4}>
              <div className={classes.sectionDescription}>
                <h3 className={classes.title}>Content Areas</h3>
                <h6 className={classes.description}>For Areas that Need More Space</h6>
                <h5 className={classes.description}>
                  If you need elements such as tables, comments, description areas, tabs and many others, we've got you
                  covered. We took into consideration multiple use cases and came up with some specific elements that
                  you will love to use. They're beautiful and easy to use for the end user navigating your website.{' '}
                </h5>
              </div>
            </GridItem>
            <GridItem md={7} className={classes.mlAuto}>
              <div className={classes.imageContainer}>
                <div className={classes.animeAreaImg}>
                  <ScrollAnimation animateIn='fadeInUp'>
                    <img src={presentationiPadComments} alt='iPad comments' className={classes.areaImg} />
                  </ScrollAnimation>
                </div>
                <div className={classes.animeInfoImg}>
                  <ScrollAnimation animateIn='fadeInUp'>
                    <img src={presentationiPadTable} alt='iPad table' className={classes.infoImg} />
                  </ScrollAnimation>
                </div>
                <img className={classes.ipadImg} src={presentationiPad} alt='iPad' />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(contentStyle)(SectionContent)
