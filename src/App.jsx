import { useState } from 'react'
import './CSS/Home.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <header>
    <nav>
        <a className="logo" href="">Gamer Hub</a>
        <ul className="nav-list">
            <li><a href="xxx">Notícias</a></li>
            <li><a href="xxx">Reviews</a></li>
            <li><a href="">acessibilidade &#x25BE;</a></li>
        </ul>
    </nav>
   </header>
   <main>
    <div className="containertitle">
        <h1 className="titlegamer">GAMER HUB</h1><br/>
        <p className="subtitle">Conectando você ao universo dos games! Gamer Hub é um site de notícias focado no universo dos games, trazendo atualizações sobre lançamentos, análises e eventos da indústria. Com conteúdo relevante e envolvente, atende a gamers de todos os níveis. Fique por dentro das últimas novidades e tendências em um só lugar!</p>
    </div>
   </main>
      </div>
  )
}

export default App
