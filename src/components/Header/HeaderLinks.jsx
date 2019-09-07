import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Button from 'Components/CustomButtons/Button'

import headerLinksStyle from 'Assets/jss/material-kit-pro-react/components/headerLinksStyle'

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const smoothScroll = (e, target) => {
    if (window.location.pathname === '/sections') {
      const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault()
        const targetScroll = document.getElementById(target)
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
      }
    }
  }
  const scrollGo = (element, to, duration) => {
    const start = element.scrollTop
    const change = to - start
    let currentTime = 0
    const increment = 20

    const animateScroll = function() {
      currentTime += increment
      const val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }
  const onClickSections = {}

  const { classes, dropdownHoverColor } = props
  return (
    <List className={`${classes.list} ${classes.mlAuto}`}>
      <ListItem className={classes.listItem}>
        <Button href='/intelligent' className={classes.navLink} onClick={(e) => e.preventDefault()} color='transparent'>
          Intelligent
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href='/smart' className={classes.navLink} onClick={(e) => e.preventDefault()} color='transparent'>
          Smart
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href='/butler' className={classes.navLink} onClick={(e) => e.preventDefault()} color='transparent'>
          Butler
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href='/contact' className={classes.navLink} onClick={(e) => e.preventDefault()} color='transparent'>
          Contact us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='/signup'
          color={window.innerWidth < 960 ? 'info' : 'white'}
          target='_blank'
          className={classes.navButton}
          round>
          <ShoppingCart className={classes.icons} /> signup
        </Button>
      </ListItem>
    </List>
  )
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary',
}

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf(['dark', 'primary', 'info', 'success', 'warning', 'danger', 'rose']),
}

export default withStyles(headerLinksStyle)(HeaderLinks)
