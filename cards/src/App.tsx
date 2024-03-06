import './App.css'
import  { Card, InfoProps } from './components/Card'

const info: InfoProps = {
  imageLink: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/react_logo_icon_144942.png',
  title: "Card title",
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
}

const info2: InfoProps = {
  title: "Card title2",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo aliquid quaerat, harum sed officiis, quia praesentium eum ex officia beatae asperiores! Vero id beatae, ipsa excepturi harum dolores dolorum?",
}

function App() {

  return (
    <>
      <Card  {...info}/>
      <Card  {...info2}/>
    </>
  )
}

export default App

