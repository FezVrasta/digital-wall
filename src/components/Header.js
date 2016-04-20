import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/components/Header.styl'

class Header extends Component {
  render() {
    return <div styleName='header' />
  }
}

export default CSSModules(Header, styles, { allowMultiple: true })
