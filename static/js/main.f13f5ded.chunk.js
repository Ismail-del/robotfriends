(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var i=n(3),l=n(4),s=n(5),u=n(6),h=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200*200")}),r.a.createElement("div",{className:"fc tc"},r.a.createElement("h1",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(h,{key:n,name:t[n].name,email:t[n].email,id:t[n].id})}));return console.log(n),r.a.createElement("div",null,n)},d=function(e){e.SearchRobot;var t=e.SearchField;return r.a.createElement("div",{className:"fc tc"},r.a.createElement("h1",{className:"h1"},"RobotFriends"),r.a.createElement("input",{className:"pa3 ba b--green bg -hightest -blue",type:"search",placeholder:"search robots",onChange:t}))},b=(n(14),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)}),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onChangeevent=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement(d,{SearchField:this.onChangeevent}),r.a.createElement(b,null,r.a.createElement(m,{robots:a})))}}]),n}(r.a.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.f13f5ded.chunk.js.map