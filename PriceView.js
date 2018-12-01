import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import firebase from 'react-native-firebase';

import PriceChart from './PriceChart.js'

class PriceView extends React.Component {
	
	
  render() {
	  let params = this.props.navigation.state.params;
    return (
    <View>
      <PriceChart EAN={params.EAN} avatar={params.avatar} name={params.name}/>
	</View>
    )
  }
}

export default withNavigation(PriceView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
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
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
