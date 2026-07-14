import { useState} from "react"
import Header from "../components/Header"
import monsterOriginal from "../assets/images/original.png"
import mangoLoco from "../assets/images/mango-loco.png"
import pipelinePuch from "../assets/images/pipeline-punch.png"
import ultraWhite from "../assets/images/ultra-white.png"

const sabores = [
  {
    nome: "Original",
    descricao: "O sabor clássico da Monster Energy, com uma mistura única de ingredientes que proporcionam energia e foco.",
    imagem: monsterOriginal,
    cor: "#39ff14"
  },
  {
    nome: "Mango Loco",
    descricao: "Um sabor tropical que combina a doçura do mango com o toque refrescante da Monster Energy.",
    imagem: mangoLoco,
    cor: "#ff9f1c"
  },
  {
    nome: "Pipeline Punch",
    descricao: "Um sabor intenso que combina a energia da Monster Energy com o toque refrescante da Pipeline Punch.",
    imagem: pipelinePunch,
    cor: "#ff4fa3"
  },
  {
    nome: "Ultra White",
    descricao: "O sabor mais refrescante da linha Ultra, com um toque de limão e uma experiência de energia pura.",
    imagem: ultraWhite,
    cor: "#f5f5f5"
  },
];

function Home() {

  const [saborAtual, setSaborAtual] = useState(sabores[0]);

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
          <h1>{saborAtual.nome}</h1>

          {/* Descrição */}
          <p>{saborAtual.descricao}</p>

          {/* Área dos botões */}
          <div className="hero-buttons">
            <button>Comprar Agora</button>
            <button>Explorar Sabores</button>
            <button onClick={() => setSaborAtual(sabores[0])}>Original</button>
            <button onClick={() => setSaborAtual(sabores[1])}>Mango Loco</button>
            <button onClick={() => setSaborAtual(sabores[2])}>Pipeline Punch</button>
            <button onClick={() => setSaborAtual(sabores[3])}>Ultra White</button>
          </div>
          </div>
            <div className="hero-image">
          <img
            className="hero-can"
            src={saborAtual.imagem}
            alt={`Lata Monster Energy ${saborAtual.nome}`}
          />
        </div>
      </section>
    </>
  )
}


export default Home