import Card from "./Card";
import TheArtOfWar from "../assets/book1.webp";
import MadWorld from "../assets/book2.webp";
import WhereInTheWorld from "../assets/book3.webp";
import MoralStories from "../assets/book4.webp";

const data = [
  {
    id: 1,
    name: "The Art Of War",
    image: TheArtOfWar,
    description:
      "The book contains a detailed explanation and analysis of the 5th-century BC Chinese military, from weapons, environmental conditions, and strategy to rank and discipline. ",
  },
  {
    id: 2,
    name: "Mad World",
    image: MadWorld,
    description:
      "Mad World is the third book in the Broken World series, which follows a group of survivors after a super-virus has destroyed the world and the dead have come back to claim it as their own",
  },
  {
    id: 3,
    name: "Where In The World",
    image: WhereInTheWorld,
    description:
      "Since moving with his mother from Germany to Australia, Ari feels adrift—cut off from his familiar world, the people he loves most, even his music. For Ari, playing the violin was always the key to his memories of people and places and his connection to the world around him.",
  },
  {
    id: 4,
    name: "365 Moral Stories",
    image: MoralStories,
    description:
      "The Intelliskills 365 Moral Stories book will delight children, teaching them important values and good behaviour. Written in easy-to-understand language that is supported by simple illustrations, these captivating stories impart valuable life lessons. This book is perfect for little ones to develop their love for reading.",
  },
];
export const CardList = () => {
  function action(name, description) {
    console.log(`This is action on the ${name} , ${description}`);
  }
  return (
    <div className="card-list">
      {data.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          action={action}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
