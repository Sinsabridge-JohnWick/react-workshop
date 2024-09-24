import reactImg from '../assets/react-core-concepts.png';



const reactDescritions = ['기초', 'Crucial', 'Core'];

export default function Header() {
    const descritons = reactDescritions[getRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {descritons} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}