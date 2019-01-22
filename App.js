import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(7).fill(null).map(() => new Array(6).fill(null))
    }
  }



  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.header}> Connect Four </Text>

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

        <Text style={styles.leaderboard}>
          Player 1's Score:
        </Text>
        <Text style={styles.leaderboard}>
          Player 2's Score:
        </Text>
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
  tile: {
    borderWidth: 3,
    width: 50,
    height: 50
  },
  header: {
    fontSize: 40,
    backgroundColor: 'red',

  },
  leaderboard: {
    fontSize: 20,
  }
    }
);
