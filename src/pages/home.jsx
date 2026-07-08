import Header from "../components/Header"
import monsterOriginal from "../assets/images/original.png"


function Home() {

  return (
  <>
      <Header />
      <section className="hero">
        <div className="hero-content">

          {/* Texto pequeno acima do título */}
          <span className="hero-tag">
            UNLEASH THE BEAST
          </span>

          {/* Título principal */}
          <h1>Monster Energy</h1>

          {/* Descrição */}
          <p>
            Explore todos os sabores da Monster em uma experiência moderna,
            rápida e totalmente responsiva.
          </p>

          {/* Área dos botões */}
          <div className="hero-buttons">
            <button>Comprar Agora</button>
            <button>Explorar Sabores</button>
          </div>

        </div>
        <img
        className="hero-can"
        src={monsterOriginal}
        alt="Monster Energy Original"
        />

      </section>
    </>
  )
}


export default Home