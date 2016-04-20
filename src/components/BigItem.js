import React, { Component } from 'react'

import Navbar from './Navbar'
import Author from './Author'
import Grid from './Grid'

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
    let gridCss = {
      transform: `translateY(${(translate * -1) / 1.8}%)`
    }
    if (translate === 0) {
      css.transitionDuration = '0s'
      gridCss.transitionDuration = '0s'
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
          <div styleName='big-item__text'>
            {this.getPreviousItem(this.props.item.key).title}
          </div>
        </div>
        <Grid isPrevious={!!this.props.transitionTo} blocks={this.getPreviousItem(this.props.item.key).blocks} />
      </div>

      <div styleName='big-item'>
        <div styleName='big-item__main' style={itemCss}>
          <Navbar
            nextItem={this.getNextItem(this.props.item.key)}
            previousItem={this.getPreviousItem(this.props.item.key)}/>
          <Author author={this.props.item.author} />
          <div styleName='big-item__text'>
            {this.props.item.title}
          </div>
        </div>
        <Grid style={gridCss} blocks={this.props.item.blocks} />
      </div>

      <div styleName='big-item big-item__next'>
        <div styleName='big-item__main' style={nextCss}>
            <Navbar />
            <Author author={this.getNextItem(this.props.item.key).author} />
            <div styleName='big-item__text'>
              {this.getNextItem(this.props.item.key).title}
            </div>
        </div>
        <Grid isNext={!!this.props.transitionTo} blocks={this.getNextItem(this.props.item.key).blocks} />
      </div>

    </div>
  }

  getPreviousItem(key) {
    return this.props.transitionTo || this.props.items[key - 1] || this.props.items[this.props.items.length - 1]
  }
  getNextItem(key) {
    return this.props.transitionTo || this.props.items[key + 1] || this.props.items[0]
  }
}

export default CSSModules(BigItem, styles, { allowMultiple: true })
