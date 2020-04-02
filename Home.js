import React, {Component} from 'react';
import {Platform, StyleSheet, View, Button,TouchableOpacity,Text,PermissionsAndroid,Image} from 'react-native';
export default class App extends Component {
	static navigationOptions = {
    header: null,
  };
 constructor (properties) {
    super(properties) 
 this.state={
 }
  }

componentDidMount(){
  };
  render() {
    return (
      <View style={styles.container}>
	  <View style={styles.body}>
	  <Image source={require('./../images/logo.png')} style={{width: 300, height: 300,alignSelf:'center'}} />
	   <Button
	  onPress = {()=>{this.props.navigation.navigate('Playmode')}}
   	  title ='Playnow'
	  color ='#006400'
	  />
	  </View>
	  </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  body:
  {flex:1,
  alignItems:'stretch',
  justifyContent:'space-evenly',
  margin:10,
  
  
  },
  footer:
  {
	  height:250,
	  alignItems:'center',
	  justifyContent:'space-evenly',
	  marginBottom:8,
  },
});