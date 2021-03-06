import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Card from 'Components/Card/Card'
import CardBody from 'Components/Card/CardBody'
import CardHeader from 'Components/Card/CardHeader'
import customTabsStyle from 'Assets/jss/material-kit-pro-react/components/customTabsStyle'

class CustomTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, headerColor, title, tabs, rtlActive, plainTabs } = this.props
    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive,
    })
    const tabsContainer = classNames({
      [classes.tabsContainer]: true,
      [classes.tabsContainerRTL]: rtlActive,
    })
    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? <div className={cardTitle}>title</div> : null}
          <Tabs
            classes={{
              root: classes.customTabsRoot,
              flexContainer: tabsContainer,
              indicator: classes.displayNone,
            }}
            value={this.state.value}
            onChange={this.handleChange}
            textColor='inherit'>
            {tabs.map((prop, key) => {
              let icon = {}
              if (prop.tabIcon !== undefined) {
                icon = {
                  icon: <prop.tabIcon className={classes.tabIcon} />,
                }
              } else {
                icon = {}
              }
              return (
                <Tab
                  key={key}
                  classes={{
                    root: classes.customTabRoot,
                    selected: classes.customTabSelected,
                    labelContainer: classes.customTabLabelContainer,
                    wrapper: classes.customTabWrapper,
                    label: classes.customTabLabel,
                    // wrapper: tabWrapper,
                    // labelIcon: labelIcon,
                    // label: classes.label,
                    // textColorInherit: labelIcon,
                    // // textColorInheritSelected: classes.textColorInheritSelected + " " + labelIcon,
                    // selected: classes.textColorInheritSelected + " " + labelIcon,
                    // labelContainer: labelContainer
                  }}
                  // icon={<prop.tabIcon className={tabIcon} />}
                  {...icon}
                  label={prop.tabName}
                />
              )
            })}
          </Tabs>
        </CardHeader>
        {/* <CardHeader
          classes={{
            root: cardHeader,
            title: cardTitle,
            content: classes.cardHeaderContent,
            action: classes.cardHeaderAction
          }}
          title={title}
          action={

          }
        /> */}
        <CardBody>
          {tabs.map((prop, key) => {
            if (key === this.state.value) {
              return <div key={key}>{prop.tabContent}</div>
            }
            return null
          })}
        </CardBody>
      </Card>
    )
  }
}

CustomTabs.defaultProps = {
  headerColor: 'purple',
}

CustomTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf(['warning', 'success', 'danger', 'info', 'primary', 'rose']),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
}

export default withStyles(customTabsStyle)(CustomTabs)
