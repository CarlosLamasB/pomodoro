import React from 'react'
import set from "./Settings.module.css"
function Settings({settings,cambiar,del}) {
const[options,setOptions]=React.useState(settings)
const{pomodoro,short,long,color,font}=options


//sustituir las checkbox por un map y arreglar los checks para que sea solo uno el que aparezca
const [checked, setChecked] = React.useState([false,false,false]);
const [fontChecked,setFont]=React.useState([false,false,false])
let letras=['font','font2','font3'].map((a,i)=>{return <span key={i} className={fontChecked[i]?`${set.fontG} ${set[a]} ${set.fonttrue}` :`${set.fontG} ${set[a]}`}
onClick={()=>{ 
  setFont(()=>{let falsedad=letras.map(a=>false)
  falsedad[i]=true

  return falsedad
  
  
  });
  setOptions((prev)=>{return !fontChecked[i]? {...prev,font:a}:prev})}}

><p>Aa</p>

</span>
})

  let colors={
    "#e37174":()=>{return set.pink},
    '#72ecf1':()=>{return set.blue},
   '#b698bb':()=>{return set.purple},

  }
  
    let colors2= ["#e37174",'#72ecf1','#b698bb'].map((a,i)=>{
      
      return  <div key={i}className={set.round}>
    <input type="checkbox" checked={checked[i]} id={`c${i}`}
           onChange={()=>{ 
            setChecked(()=>{let falsedad=colors2.map(a=>false)
            falsedad[i]=true
          
            return falsedad
            
            
            });
            setOptions((prev)=>{return !checked[i]? {...prev,color:a}:prev})}}  className={`${colors[a]()}`} />
      <label for={`c${i}`} className={`${colors[a]()}`}>
    </label></div>})
 
 
 


console.log(options)
return (
    <div className={set.set}
    >
      <p className={set.psettings}>Settings</p>
    <button onClick={del} className={set.del}>x</button>
      
    <div className={set.divSelect}>
      <p className={`${set.pTitle} ${set.pTime}`}>T I M E ( M I N U T E S )</p>
      <div>
      
      <p>pomodoro</p>
      
    <select  onChange={(e)=>{setOptions((prev)=>{return{...prev,pomodoro:Number(e.target.value)}})}}>
        <option value={1}>1</option>
        <option value={5}>5</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
        <option value={35}>35</option>
        <option value={45}>45</option>
      </select></div>
    <div>
      
    <p>short break</p>
    
     
      <select onChange={(e)=>{setOptions((prev)=>{return{...prev,short:Number(e.target.value)}})}}>
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select></div>
      <div>
 <p>long break</p>
      <select  onChange={(e)=>{setOptions((prev)=>{return{...prev,long:Number(e.target.value)}})}}>
        <option value={5}>5</option>
        <option value={15}>15</option>
        <option value={60}>60</option>
      </select></div>
    </div>
      
      <div className={set.fonty}>
        <p className={set.pTitle}>F O N T</p> {letras}
      </div>

<div className={set.divColor}>
   <p className={set.pTitle}>C O L O R</p>
  {colors2}</div>

     <button onClick={()=>{cambiar(pomodoro,short,long,color,font)}} className={set.apply}>Apply</button>
    
    </div>
  )
}

export default Settings