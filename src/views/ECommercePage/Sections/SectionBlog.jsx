import React from 'react'
import classNames from 'classnames'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Card from 'Components/Card/Card'
import CardHeader from 'Components/Card/CardHeader'
import CardBody from 'Components/Card/CardBody'
import withStyles from '@material-ui/core/styles/withStyles'

import dg6 from 'Assets/img/dg6.jpg'
import dg10 from 'Assets/img/dg10.jpg'
import dg9 from 'Assets/img/dg9.jpg'

import styles from 'Assets/jss/material-kit-pro-react/views/ecommerceSections/blogStyle'

const SectionBlog = (props) => {
  const { classes } = props
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.sectionTitle}>Latest Articles</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href='#pablo'>
                  <img src={dg6} alt='...' />
                </a>
                <div className={classes.coloredShadow} style={{ backgroundImage: `url(${dg6})`, opacity: 1 }} />
              </CardHeader>
              <CardBody>
                <h6 className={classNames(classes.cardCategory, classes.textRose)}>Trends</h6>
                <h4 className={classes.cardTitle}>
                  <a href='#pablo'>Learn how to wear your scarf with a floral print shirt</a>
                </h4>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you
                  like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href='#pablo'>
                  <img src={dg10} alt='...' />
                </a>
                <div className={classes.coloredShadow} style={{ backgroundImage: `url(${dg10})`, opacity: 1 }} />
              </CardHeader>
              <CardBody>
                <h6 className={classNames(classes.cardCategory, classes.textRose)}>Fashion Week</h6>
                <h4 className={classes.cardTitle}>
                  <a href='#pablo'>Katy Perry was wearing a Dolce & Gabanna arc dress</a>
                </h4>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you
                  like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href='#pablo'>
                  <img src={dg9} alt='...' />
                </a>
                <div className={classes.coloredShadow} style={{ backgroundImage: `url(${dg9})`, opacity: 1 }} />
              </CardHeader>
              <CardBody>
                <h6 className={classNames(classes.cardCategory, classes.textRose)}>Fashion Week</h6>
                <h4 className={classes.cardTitle}>
                  <a href='#pablo'>Check the latest fashion events and which are the trends</a>
                </h4>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you
                  like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(styles)(SectionBlog)
