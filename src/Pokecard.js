let POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = ({ id, name, type, base_experience }) => {
  let imgsrc = `${POKE_API}${id}.png`;
  return (
    <ul>
      <li>Name: {name}</li>
      <img src={imgsrc} alt="pokoman image" />
      <li>Type:{type}</li>
      <li>EXP:{base_experience}</li>
    </ul>
  );
};

export default Pokecard;
