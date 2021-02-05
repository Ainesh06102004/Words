
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Translatescreen from './screens/translatescreen'
import Welcomescreen from './screens/welcomescreen';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      component: <Welcomescreen />
    }
  }
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.setState({ component: <Translatescreen /> })
    }, 3000);
  }
  componentWillUnmount(){
    clearTimeout(this.timeoutHandle); 
  }

  render() {
    return (this.state.component);
    }
}

