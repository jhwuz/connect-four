import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SQUARE_RED = 1;
const SQUARE_YELLOW = 2;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      board: this.generateBoard(),
      redTurn: true,
      redScore: 0,
      yellowScore: 0,
      turnCount: 0,
      gameWon: false
    }
  }

  generateBoard () {
    return new Array(6).fill(null).map(() => new Array(7).fill(0));
  }

  reset() {
    this.setState({
      board: this.generateBoard(),
      redTurn: true,
      gameWon: false
    })
  }

  handleClick(i, j) {
    if (this.state.gameWon) {
      return;
    }

    let board = this.state.board;
    let row = i;
    const col = j;
    if (row < 5) { //find the lowest position without a disk and slide down
      while (board[row + 1][col] !== 1 && board[row + 1][col] !== 2) { //iterate through to the lowest open square
        row++;
        if (row == 5) {
          break
        }
      }
    }

    if (this.state.board[row][col] === 1 || this.state.board[row][col] === 2) { //don't allow a move to be overwritten
      return;
    }

    let flipTurn = this.state.redTurn;
    let turnCount = this.state.turnCount;
    if (flipTurn) {
      board[row][col] = 1
    } else {
      board[row][col] = 2
    }
    this.setState({
      board: board,
      redTurn: !flipTurn,
      turnCount: turnCount + 1
    })
    this.checkWinner(row, col)
  }

  checkWinner(i, j) {
    const board = this.state.board
    const currPlayer = board[i][j]
    const redScore = this.state.redScore
    const yellowScore = this.state.yellowScore

    if (i < 5) { //if possible, traverse down
      let tempRow = i;

      while (board[tempRow + 1][j] === currPlayer) {
        tempRow++;
        if (tempRow === 5) { //don't go past last element
          break
        }
      }
      if (tempRow > 2) { // there must be at least 4 in a row to win
        if (board[tempRow][j] === currPlayer && board[tempRow - 1][j] === currPlayer && board[tempRow - 2][j] === currPlayer
          && board[tempRow - 3][j] === currPlayer) {
          if (currPlayer === 1) {
            this.setState({
              redScore: redScore + 1,
              gameWon: true
            })
            Alert.alert('Winner', `Player ${currPlayer} has won!`)
          } else if (currPlayer === 2) {
            this.setState({
              yellowScore: yellowScore + 1,
              gameWon: true
            });
            Alert.alert('Winner', `Player ${currPlayer} has won!`)
          }
        }
      }

      if (j < 6) { //if possible, traverse to the right
        let tempCol = j;

        while (board[i][tempCol + 1] === currPlayer) {
          tempCol++;
          if (tempCol === 6) { //don't go past last element
            break
          }
        }

        if (tempRow > 2) { // there must be at least 4 in a row to win
          if (board[i][tempCol] === currPlayer && board[i][tempCol - 1] === currPlayer && board[i][tempCol - 2] === currPlayer
            && board[i][tempCol - 3] === currPlayer) {
            if (currPlayer === 1) {
              this.setState({
                redScore: redScore + 1,
                gameWon: true
              });
              Alert.alert('Winner', `Player ${currPlayer} has won!`)
            } else if (currPlayer === 2) {
              this.setState({
                yellowScore: yellowScore + 1,
                gameWon: true
              });
              Alert.alert('Winner', `Player ${currPlayer} has won!`)
            }
          }
        }
      } else { //case for if user clicks on the last column
        if (board[i][j] === currPlayer && board[i][j - 1] === currPlayer && board[i][j - 2] === currPlayer
          && board[i][j - 3] === currPlayer) {
          if (currPlayer === 1) {
            this.setState({
              redScore: redScore + 1,
              gameWon: true
            })
            Alert.alert('Winner', `Player ${currPlayer} has won!`)
          } else if (currPlayer === 2) {
            this.setState({
              yellowScore: yellowScore + 1,
              gameWon: true
            })
            Alert.alert('Winner', `Player ${currPlayer} has won!`)
          }
        }
      }

    }//end if
  }

  renderSquare(row, column) {
    const redOrYellow = this.state.board[row][column]
    if (redOrYellow === SQUARE_RED) {
      return <TouchableHighlight onPress={() => this.handleClick(row, column)}>
        <View style={styles.tile}>
          <Icon name={"circle"} style={styles.red}/>
        </View>
      </TouchableHighlight>
    } else if (redOrYellow === SQUARE_YELLOW) {
      return <TouchableHighlight onPress={() => this.handleClick(row, column)}>
        <View style={styles.tile}>
          <Icon name={"circle"} style={styles.yellow}/>
        </View>
      </TouchableHighlight>
    } else {
      return <TouchableHighlight onPress={() => this.handleClick(row, column)}>
        <View style={styles.tile}>
          <Icon name={"circle"} style={styles.white}/>
        </View>
      </TouchableHighlight>
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Connect Four </Text>
        {
          this.state.board.map((row, rowIndex) => {
            return (
              <View style={styles.row} key={rowIndex}>
                {row.map((col, colIndex) => {
                  return this.renderSquare(rowIndex, colIndex)
                })}
              </View>
            )
          })
        }

        <Text style={styles.leaderBoard}>
          Player 1's Score: {this.state.redScore}
        </Text>
        <Text style={styles.leaderBoard}>
          Player 2's Score: {this.state.yellowScore}
        </Text>
        <Button title="Restart Game" onPress={() => this.reset()}/>
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
      color: 'transparent'
    },
    header: {
      fontSize: 55,
      fontWeight: 'bold',


    },
    leaderBoard: {
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
