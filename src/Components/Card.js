import React from "react"

export default function Card(props){
  return(
    <div className="card">
      <img src={props.url} alt=""/>
      <span>{props.title}</span>
    </div>
  )
}