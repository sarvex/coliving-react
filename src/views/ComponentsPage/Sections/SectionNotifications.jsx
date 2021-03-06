import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Check from '@material-ui/icons/Check'
import Warning from '@material-ui/icons/Warning'
// core components
import SnackbarContent from 'Components/Snackbar/SnackbarContent'
import Clearfix from 'Components/Clearfix/Clearfix'
import notificationsStyles from 'Assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles'

class SectionNotifications extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={`${classes.section} cd-section`} id='notifications'>
        <div className={classes.container}>
          <div className={classes.space70} />
          <div className={classes.title}>
            <h3>Notifications</h3>
          </div>
        </div>
        <SnackbarContent
          message={
            <span>
              <b>INFO ALERT:</b> You've got some friends nearby, stop looking at your phone and find them...
            </span>
          }
          close
          color='info'
          icon='info_outline'
        />
        <SnackbarContent
          message={
            <span>
              <b>SUCCESS ALERT:</b> You've got some friends nearby, stop looking at your phone and find them...
            </span>
          }
          close
          color='success'
          icon={Check}
        />
        <SnackbarContent
          message={
            <span>
              <b>WARNING ALERT:</b> You've got some friends nearby, stop looking at your phone and find them...
            </span>
          }
          close
          color='warning'
          icon={Warning}
        />
        <SnackbarContent
          message={
            <span>
              <b>DANGER ALERT:</b> You've got some friends nearby, stop looking at your phone and find them...
            </span>
          }
          close
          color='danger'
          icon='info_outline'
        />
        <Clearfix />
      </div>
    )
  }
}

export default withStyles(notificationsStyles)(SectionNotifications)
