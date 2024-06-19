import './App.css';
import { Container } from './components/Container';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <Container>

        <div className="title">
          <h1>Développeur js</h1>
        </div>


        <div className="content">

          <div className='name'>
            <h4>Prénom: Olivier</h4>
            <h4>Nom : Pichon</h4>
            <h4>Expérience : 3 ans</h4>
            <h4>Lieu : 06 Sophia-Antipolis</h4>
            <h4>Disponibilité : Immédiate</h4>
          </div>

          <div className="separator" />

          <div className="competences">
            <h2>Compétences principales</h2>
            <ul>
              <li><p>JavaScript, TypeScript</p></li>
              <li><p>React.js, Next.js, Vue.js</p></li>
              <li><p>Node.js, Express, Firebase</p></li>
              <li><p>MongoDB, Mongoose</p></li>
            </ul>
          </div>

        </div>


      </Container>

      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
