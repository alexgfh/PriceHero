import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import firebase from 'react-native-firebase';

const database = firebase.database();

const products = [
 {
	EAN: '300450288080',
    name: 'Plasma TV',
    avatar: 'https://images.barcodelookup.com/6000/60002272-1.jpg'
 },
 {
	EAN: '300450288080',
    name: 'One Plus 5',
    avatar: 'https://images.barcodelookup.com/8662/86625814-1.jpg'
 },
 {
	EAN: '300450288080',
    name: 'Nikon L320',
    avatar: 'https://images.barcodelookup.com/219/2194269-1.jpg'
 },
]

class ProductList extends React.Component {

  render() {
    return (
    <View>
	  {
		products.map((l, i) => (
		  <ListItem
			key={i}
			leftAvatar={{ source: { uri: l.avatar }, size:'large' }}
			title={l.name}
			onPress={()=>this.props.navigation.navigate('Price', {EAN: l.EAN, name: l.name, avatar:l.avatar})}
		  />
		))
	  }
	</View>
    );
  }	
}

export default withNavigation(ProductList);

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
