import "./App.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Galeria from './components/Main/Galeria';
import img1 from "./img/html.jpg";
import img2 from "./img/css.jpg";
import img3 from "./img/js.jpg";

function App() {
  return (
    <div className="App">
      <Header />
        <div className="titulo">
            <h1>Galeria de Imagens</h1>
            <p>Aqui você encontra as imagens mais diversas.</p>
        </div>
        
        <section className="container">
          <Galeria imagem={img1} titulo="HTML" descricao="É uma linguagem de marcação para a World Wide Web "  />
          <Galeria imagem={img2} titulo="CSS"  descricao="É um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) "  />
          <Galeria imagem={img3} titulo="JS"  descricao="é uma linguagem de programação interpretada estruturada"  />
        </section>
      <Footer />
    </div>
  );
}

export default App;
