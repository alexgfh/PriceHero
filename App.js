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



class SaleInfo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SaleInfo!</Text>
      </View>
    );
  }
}


const StackNavigator = createStackNavigator({
  Products: { 
	  screen: ProductList,
	  
	  navigationOptions: ({ navigation }) => ({
		title: 'Product List'
	  })
   },
  Price: { screen: PriceView,
	  
	  navigationOptions: ({ navigation }) => ({
		title: `${navigation.state.params.name} 💲`
	  }) },
  SaleInfo: { screen: SaleInfo },
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
