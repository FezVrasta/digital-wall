import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from '../styles/components/Thumb.styl';

class Thumb extends Component {
  render() {
    let css = {
      backgroundImage: `url(${this.props.image})`
    }
    return <div styleName='thumb' style={css} />
  }
}

export default CSSModules(Thumb, styles, { allowMultiple: true })
