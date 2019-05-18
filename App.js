import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Navigation from './src/navigation'
import { Block } from './src/components'

// const images = [
//   require('./src/assets/icons/back.png'),
//   require('./src/assets/icons/plants.png'),
//   require('./src/assets/icons/seeds.png'),
//   require('./src/assets/icons/flowers.png'),
//   require('./src/assets/icons/sprayers.png'),
//   require('./src/assets/icons/pots.png'),
//   require('./src/assets/icons/fertilizers.png'),
//   require('./src/assets/images/plants_1.png'),
//   require('./src/assets/images/plants_2.png'),
//   require('./src/assets/images/plants_3.png'),
//   require('./src/assets/images/explore_1.png'),
//   require('./src/assets/images/explore_2.png'),
//   require('./src/assets/images/explore_3.png'),
//   require('./src/assets/images/explore_4.png'),
//   require('./src/assets/images/explore_5.png'),
//   require('./src/assets/images/explore_6.png'),
//   require('./src/assets/images/illustration_1.png'),
//   require('./src/assets/images/illustration_2.png'),
//   require('./src/assets/images/illustration_3.png'),
//   require('./src/assets/images/avatar.png'),
// ]

export default class App extends Component{
  render() {
    return (
      <Block>
          <Navigation />
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
