import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    win: false,
    turn: true,
    boxes: Array(9).fill(null),
    undo: "",
    message: "X Player Trun",
  };

  fillBox = (pos) => {
    if (!this.state.win) {
      let a = this.state.boxes.slice();
      let t, m;
      if (a[pos] !== "X" && a[pos] !== "O") {
        if (this.state.turn === true) {
          t = "X";
          m = "O";
        } else {
          t = "O";
          m = "X";
        }
        a[pos] = t;
        this.setState({
          turn: !this.state.turn,
          boxes: a,
          undo: this.state.undo.concat(pos.toString()),
        });

        if (
          (a[0] === t && a[1] === t && a[2] === t) ||
          (a[3] === t && a[4] === t && a[5] === t) ||
          (a[6] === t && a[7] === t && a[8] === t) ||
          (a[0] === t && a[3] === t && a[6] === t) ||
          (a[1] === t && a[4] === t && a[7] === t) ||
          (a[2] === t && a[5] === t && a[8] === t) ||
          (a[0] === t && a[4] === t && a[8] === t) ||
          (a[2] === t && a[4] === t && a[6] === t)
        ) {
          this.setState({
            win: true,
            message: t.concat(" Player win "),
          });
        } else {
          var count = 0;
          var over;
          for (var i = 0; i < 9; i++) {
            if (a[i] === "X" || a[i] === "O") {
              count += 1;
            }
          }
          if (count > 8) {
            over = "Tie";
          } else {
            over = m.concat(" player Turn");
          }
          this.setState({
            message: over,
          });
        }
      }
    }
  };

  restart = () => {
    this.setState({
      win: false,
      turn: true,
      boxes: Array(9).fill(null),
      undo: "",
      message: "X Player Turn",
    });
  };

  undoBoxes = () => {
    let a = this.state.boxes.slice();
    var his = this.state.undo;
    var last;
    var player;
    if (his.length > 0) {
      last = his[his.length - 1];
      last = parseInt(last);
      player = a[last];
      a[last] = null;
      his = his.substring(0, his.length - 1);
      this.setState({
        win: false,
        turn: !this.state.turn,
        boxes: a,
        undo: his,
        message: player.concat(" Player Turn"),
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <table>
          <tr>
            <td onClick={this.fillBox.bind(this, "0")}>
              {this.state.boxes[0]}
            </td>
            <td className="vert" onClick={this.fillBox.bind(this, "1")}>
              {this.state.boxes[1]}
            </td>
            <td onClick={this.fillBox.bind(this, "2")}>
              {this.state.boxes[2]}
            </td>
          </tr>
          <tr>
            <td className="hori" onClick={this.fillBox.bind(this, "3")}>
              {this.state.boxes[3]}
            </td>
            <td className="vert hori" onClick={this.fillBox.bind(this, "4")}>
              {this.state.boxes[4]}
            </td>
            <td className="hori" onClick={this.fillBox.bind(this, "5")}>
              {this.state.boxes[5]}
            </td>
          </tr>
          <tr>
            <td onClick={this.fillBox.bind(this, "6")}>
              {this.state.boxes[6]}
            </td>
            <td className="vert" onClick={this.fillBox.bind(this, "7")}>
              {this.state.boxes[7]}
            </td>
            <td onClick={this.fillBox.bind(this, "8")}>
              {this.state.boxes[8]}
            </td>
          </tr>
        </table>
        <div className="bDiv">
          <h3>{this.state.message}</h3>
          <button className="button restart" onClick={this.restart}>
            Restart
          </button>
          <button className="button undo" onClick={this.undoBoxes}>
            Undo
          </button>
        </div>
      </div>
    );
  }
}

export default App;
