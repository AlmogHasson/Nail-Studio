import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
  <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  

  const x = useTransform(scrollYProgress, [0, 1], ["60%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 transition-translate duration-1500 ease-in-out">
          {cards.map((card) => {
            return <Card card={card} key={card.id}/>;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  // const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // target: targetRef,
  });

  const nextPer = Math.max(Math.min(scrollYProgress.getPrevious(),0),-100)
  const x = useTransform(scrollYProgress, [0, 1], ["-40%", "50%"]);

  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[300px] overflow-hidden bg-black">
      <motion.div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: '100% center',
          x
        }}
        animate={{objectPosition: `${100}+${nextPer}`, fill:'backwards'}}
        className="absolute w-[300px] h-[400px] inset-0 z-0 transform-transition duration-1500 ease-in-out"
      ></motion.div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/7.jpg",
    title: "Title 7",
    id: 7,
  },
];