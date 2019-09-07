import React from 'react'
import classNames from 'classnames'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import NavPills from 'Components/NavPills/NavPills'
import Button from 'Components/CustomButtons/Button'
import Card from 'Components/Card/Card'
import CardBody from 'Components/Card/CardBody'
import withStyles from '@material-ui/core/styles/withStyles'

import pricingStyle from 'Assets/jss/material-kit-pro-react/views/presentationSections/pricingStyle'

const style = {
  ...pricingStyle,
  // ...navPillsContentStyle
}

class SectionPricing extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={8} sm={10} className={classNames(classes.mlAuto, classes.mrAuto)}>
              <h2 className={classes.title}>Ready to grab Material Kit PRO React?</h2>
              <NavPills
                alignCenter
                color='rose'
                tabs={[
                  {
                    tabButton: 'Personal License',
                    tabContent: (
                      <div className={classes.navPillsContent}>
                        <p className={classes.description}>
                          Good for personal websites, school projects, startups or any other project where your users
                          will not be charged for using it. Create one single website/app for one client.
                        </p>
                        <GridContainer justify='center'>
                          <GridItem md={6} sm={6}>
                            <Card className={classNames(classes.card, classes.cardMargin)}>
                              <CardBody className={classes.cardBody}>
                                <h6 className={classes.cardCategory}>HTML Package</h6>
                                <h1 className={classes.cardTitle}>
                                  <small>$</small>
                                  89
                                </h1>
                                <ul>
                                  <li>
                                    <b>HTML/CSS/JS/SASS</b> Files
                                  </li>
                                  <li>
                                    <b>Fully Coded</b> Components
                                  </li>
                                  <li>
                                    <b>Responsive</b> Design
                                  </li>
                                  <li>
                                    Product <b>Documentation</b>
                                  </li>
                                </ul>
                                <Button href='#pablo' round color='rose'>
                                  buy now!
                                </Button>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem md={6} sm={6}>
                            <Card className={classes.card}>
                              <CardBody className={classes.cardBody}>
                                <h6 className={classes.cardCategory}>HTML & Photoshop Package</h6>
                                <h1 className={classes.cardTitle}>
                                  <small>$</small>
                                  156.50
                                </h1>
                                <ul>
                                  <li>
                                    <b>HTML/CSS/JS/SASS</b> Files
                                  </li>
                                  <li>
                                    <b>Fully Coded</b> Components
                                  </li>
                                  <li>
                                    <b>Responsive</b> Design
                                  </li>
                                  <li>
                                    Product <b>Documentation</b>
                                  </li>
                                  <li>
                                    <b>+ Photoshop</b> Files
                                  </li>
                                  <li>
                                    <b>+ Components</b> on Layers
                                  </li>
                                </ul>
                                <Button href='#pablo' round color='rose'>
                                  Buy now!
                                </Button>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    ),
                  },
                  {
                    tabButton: 'Developer License',
                    tabContent: (
                      <div className={classes.navPillsContent}>
                        <p className={classes.description}>
                          Good for business projects, multiple websites for clients or for creating themes where your
                          users will be charged for using it. Create multiple websites/apps for multiple clients.
                        </p>
                        <GridContainer justify='center'>
                          <GridItem md={6} sm={6}>
                            <Card className={classNames(classes.card, classes.cardMargin)}>
                              <CardBody className={classes.cardBody}>
                                <h6 className={classes.cardCategory}>HTML Package</h6>
                                <h1 className={classes.cardTitle}>
                                  <small>$</small>
                                  359
                                </h1>
                                <ul>
                                  <li>
                                    <b>HTML/CSS/JS/SASS</b> Files
                                  </li>
                                  <li>
                                    <b>Fully Coded</b> Components
                                  </li>
                                  <li>
                                    <b>Responsive</b> Design
                                  </li>
                                  <li>
                                    Product <b>Documentation</b>
                                  </li>
                                </ul>
                                <Button href='#pablo' round color='rose'>
                                  buy now!
                                </Button>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem md={6} sm={6}>
                            <Card className={classes.card}>
                              <CardBody className={classes.cardBody}>
                                <h6 className={classes.cardCategory}>HTML & Photoshop Package</h6>
                                <h1 className={classes.cardTitle}>
                                  <small>$</small>
                                  674
                                </h1>
                                <ul>
                                  <li>
                                    <b>HTML/CSS/JS/SASS</b> Files
                                  </li>
                                  <li>
                                    <b>Fully Coded</b> Components
                                  </li>
                                  <li>
                                    <b>Responsive</b> Design
                                  </li>
                                  <li>
                                    Product <b>Documentation</b>
                                  </li>
                                  <li>
                                    <b>+ Photoshop</b> Files
                                  </li>
                                  <li>
                                    <b>+ Components</b> on Layers
                                  </li>
                                </ul>
                                <Button href='#pablo' round color='rose'>
                                  Buy now!
                                </Button>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem md={8} sm={10} className={classNames(classes.mlAuto, classes.mrAuto)}>
              <p className={classes.description}>
                You have <b>Free Unlimited Updates</b> and <b>Premium Support</b> on each package. You also have
                <b> 30 days</b> to request a refund if you're not happy with your purchase.
              </p>
            </GridItem>
            <div className={classes.socialLine}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem md={12}>
                    <h4 className={classes.title}>Thank you for sharing!</h4>
                    <Button color='twitter' href='#pablo' round>
                      <i className={`fab fa-twitter ${classes.marginRight}`} />
                      Twitter
                    </Button>
                    <Button color='facebook' href='#pablo' round>
                      <i className={`fab fa-facebook ${classes.marginRight}`} />
                      Facebook
                    </Button>
                    <Button color='google' href='#pablo' round>
                      <i className={`fab fa-google ${classes.marginRight}`} />
                      Google
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(style)(SectionPricing)
