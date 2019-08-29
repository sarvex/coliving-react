import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import Button from 'components/CustomButtons/Button';

import freeDemoStyle from 'assets/jss/material-kit-pro-react/views/presentationSections/freeDemoStyle';

class SectionFreeDemo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={5} sm={8} className={`${classes.mlAuto} ${classes.mrAuto}`}>
              <div className={classes.iconGithub}>
                <div className='fab fa-github' />
              </div>
              <div>
                <h2 className={classes.title}>Free Demo</h2>
                <h5 className={classes.description}>
                  Do you want to test and see the benefits of this kit before purchasing it? You can give the demo
                  version a try. It features enough basic components for you to get a feel of the design and also test
                  the quality of the code. Get it free on GitHub!
                </h5>
              </div>
              <Button href='https://demos.creative-tim.com/material-kit-react/#/' color='rose' target='_blank' round>
                View demo on github
              </Button>
            </GridItem>
            <GridItem md={6} sm={12} className={classes.mlAuto}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <Card className={classNames(classes.card, classes.cardPricing)}>
                    <CardBody>
                      <h3 className={classes.cardTitle}>Free Demo</h3>
                      <ul>
                        <li>
                          <b>60</b> Components
                        </li>
                        <li>
                          <b>3</b> Example Pages
                        </li>
                        <li>
                          <Close className={classNames(classes.cardIcons, classes.dangerColor)} /> Unconventional Cards
                        </li>
                        <li>
                          <Close className={classNames(classes.cardIcons, classes.dangerColor)} /> Sections
                        </li>
                        <li>
                          <Close className={classNames(classes.cardIcons, classes.dangerColor)} /> Photoshop for
                          Prototype
                        </li>
                        <li>
                          <Close className={classNames(classes.cardIcons, classes.dangerColor)} /> Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem md={6} sm={6}>
                  <Card className={classNames(classes.card, classes.cardPricing)}>
                    <CardBody>
                      <h3 className={classes.cardTitle}>PRO Version</h3>
                      <ul>
                        <li>
                          <b>1000+</b> Components
                        </li>
                        <li>
                          <b>12</b> Example Pages
                        </li>
                        <li>
                          <Check className={classNames(classes.cardIcons, classes.successColor)} /> Unconventional Cards
                        </li>
                        <li>
                          <Check className={classNames(classes.cardIcons, classes.successColor)} /> Sections
                        </li>
                        <li>
                          <Check className={classNames(classes.cardIcons, classes.successColor)} /> Photoshop for
                          Prototype
                        </li>
                        <li>
                          <Check className={classNames(classes.cardIcons, classes.successColor)} /> Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(freeDemoStyle)(SectionFreeDemo);
