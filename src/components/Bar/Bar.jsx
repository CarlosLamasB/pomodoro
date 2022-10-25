import React from 'react'
import bar from './Bar.module.css'
export default function Bar({estad,color,font}) {
  //sustituir los divs por un map
  //plantearme pasar las funciones y los ternarios a objetos y metodos
  
  let coloring=(color)=>{
return color ==='#b698bb'? bar.activePurple:color==='#72ecf1'?
bar.activeBlue: bar.active

  }
let fonting=(font)=>{
return font==='font'? bar.font:font==='font2'?bar.font2:bar.font3 

}
let style=(a,b)=>{
  return `${coloring(a)}
  ${fonting(b)}`

}
let noStyle=(b)=>{
 return`${bar.in}
  ${fonting(b)}`
}
  return (
    <div className={bar.bar}>
<div className={estad==='pomodoro'? style(color,font): noStyle(font)}><p>pomodoro</p></div>
<div className={estad==='short'?style(color,font): noStyle(font) }><p>short break</p></div>
<div className={estad==='long'?style(color,font): noStyle(font) }> <p>long break</p></div>
</div>
  )
}
