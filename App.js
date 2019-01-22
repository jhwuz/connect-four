import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
        </View>

      </View>
    );
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
  tile: {
    borderWidth: 3,
    width: 50,
    height: 50
  }
});
