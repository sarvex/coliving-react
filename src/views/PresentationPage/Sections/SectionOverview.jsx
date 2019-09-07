import React from 'react'
import classNames from 'classnames'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import InfoArea from 'Components/InfoArea/InfoArea'
import Card from 'Components/Card/Card'
import CardHeader from 'Components/Card/CardHeader'
import CardBody from 'Components/Card/CardBody'
import Grid from '@material-ui/icons/GridOn'
import PhoneLink from '@material-ui/icons/Phonelink'
import AccessTime from '@material-ui/icons/AccessTime'
import AttachMoney from '@material-ui/icons/AttachMoney'
import withStyles from '@material-ui/core/styles/withStyles'

import Vodafone from 'Assets/img/assets-for-demo/ourClients/vodafone.jpg'
import Microsoft from 'Assets/img/assets-for-demo/ourClients/microsoft.jpg'
import Harvard from 'Assets/img/assets-for-demo/ourClients/harvard.jpg'
import Standford from 'Assets/img/assets-for-demo/ourClients/stanford.jpg'
import profilePic1 from 'Assets/img/assets-for-demo/test1.jpg'
import profilePic2 from 'Assets/img/assets-for-demo/test2.jpg'
import profilePic3 from 'Assets/img/assets-for-demo/test3.jpg'

import overviewStyle from 'Assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle'

class SectionOverview extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div
          className={classes.features5}
          style={{
            backgroundImage: `url(${require('Assets/img/assets-for-demo/features-5.jpg')})`,
          }}>
          <GridItem md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
            <h2 className={classes.title}>Your work will get much easier</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title='Material UI Grid'
                  description={
                    <p>
                      Enjoy the fluid grid system based on 12 columns. Material Kit PRO is built over Bootstrap and has
                      all the benefits that the framework comes with.
                    </p>
                  }
                  icon={Grid}
                  iconColor='gray'
                  vertical
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title='Fully Responsive'
                  description={
                    <p>
                      This Material UI kit is built mobile-first and looks amazing on any device. Regardless of the
                      screen size, the website content will naturally fit the given resolution.
                    </p>
                  }
                  icon={PhoneLink}
                  iconColor='gray'
                  vertical
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title='Save Time'
                  description={
                    <p>
                      Using the Material Kit PRO will save you large amount of time. You don't have to worry about
                      customising the basic Bootstrap design or generating new components.
                    </p>
                  }
                  icon={AccessTime}
                  iconColor='gray'
                  vertical
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title='Save Money'
                  description={
                    <p>
                      Creating your design from scratch with dedicated designers can be very expensive. Using a kit is
                      the best option to start your development while bootstrapping your budget.
                    </p>
                  }
                  icon={AttachMoney}
                  iconColor='gray'
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className={classes.sectionTestimonials}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
                <h2 className={classes.title}>Trusted by 330.000+ People</h2>
                <h5 className={classes.description}>
                  The UI Kits, Templates and Dashboards that we've created are used by
                  <b> 330,000+ web developers</b> in over <b> 576.000 Web Projects</b>. This is what some of them think:
                </h5>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href='#pablo'>
                          <img src={profilePic1} alt='...' />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${profilePic1})`,
                            opacity: '1',
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${profilePic1})`,
                            opacity: '1',
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>Khaldi Yass</h4>
                        <p className={classes.cardDescription}>
                          "As soon as I saw this kit, everything else isn't the same anymore, I just can't describe it
                          guys! Thank you for this work!"
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href='#pablo'>
                          <img src={profilePic2} alt='...' />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${profilePic2})`,
                            opacity: '1',
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${profilePic2})`,
                            opacity: '1',
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>Josh Murray</h4>
                        <p className={classes.cardDescription}>
                          "Great kit! Used this for a client already and he is over the moon. Keep up the good work
                          Creative Tim! 10/10 for design, colours, and the feel of the kit."
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href='#pablo'>
                          <img src={profilePic3} alt='...' />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${profilePic3})`,
                            opacity: '1',
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${profilePic3})`,
                            opacity: '1',
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>Michael Onubogu</h4>
                        <p className={classes.cardDescription}>
                          "Damn Daniel!!! This Material UI Kit is fresh AF! Amazing work!"
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
            </GridContainer>
            <div className={classes.ourClients}>
              <GridContainer justify='center'>
                <GridItem md={3} sm={3}>
                  <img src={Vodafone} alt='vodafone' />
                </GridItem>
                <GridItem md={3} sm={3}>
                  <img src={Microsoft} alt='microsoft' />
                </GridItem>
                <GridItem md={3} sm={3}>
                  <img src={Harvard} alt='harvard' />
                </GridItem>
                <GridItem md={3} sm={3}>
                  <img src={Standford} alt='stanford' />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(overviewStyle)(SectionOverview)
