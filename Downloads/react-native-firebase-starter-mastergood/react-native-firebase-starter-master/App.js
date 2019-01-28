import React from 'react';
import {Button,View} from 'react-native';

import firebase from 'react-native-firebase';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

clickHandel=()=>{

firebase.auth().
createUserWithEmailAndPassword('test@testAwy.com','123456')
.then(user=>{
  alert('create')
  console.log('user created',user);
}).catch(err=>{
      alert('error');
      console.log('error',err);

})
}

  render() {
    return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
<Button title='create users' onPress={this.clickHandel}></Button>
    </View>
    );
  }
}

