import React from "react";
import './App.css';
import Watch from './components/Watch/Watch';
import Settings from "./components/Settings/Settings";
import { TiCogOutline} from "react-icons/ti";
function App() {
const[set,setSet]=React.useState(false)
const[settings,SetSettings]=React.useState({
pomodoro:1,
short:2,
long:5,
color:'#e37174',
font:'font'
})

function Cambiar(p,s,l,c,f){
SetSettings(prevS =>{
  return {...prevS,pomodoro:p,short:s,long:l,color:c,font:f}})
}
  return (
    <div className='App'>
      <Watch settings={settings}/>
<div onClick={()=>{setSet(()=>!set)}}
// style={{position:'absolute',top:'90%',left:'30%',width:'40%',height:'10%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"space-around"}}
className="divClic"
><TiCogOutline/></div>

      {set?<Settings settings={settings} cambiar={Cambiar} del={()=>{setSet(()=>!set)}}/>:''}
    </div>
  );
}

export default App;
