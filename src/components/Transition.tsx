import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};
const Transition = ({ children }: { children: React.ReactElement }) => {
  const { asPath } = useRouter();

  return (
    <div className="overflow-hidden">
      <AnimatePresence initial={false} exitBeforeEnter>
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
    </div>
  );
};

export default Transition;
