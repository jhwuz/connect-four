import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SQUARE_WHITE = 0;
const SQUARE_RED = 1;
const SQUARE_YELLOW = 2;

const SQUARE_MAP = {
  [SQUARE_WHITE]: 'white',
  [SQUARE_RED]: 'red',
  [SQUARE_YELLOW]: 'yellow'
};

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

  generateBoard() {
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
          break;
        }
      }
    }

    if (this.state.board[row][col] === 1 || this.state.board[row][col] === 2) { //don't allow a move to be overwritten
      return;
    }

    let flipTurn = this.state.redTurn;
    let turnCount = this.state.turnCount;
    if (flipTurn) {
      board[row][col] = 1;
    } else {
      board[row][col] = 2;
    }
    this.setState({
      board: board,
      redTurn: !flipTurn,
      turnCount: turnCount + 1
    });
    this.checkWinner(row, col);
  }

  checkWinner(row, col) {
    const board = this.state.board
    const color = board[row][col]
    const redScore = this.state.redScore
    const yellowScore = this.state.yellowScore

    for (let i = 0; i < 3; i++) {
      if (board[i][col] === color && board[i + 1][col] === color && board[i + 2][col] === color && board[i + 3][col] === color) {
        if (color === SQUARE_RED) {
          this.setState({
            redScore: redScore + 1,
            gameWon: true
          });
          Alert.alert('Winner', `Player ${color} has won!`);
        } else if (color === SQUARE_YELLOW) {
          this.setState({
            yellowScore: yellowScore + 1,
            gameWon: true
          });
          Alert.alert('Winner', `Player ${color} has won!`);
        }
      }
    }

    for (let j = 0; j < 4; j++) {
      if (board[row][j] === color && board[row][j + 1] === color && board[row][j + 2] === color && board[row][j + 3] === color) {
        if (color === SQUARE_RED) {
          this.setState({
            redScore: redScore + 1,
            gameWon: true
          });
          Alert.alert('Winner', `Player ${color} has won!`);
        } else if (color === SQUARE_YELLOW) {
          this.setState({
            yellowScore: yellowScore + 1,
            gameWon: true
          });
          Alert.alert('Winner', `Player ${color} has won!`);
        }
      }
    }

    for (let i = 0; i < 3; i++) { //top left down diagonally
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === color && board[i + 1][j + 1] === color && board[i + 2][j + 2] === color && board[i + 3][j + 3] === color) {
          if (color === SQUARE_RED) {
            this.setState({
              redScore: redScore + 1,
              gameWon: true
            });
            Alert.alert('Winner', `Player ${color} has won!`);
          } else if (color === SQUARE_YELLOW) {
            this.setState({
              yellowScore: yellowScore + 1,
              gameWon: true
            });
            Alert.alert('Winner', `Player ${color} has won!`);
          }
        }
      }
    }

    for (let i = 5; i > 2; i--) { //bottom right up diagonally
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === color && board[i - 1][j + 1] === color && board[i - 2][j + 2] === color && board[i - 3][j + 3] === color) {
          if (color === SQUARE_RED) {
            this.setState({
              redScore: redScore + 1,
              gameWon: true
            });
            Alert.alert('Winner', `Player ${color} has won!`);
          } else if (color === SQUARE_YELLOW) {
            this.setState({
              yellowScore: yellowScore + 1,
              gameWon: true
            });
            Alert.alert('Winner', `Player ${color} has won!`);
          }
        }
      }
    }
  }

  renderSquare(row, column) {
    const color = this.state.board[row][column];
    return (
      <TouchableHighlight onPress={() => this.handleClick(row, column)}>
        <View style={styles.tile}>
          <Icon name={"circle"} style={styles[SQUARE_MAP[color]]}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Connect Four </Text>
        {this.state.board.map((row, rowIndex) => {
          return (
            <View style={styles.row} key={rowIndex}>
              {row.map((col, colIndex) => {
                return this.renderSquare(rowIndex, colIndex)
              })}
            </View>
          );
        })}

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

const
  styles = StyleSheet.create({
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
