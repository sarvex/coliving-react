import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Button from 'Components/CustomButtons/Button'

import sectionsStyle from 'Assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle'

import imgs from 'Assets/img/assets-for-demo/sections/imgs'

class SectionSections extends React.Component {
  renderContainerFluid(cssClass) {
    return imgs.map((row) => {
      return (
        <GridContainer key={row[0]}>
          {row.map((el, index) => {
            return (
              <GridItem md={3} sm={3} xs={12} key={`${el}_${index}`} className={cssClass}>
                <img src={require(`Assets/img/assets-for-demo/sections/${el}.jpg`)} alt={el} key={el[index]} />
              </GridItem>
            )
          })}
        </GridContainer>
      )
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.sectionSections}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
              <div className={classes.sectionDescription}>
                <h2 className={classes.title}>Ready to Use Sections</h2>
                <h5 className={classes.description}>
                  Build your page section by section! We have created multiple options for you to put together and
                  customise into pixel perfect pages. From headers to footers, you will be able to choose the best
                  combination for your project.
                </h5>
                <Link to='/sections'>
                  <Button color='rose' target='_blank' className={classes.navButton} round>
                    view all sections
                  </Button>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.containerFluid}>{this.renderContainerFluid(classes.photoGallery)}</div>
      </div>
    )
  }
}

export default withStyles(sectionsStyle)(SectionSections)
