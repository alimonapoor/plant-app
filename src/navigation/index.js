import React from 'react'
import { Image } from 'react-native'
import { createAppContainer , createStackNavigator } from 'react-navigation'

import Welcome from '../screens/welcome'
import Login from './../screens/login'
import SignUp from './../screens/signup'
import Forgot from './../screens/forgot'
import Browse from './../screens/browse'
import Explore from './../screens/explore'
import Product from './../screens/product'
import Settings from './../screens/settings'

import { theme } from './../constants'

const screens = createStackNavigator({
  Welcome,
  Login ,
  SignUp,
  Forgot,
  Browse,
  Explore,
  Product,
  Settings
},{
  defaultNavigationOptions : {
    headerStyle : {
      height: theme.sizes.base * 4,
      backgroundColor: theme.colors.white, // or 'white
      borderBottomColor: "transparent",
      elevation: 0,
    },
    headerBackImage : <Image source={require('./../assets/icons/back.png')}/>,
    headerBackTitle : null,
    headerLeftContainerStyle : {
      alignItems : 'center',
      marginLeft : theme.sizes.base * 2,
      paddingRight : theme.sizes.base
    },
    headerRightContainerStyle : {
      alignItems : 'center',
      paddingRight : theme.sizes.base
    }
  }
})


export default createAppContainer(screens)