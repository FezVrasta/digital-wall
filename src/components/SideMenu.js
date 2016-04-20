import React, { Component } from 'react'

import SideMenuItem from './SideMenuItem'

import CSSModules from 'react-css-modules';
import styles from '../styles/components/SideMenu.styl';

class SideMenu extends Component {
  render() {
    var items = this.props.items.map(function(item, index) {
      return <SideMenuItem
        item={item}
        key={item.key}
        title={item.title}
        selected={this.props.selected}/>
    }.bind(this))
    return <ul styleName='side-menu'>{items}</ul>
  }
}

export default CSSModules(SideMenu, styles, { allowMultiple: true })
