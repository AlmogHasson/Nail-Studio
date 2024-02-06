import { motion, useTransform, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Example = () => {

  return (
  <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-0.2 1", "1.33 1"]

  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} id ="carousel" className="flex gap-4 transition-translate duration-1000 ease-in-out">
          {cards.map((card) => {
            return <Card card={card} key={card.id}/>;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const { scrollY, scrollYProgress } = useScroll();
  const animation = useAnimation();

  const x = useTransform(scrollYProgress, [0, 1], [150, 0]); 

  useEffect(() => {
    const updateAnimation = () => {
      animation.start({
        backgroundPosition: `${x.get()}% 50%`,
        transition: { duration: 0.1 },
      });
    };

    const removeUpdateListener = scrollY.on("change",updateAnimation);

    return () => removeUpdateListener();
  }, [animation, scrollY, x]);

  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[300px] overflow-hidden bg-black"
    >
      <motion.div
        initial= {{backgroundPosition:'100% center'}}
        style={{
          backgroundImage: `url(${card.url})`,
        }}
        animate={animation}
        className="image123 absolute inset-0 z-0 transform-transition duration-1000 ease-in-out"
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