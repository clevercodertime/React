import React from "react";
import ReactDOM from "react-dom";
function App() {
let hours = new Date();
hours = hours.getHours();
let a = new Date()
a = a.getMinutes();
let b = new Date()
b = b.getSeconds();
let time = `${hours}:${a}:${b}`
let greeting = " ";
let cssStyle = {}
let cssStyle1 = {}
if(hours>= 1 && hours < 12){
greeting = "Good Morning";
cssStyle.color = "green"
cssStyle1.backgrounColor = "grey"
}else if(hours>= 12 && hours < 17){
greeting = "Good Afternoon";
cssStyle.color = "red"
}else if(hours>= 17 && hours < 20){
greeting = "Good Evening";
cssStyle.color = "Blue"
}
else{
greeting = "Good Night";
cssStyle.color = "grey"
}
return(
<>
<h1 style={cssStyle1}> Hello Sir <span
style={cssStyle}>{greeting}</span></h1>
</>
)
}
export default App;
