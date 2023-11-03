import Card from "../CardYugi/Card";

const Home = ({ deck }) => {
  if (!deck || !Array.isArray(deck)) {
    return <div>No se ha proporcionado un mazo válido.</div>;
}

  return (
    <div>
      {deck.map(({ id, name, type, frameType, desc, race, archetype, card_sets, card_images }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            type={type}
            frameType={frameType}
            descriptions={desc}
            race={race}
            archetype={archetype}
            card_sets={card_sets}
            card_images={card_images}
          />
        );
      })}
    </div>
  );
  
};

export default Home;
