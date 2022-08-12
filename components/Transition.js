import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  out: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.25,
    },
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      delay: 0,
    },
  },
};

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={asPath}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
