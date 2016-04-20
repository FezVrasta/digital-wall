import React, { Component } from 'react'
import styles from './styles/components/App.styl'
import CSSModules from 'react-css-modules'

import {Actions} from './actions/Actions'
import BigItem from './components/BigItem'
import SideMenu from './components/SideMenu'
import Header from './components/Header'

let items = [
  {
    key: 0,
    title: 'San Francisco',
    images: 'sf',
    author: {
      name: 'Fez Vrasta',
      email: 'federico.zivolo@gmail.com'
    },
    blocks: [
      { size: 1, color: '#94A9BA', text: '20 °C' },
      { size: 2, image: '1.jpg' },
      { size: 1, image: '2.jpg' },
      { size: 1, spacer: true },
      { size: 1, image: '1.jpg' },
      { size: 1, spacer: true },
      { size: 1, color: '#94A9BA' },
      { size: 1, color: '#94A9BA' },
      { size: 1, spacer: true },
      { size: 1, color: '#94A9BA' }
    ]
  },
  {
    key: 1,
    title: 'New York',
    images: 'ny',
    author: {
      name: 'Fez Vrasta',
      email: 'federico.zivolo@gmail.com'
    },
    blocks: [
      { size: 1, color: '#84737F', text: '10 °C' },
      { size: 2, image: '1.jpg' },
      { size: 1, image: '2.jpg' },
      { size: 1, spacer: true },
      { size: 1, image: '1.jpg' },
      { size: 1, spacer: true },
      { size: 1, color: '#84737F' },
      { size: 1, color: '#84737F' },
      { size: 1, spacer: true },
      { size: 1, color: '#84737F' }
    ]
  },
  {
    key: 2,
    title: 'Rome',
    images: 'rome',
    author: {
      name: 'Fez Vrasta',
      email: 'federico.zivolo@gmail.com'
    },
    blocks: [
      { size: 1, color: '#74C9CE', text: '22 °C' },
      { size: 2, image: '1.jpg' },
      { size: 1, image: '2.jpg' },
      { size: 1, spacer: true },
      { size: 1, image: '1.jpg' },
      { size: 1, spacer: true },
      { size: 1, color: '#74C9CE' },
      { size: 1, color: '#74C9CE' },
      { size: 1, spacer: true },
      { size: 1, color: '#74C9CE' }
    ]
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: items[0]
    };
  }
  render() {
    return <div styleName='app'>
      <Header />
      <div styleName='app__content'>
        <SideMenu items={items} selected={this.state.transitionTo || this.state.selected} />
        <BigItem
          item={this.state.selected}
          items={items}
          transitionTo={this.state.transitionTo}/>
        </div>
    </div>
  }
  componentDidMount() {
    Actions.changeSelection.listen(function(item) {
      if (this.state.selected.key === item.key) return
      if (this.state.transitionTo === 0) return

      this.setState({transitionTo: item})
      window.setTimeout(function() {
        this.setState({selected: item, transitionTo: null})
      }.bind(this), 1500)
    }.bind(this))
  }

}

export default CSSModules(App, styles, {allowMultiple: true})
