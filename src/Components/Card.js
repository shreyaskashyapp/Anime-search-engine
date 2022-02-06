import React from "react"

export default function Card(props){
  console.log("THIS IS IMAGE URL "+props.url)
  return(
    <div className="card">
      <img src={props.url} alt=""/>
      <span>{props.title}</span>
    </div>
  )
}