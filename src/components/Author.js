import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/components/Author.styl'
import md5 from 'md5'

class Author extends Component {
  render() {
    return <div styleName='author'>
        <img styleName='author__image' src={this.getGravatar()} />
        <span styleName='author__name'>{this.props.author.name.toString()}</span>
      </div>
  }

  getGravatar() {
    return `http://www.gravatar.com/avatar/${md5(this.props.author.email)}?s=200`
  }
}

export default CSSModules(Author, styles, { allowMultiple: true })
