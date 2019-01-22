import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      board: [
          [2, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]]
  }}

   square(row, column){
    const redOrYellow = this.state.board[row][column]
     if (redOrYellow == 1){
       return <View style={styles.tile}>
       <Icon name={"circle"}  style = {styles.yellow}/>
       </View>
     }
     else if (redOrYellow == 2) {
       return <View style={styles.tile}>
         <Icon name={"circle"}  style = {styles.red}/>
       </View>
     }
     else{
       return <View style={styles.tile}/>
     }
   }

   renderBoard(){
    const arrs = this.state.board
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++){
        square(i, j)
      }
    }
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Connect Four </Text>

        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}>
          </View>
          {this.square(0, 0)}
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
    height: 50,
    backgroundColor: 'blue'
  },
  header: {
    fontSize: 50,

  },
  leaderboard: {
    fontSize: 20,
  },
  yellow: {
    fontSize: 40,
    color: 'yellow'
  },
  red: {
    fontSize: 40,
    color: 'red'
  }
    }
);
