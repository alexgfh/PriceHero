import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import firebase from 'react-native-firebase';


    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});


import ProductList from './ProductList.js';



import PriceView from './PriceView.js';



import SaleInfo from './SaleInfo.js';


const StackNavigator = createStackNavigator({
  Products: { 
	  screen: ProductList,
	  
	  navigationOptions: ({ navigation }) => ({
		title: 'Product List',
		headerStyle: {
			backgroundColor: '#11aa11',
		},
		headerTintColor: '#ffffff'
	  })
   },
  Price: { screen: PriceView,
	  
	  navigationOptions: ({ navigation }) => ({
		title: `${navigation.state.params.name}`,
		headerStyle: {
			backgroundColor: '#11aa11',
		},
		headerTintColor: '#ffffff'
	  }) },
	  
  SaleInfo: { screen: SaleInfo,
	  navigationOptions: ({ navigation }) => ({
		title: 'SHOP NOW!',
		headerStyle: {
			backgroundColor: '#11aa11',
		},
		headerTintColor: '#ffffff'
	  }) },
},
{
	initialRouteName: "Products"
  });

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;



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
