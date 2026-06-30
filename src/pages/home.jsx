import Header from "../components/Header"



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

        {/* Lado direito: futura imagem da lata */}
        <div className="hero-image">
          <div className="can-placeholder">
            Monster Can
          </div>
        </div>

      </section>
    </>
  )
}


export default Home