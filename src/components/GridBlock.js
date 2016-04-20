import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/components/Grid.styl'

class GridBlock extends Component {
  render() {
    let styleName = `grid__block grid__block--${this.props.size}`
    if (this.props.spacer) styleName += ' grid__block--spacer'

    let css = {}
    if (this.props.backgroundImage) css.backgroundImage = `url(${require(`../images/blocks/${this.props.backgroundImage}`)})`
    if (this.props.backgroundColor) css.backgroundColor = this.props.backgroundColor

    return <div styleName={styleName}>
        <div styleName='grid__block-content' style={css}>{this.props.text}</div>
      </div>
  }
}

export default CSSModules(GridBlock, styles, { allowMultiple: true })
