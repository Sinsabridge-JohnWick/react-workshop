import reactImg from './assets/react-core-concepts.png';
const reactDescritions = ['기초', 'Crucial', 'Core'];

function getRandomInt(max){
  return Math.floor(Math.random()*(max + 1));
}

function App() {
  const descritons = reactDescritions[getRandomInt(2)];
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descritons} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
