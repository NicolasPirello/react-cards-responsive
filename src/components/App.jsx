import '../styles/App.css';
import Card from "./card"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"

let valuesCard = [

  {
    title: "GitHub",
    description: "Un espacio donde alojo mis proyectos como Desarrollador Web Full Stack junto con la informacion de los mismos y sus Deploy.",
    image: image1,
    url: "https://github.com/NicolasPirello"
  },
  {
    title: "Portfolio",
    description: "Pagina web dedicada a mi Portfolio, donde alojo algunos de mis proyectos como Desarrollador en constante crecimiento 😀",
    image: image2,
    url: "#"
  },
  {
    title: "Linkedin",
    description: "Si estas interesado en saber mas de mi te dejo mi perfil de Linkedin donde vas a encontrar mas informacion.",
    image: image3,
    url: "#"
  }

]

function App() {
  return (
    <div className="App">
      
      <div className='appContainer'>

        {
          valuesCard.map ((card, i) => {

            return(
              <Card 
              title={card.title}
              description= {card.description}
              image={card.image}
              url={card.url}
              />
            )

          })
        }

      </div>

    </div>
  );
}

export default App;


