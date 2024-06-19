import './App.css';
import { Container } from './components/Container';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <Container>

        <div>
          <h1>Développeur js</h1>
        </div>


        <div className="content">

          <div className='profil'>
            <h2 className='title'>Info perso</h2>

            <div className="wrapper-block">
              <div className="personnal-info">
                <ul>
                  <li><p>Prénom: <strong>Olivier</strong></p></li>
                  <li><p>Nom : <strong>Pichon</strong></p></li>
                  <li><p>Expérience : <strong>3 ans</strong></p></li>
                  <li><p>Lieu :<strong>06 Sophia-Antipolis</strong></p></li>
                  <li><p>Disponibilité : <strong>Immédiate</strong></p></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="separator" />

          <div className='profil'>
            <h2 className='title'>Skills</h2>

            <div className="wrapper-block">
              <div className="personnal-info">
                <ul>
                  <li><p>Html - CSS - JavaScript - TypeScript</p></li>
                  <li><p>React.js, Next.js, Vue.js</p></li>
                  <li><p>Node.js - Express - MongoDB - Mongoose </p></li>
                </ul>
                <br />
                <p>Autres : VPS - PWA - Wordpress...</p>
              </div>
            </div>
          </div>


        </div>
      </Container >

      <Particles id="tsparticles" />
    </div >
  );
}

export default App;
