import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/components/Grid.styl'
import GridBlock from './GridBlock'

class Grid extends Component {
  render() {

    let styleName = 'grid'
    if (this.props.isNext) styleName += ' grid--next-animation'
    if (this.props.isPrevious) styleName += ' grid--previous-animation'

    let blocks = this.props.blocks.map(function(block, index) {
      return <GridBlock
        key={index}
        size={block.size}
        text={block.text}
        backgroundColor={block.color}
        backgroundImage={block.image}
        spacer={block.spacer} />
    })

    return <div styleName={styleName} style={this.props.style}>
      {blocks}
    </div>
  }
}

export default CSSModules(Grid, styles, { allowMultiple: true })
