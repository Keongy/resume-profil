import './App.css';
import { Container } from './components/Container';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <Container>
        <div className='name'>
          <h2>Olivier Pichon</h2>
          <h2>Développeur js</h2>
          <h2>Expérience : 3ans</h2>
        </div>

        <div className="content">
          <div className="competences">
            <h2>Compétences principales</h2>
            <ul>
              <li>JavaScript, TypeScript</li>
              <li>React.js, Next.js, Vue.js</li>
              <li>Node.js, Express, Firebase</li>
              <li>MongoDB, Mongoose</li>
            </ul>
          </div>

          <div className="competences">
            <h2>Outils et Technologies</h2>
            <ul>
              <li>Docker, GitLab</li>
              <li>Jira, Confluence</li>
              <li>Figma, Zeplin</li>
            </ul>
          </div>
        </div>
      </Container>

      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
