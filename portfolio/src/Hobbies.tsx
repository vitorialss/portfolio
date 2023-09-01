
// import { IoGameController } from "react-icons/io";
import { 
    FaDog,
    FaBiking } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { GiFamilyTree } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { Card, Container } from "./Card";

export default function Hobbies() {
    const iconStyles = {fontSize: "1.5em" };

    const CardHobby = [
        // {title:"Jogar", icon: <IoGameController />},
        {title:"Ler", icon: <ImBooks style={iconStyles} />},
        {title:"Brincar com a Lilo", icon: <FaDog style={iconStyles} />},
        {title:"Assistir filmes e séries", icon: <BiSolidMoviePlay style={iconStyles} />},
        {title:"Andar de bicicleta", icon: <FaBiking style={iconStyles} />},
        {title:"Passar tempo com minha família", icon: <GiFamilyTree style={iconStyles} />},
        
        // {title:"generico", icon: <ImBooks />}

    ]

    return (
        <>
      <Container>
        <h2>Hobbies</h2>

        <div>
          {CardHobby.map((item, index) => (
            <Card key={index}>
              {item.icon}
              {item.title}
            </Card>
          ))}
        </div>
      </Container>
    </>
  );

    
}

