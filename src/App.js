import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import "./Components/styles.css"

function App() {
  const [data, setData] = React.useState([])
  const [query, setQuery] = React.useState("")
  let cards

  React.useEffect(() => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`)
      .then(res => res.json())
      .then(data => setData(data.results))
  }, [query]);
  console.log(data)
  

  const handleChange = (event) => {
    event.target.value==="hentai"&&alert("VIRGIN")
    setQuery(event.target.value)

  }
if(data)
{
   cards=data.map(items=> <Card url={items.image_url} title={items.title} />)
  
}
  

  return (
    <div className="App">
      <Header />
      <input onChange={handleChange} type="text" />
      <div className="card-container">
      {cards}
      </div>
      
    </div>
  );
}

export default App;
