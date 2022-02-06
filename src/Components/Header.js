import React from "react"
import Emoji from "../assets/moai-emoji.png"

export default function Header() {
  return (
    <div className="header">
      <div className="block">
        <p>Shreyas</p>
        <img className="logo" src={Emoji} alt="" />
      </div>
    </div>

  )
}