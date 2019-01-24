import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Button, Alert, TouchableHighlight} from 'react-native'



type Props = {};

class Square extends Component<Props>{
  constructor(props){
    super(props)
    this.makeSquare.bind(this)
    this.state = {
      i: null,
      j: null
    }
  }

  makeSquare(){
    if (this.i == null || this.j == null){
      return <View style={styles.tile}/>
    }

    const redOrYellow = this.props.board[this.state.i][this.state.j]
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
}

export default class App extends Component<Props> {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  constructor(props){
    super(props);
    this.state = {
      board: [
          [0, 2, 1, 2, 1, 2, 1],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
      ],
      redIsNext: true,
      redScore: 0,
      yellowScore: 0,
  }}

   square(row, column){
    const redOrYellow = this.state.board[row][column]
     if (redOrYellow == 1){
       return <TouchableHighlight onPress = {this._onPressButton}>
       <View style={styles.tile}>
       <Icon name={"circle"}  style = {styles.red}/>
       </View>
       </TouchableHighlight>
     }
     else if (redOrYellow == 2) {
       return <TouchableHighlight onPress = {this._onPressButton}>
         <View style={styles.tile}>
           <Icon name={"circle"}  style = {styles.yellow}/>
         </View>
       </TouchableHighlight>
     }
     else{
       return <TouchableHighlight onPress = {this._onPressButton}>
         <View style={styles.tile}/>
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
          {this.square(0, 0)}
          {this.square(0, 1)}
          {this.square(0, 2)}
          {this.square(0, 3)}
          {this.square(0, 4)}
          {this.square(0, 5)}
          {this.square(0, 6)}
        </View>
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
          {this.square(0, 0)}
          {this.square(0, 1)}
          {this.square(0, 2)}
          {this.square(0, 3)}
          {this.square(0, 4)}
          {this.square(0, 5)}
          {this.square(0, 6)}
        </View>
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
          {this.square(0, 0)}
          {this.square(0, 1)}
          {this.square(0, 2)}
          {this.square(0, 3)}
          {this.square(0, 4)}
          {this.square(0, 5)}
          {this.square(0, 6)}
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
  row: {
    flexDirection: 'row',
    display: 'flex'
  }
    }
);
