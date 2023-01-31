import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { IBaseLayout } from '@/shared/interfaces/base';
import { variants } from '@/constants';

const Transition = ({ children }: IBaseLayout) => {
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
