import React, { Component } from 'react'
import {Actions} from '../actions/Actions';
import CSSModules from 'react-css-modules';
import styles from '../styles/components/Navbar.styl';

class Navbar extends Component {
  render() {
    return <ul styleName='navbar'>
      <li styleName='navbar__button' className='material-icons' onClick={Actions.changeSelection.bind(null, this.props.previousItem)}>chevron_left</li>
      <li styleName='navbar__button' className='material-icons' onClick={Actions.changeSelection.bind(null, this.props.nextItem)}>chevron_right</li>
    </ul>
  }
}

export default CSSModules(Navbar, styles, { allowMultiple: true })
