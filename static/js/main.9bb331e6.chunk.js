(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(2),l=n.n(i),o=(n(12),n(3)),r=n(4),c=n(5),u=n(6),h=(n(13),function(t){Object(u.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={win:!1,turn:!0,boxes:Array(9).fill(null),undo:"",message:"X Player Trun"},t.fillBox=function(e){if(!t.state.win){var n,a,s=t.state.boxes.slice();"X"!==s[e]&&"O"!==s[e]&&(!0===t.state.turn?(n="X",a="O"):(n="O",a="X"),s[e]=n,t.setState({turn:!t.state.turn,boxes:s,undo:t.state.undo.concat(e.toString())}),s[0]===n&&s[1]===n&&s[2]===n||s[3]===n&&s[4]===n&&s[5]===n||s[6]===n&&s[7]===n&&s[8]===n||s[0]===n&&s[3]===n&&s[6]===n||s[1]===n&&s[4]===n&&s[7]===n||s[2]===n&&s[5]===n&&s[8]===n||s[0]===n&&s[4]===n&&s[8]===n||s[2]===n&&s[4]===n&&s[6]===n?t.setState({win:!0,message:n.concat(" Player win ")}):t.setState({message:a.concat(" player Turn")}))}},t.restart=function(){t.setState({win:!1,turn:!0,boxes:Array(9).fill(null),undo:"",message:"X Player Trun"})},t.undoBoxes=function(){var e,n,a=t.state.boxes.slice(),s=t.state.undo;s.length>0&&(e=s[s.length-1],n=a[e=parseInt(e)],a[e]="",s=s.substring(0,s.length-1),t.setState({win:!1,turn:!t.state.turn,boxes:a,undo:s,message:n.concat(" Player Turn")}))},t}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Tic Tac Toe"),s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("td",{onClick:this.fillBox.bind(this,"0")},this.state.boxes[0]),s.a.createElement("td",{className:"vert",onClick:this.fillBox.bind(this,"1")},this.state.boxes[1]),s.a.createElement("td",{onClick:this.fillBox.bind(this,"2")},this.state.boxes[2])),s.a.createElement("tr",null,s.a.createElement("td",{className:"hori",onClick:this.fillBox.bind(this,"3")},this.state.boxes[3]),s.a.createElement("td",{className:"vert hori",onClick:this.fillBox.bind(this,"4")},this.state.boxes[4]),s.a.createElement("td",{className:"hori",onClick:this.fillBox.bind(this,"5")},this.state.boxes[5])),s.a.createElement("tr",null,s.a.createElement("td",{onClick:this.fillBox.bind(this,"6")},this.state.boxes[6]),s.a.createElement("td",{className:"vert",onClick:this.fillBox.bind(this,"7")},this.state.boxes[7]),s.a.createElement("td",{onClick:this.fillBox.bind(this,"8")},this.state.boxes[8]))),s.a.createElement("div",{className:"bDiv"},s.a.createElement("h3",null,this.state.message),s.a.createElement("button",{className:"button restart",onClick:this.restart},"Restart"),s.a.createElement("button",{className:"button undo",onClick:this.undoBoxes},"Undo")))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.9bb331e6.chunk.js.map