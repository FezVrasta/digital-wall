import React, { Component } from 'react'

import Navbar from './Navbar'
import Author from './Author'

import CSSModules from 'react-css-modules'
import styles from '../styles/components/BigItem.styl'

class BigItem extends Component {
  render() {

    let translate
    if (this.props.transitionTo) {
      translate = this.props.transitionTo.key < this.props.item.key ? 100 : -100
    } else {
      translate = 0
    }
    let css = {
      transform: `translateY(${translate}%)`
    }
    if (translate === 0) {
      css.transitionDuration = '0s'
    }

    let itemCss = {
      backgroundImage: `url(${require(`../images/${this.props.item.images}/main.jpg`)})`
    }

    let nextCss = {}
    if (this.props.transitionTo) {
      nextCss.backgroundImage = `url(${require(`../images/${this.props.transitionTo.images}/main.jpg`)})`
    }

    return <div style={css} styleName='big-item-wrapper'>

      <div styleName='big-item big-item__previous'>
        <div styleName='big-item__main' style={nextCss}>
          <Navbar />
          <Author author={this.getPreviousItem(this.props.item.key).author} />
        </div>
      </div>

      <div styleName='big-item'>
        <div styleName='big-item__main' style={itemCss}>
          <Navbar
            nextItem={this.getNextItem(this.props.item.key)}
            previousItem={this.getPreviousItem(this.props.item.key)}/>
          <Author author={this.props.item.author} />
        </div>
      </div>

      <div styleName='big-item big-item__next'>
        <div styleName='big-item__main' style={nextCss}>
            <Navbar />
            <Author author={this.getNextItem(this.props.item.key).author} />
        </div>
      </div>

    </div>
  }

  getPreviousItem(key) {
    return this.props.items[key - 1] || this.props.items[this.props.items.length - 1]
  }
  getNextItem(key) {
    return this.props.items[key + 1] || this.props.items[0]
  }
}

export default CSSModules(BigItem, styles, { allowMultiple: true })
