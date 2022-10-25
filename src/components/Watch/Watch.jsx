import React from 'react'
import Bar from '../Bar/Bar'
import watch from './Watch.module.css'
import {CircularProgressbar} from "react-circular-progressbar";
export default function Watch({settings}) {
const{pomodoro,short,long,color,font}=settings
  let time_pomodoro=pomodoro;
let time_short_break=short;
let time_long_break=long;

  const[time,setTime]=React.useState({m:time_pomodoro,s:0})
  
const[mode,setMode]=React.useState('pomodoro')

const[cycle,setCycle]=React.useState(7)

let typogs={
font:()=>{return watch.font4},
font2:()=>{return watch.font2},
font3:()=>{return watch.font3},
}
let typogstarts={
  font:()=>{return watch.start},
  font2:()=>{return watch.start2},
  font3:()=>{return watch.start3},
  }

React.useEffect(()=>{
  setCycle(7)
  setMode('pomodoro')
  setTime(prevT=>{return{...prevT,m:pomodoro,s:0}})
},[pomodoro])

React.useEffect(()=>{
setCycle((prevC)=>{
  if(!time.m&&!time.s&&prevC){
return prevC-1
}
  
      else{return prevC}})
},[time])    
React.useEffect(()=>{setMode((prevM)=>{
   
    
      if(!time.m&&!time.s&&prevM==='pomodoro'&&cycle>1){
      
     return 'short'}
     if(!time.m&&!time.s&&prevM==='short'&&cycle){
      
      return 'pomodoro'}
      if(!time.m&&!time.s&&prevM==='pomodoro'&&cycle===1){
return 'long'

      }
      if(!time.m&&!time.s&&prevM==='long'){
        return 'Staph!'
        
              }

    else{return prevM}
    })
    
  },[time])
  let clear=(a,b)=> {
    clearInterval(a);
    clearInterval(b);
  }
  
  React.useEffect(()=>{
    let id2,id1,id3 
    if(mode==='pomodoro'){
      clearInterval(id2);
      clearInterval(id3);
      id1=setInterval(()=>{
    setTime(prevT=>
       {                           //condicion inicial
   return prevT.s===0&& !prevT.m? {...prevT,m:time_pomodoro,s:0}:prevT.s===0&&prevT.m?
   {...prevT,m:prevT.m-1,s:59}:{...prevT,s:prevT.s-1}
    }  )
     
      },1000)}
  
      if(mode==='short'){
        clearInterval(id1);
        clearInterval(id3) ; 
       id2=setInterval(()=>{setTime((prevT)=>{ 
        if (prevT.s===0&& !prevT.m) return{...prevT,m:time_short_break,s:0}//condicion Inicial short
        if(prevT.s===0 && prevT.m) return{...prevT,m:prevT.m-1,s:59}
        return{...prevT,s:prevT.s-1}
      })},1000)
      }
      if(mode==='long'){
clearInterval(id2);
clearInterval(id1);
id3=setInterval(()=>{setTime((prevT)=>{ 
  if (prevT.s===0&& !prevT.m) return{...prevT,m:time_long_break,s:0}//condicion Inicial long
  if(prevT.s===0 && prevT.m) return{...prevT,m:prevT.m-1,s:59}
  return{...prevT,s:prevT.s-1}
})},1000)

       }
  return()=>  {mode==='short'?clearInterval(id2)  :clear(id1,id3)}
},[mode])
  const memo= React.useMemo(()=>{
 return cycle%2===1&&mode!=='long'? 
'pomodoro':cycle%2===0&&cycle>0?'short':'long'
  },[mode,cycle])
     console.log(`mode:${mode}, cycle:${cycle}`)
     //console.log(memo)
     const nemo=React.useMemo(()=>{

      return memo==='pomodoro'?
      (100*(time.m*60+time.s)/(time_pomodoro*60)):memo==='short'?
      (100*(time.m*60+time.s)/(time_short_break*60)):(100*(time.m*60+time.s)/(time_long_break*60))


     },[time,memo])
     console.log(nemo)
    return (
    <div className={watch.fondo}>
      <p className={watch.font}>pomodoro</p>
      <Bar estad={memo} color={color} font={font}/>    {/* barra */}
      <div className={watch.circle}>{/* cirulito */}
      <div className={`${typogs[font]()}`}>{time.m}:{time.s<10?'0'+time.s:time.s}</div>   
    <div onClick={()=>{setMode((prevM)=>{return prevM!=='Staph!'?'Staph!':memo})}} 
    className={!cycle&&!time.m&&!time.s? `${watch.disabled} ${typogstarts[font]()}`:`${typogstarts[font]()}`}>{mode!=='Staph!'?`P  A  U  S  E`:`P  L  A  Y `}</div>
      <div className={watch.innerCircle}>
      <CircularProgressbar value={nemo} 
      background
      strokeWidth={3}
      backgroundPadding={4}
      styles={{
        background: {
          fill: "rgba(20,20,52,1)"
        },
        text: {
          fill: "#fff"
        },
        path: {
          stroke: color,
          strokeLinecap: 'round'
        },
        trail: { stroke: "transparent" }
      }}/>
        </div>
    </div> 
    </div>
  )
}
