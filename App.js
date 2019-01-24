import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Button, Alert, TouchableHighlight} from 'react-native'



type Props = {};

export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      board: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
      ],
      redTurn: true,
      redScore: 0,
      yellowScore: 0,
  }}

  handleClick(i, j){
    let temp = this.state.board
    var col = j
    var row = i
    if (row < 5){ //find the lowest position without a disk and slide down
        while(temp[row+1][col] !== 1 && temp[row+1][col] !== 2) { //iterate through to the lowest open square
          row++
          if (row == 5){
            break
          }
        }
    }

    if (this.state.board[row][col] === 1 || this.state.board[row][col] === 2){ //don't allow a move to be overwritten
      return;
    }

    let flipTurn = this.state.redTurn
    if (flipTurn) {
      temp[row][col] = 1
    }
    else{
      temp[row][col] = 2
    }
    this.setState({
      board : temp,
      redTurn : !flipTurn
    })

  }

  square(row, column){
    const redOrYellow = this.state.board[row][column]
     if (redOrYellow == 1){
       return <TouchableHighlight onPress = {() => this.handleClick(row, column)}>
       <View style={styles.tile}>
       <Icon name={"circle"}  style = {styles.red}/>
       </View>
       </TouchableHighlight>
     }
     else if (redOrYellow == 2) {
       return <TouchableHighlight onPress = {() => this.handleClick(row, column)}>
         <View style={styles.tile}>
           <Icon name={"circle"}  style = {styles.yellow}/>
         </View>
       </TouchableHighlight>
     }
     else{
       return <TouchableHighlight onPress = {() => this.handleClick(row, column)}>
         <View style={styles.tile}>
           <Icon name={"circle"}  style = {styles.white}/>
         </View>
       </TouchableHighlight>
     }
   }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Connect Four </Text>

        <View style={styles.row}>
          {this.square(0, 0)}
          {this.square(0, 1)}
          {this.square(0, 2)}
          {this.square(0, 3)}
          {this.square(0, 4)}
          {this.square(0, 5)}
          {this.square(0, 6)}
        </View>
        <View style={styles.row}>
          {this.square(1, 0)}
          {this.square(1, 1)}
          {this.square(1, 2)}
          {this.square(1, 3)}
          {this.square(1, 4)}
          {this.square(1, 5)}
          {this.square(1, 6)}
        </View>
        <View style={styles.row}>
          {this.square(2, 0)}
          {this.square(2, 1)}
          {this.square(2, 2)}
          {this.square(2, 3)}
          {this.square(2, 4)}
          {this.square(2, 5)}
          {this.square(2, 6)}
        </View>
        <View style={styles.row}>
          {this.square(3, 0)}
          {this.square(3, 1)}
          {this.square(3, 2)}
          {this.square(3, 3)}
          {this.square(3, 4)}
          {this.square(3, 5)}
          {this.square(3, 6)}
        </View>
        <View style={styles.row}>
          {this.square(4, 0)}
          {this.square(4, 1)}
          {this.square(4, 2)}
          {this.square(4, 3)}
          {this.square(4, 4)}
          {this.square(4, 5)}
          {this.square(4, 6)}
        </View>
        <View style={styles.row}>
          {this.square(5, 0)}
          {this.square(5, 1)}
          {this.square(5, 2)}
          {this.square(5, 3)}
          {this.square(5, 4)}
          {this.square(5, 5)}
          {this.square(5, 6)}
        </View>



        <Text style={styles.leaderboard}>
          Player 1's Score: {this.state.redScore}
        </Text>
        <Text style={styles.leaderboard}>
          Player 2's Score: {this.state.yellowScore}
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
    backgroundColor: 'blue',
  },
  button: {
    width: 50,
    height: 50,
    color : 'transparent'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold'

  },
  leaderboard: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  yellow: {
    fontSize: 45,
    color: 'yellow',
    textAlign: 'center'
  },
  red: {
    fontSize: 45,
    color: 'red',
    textAlign: 'center'
  },
  white: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    display: 'flex'
  }
    }
);
