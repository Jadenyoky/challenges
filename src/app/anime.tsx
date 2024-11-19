export const moving = {
  initial: {
    height: "100svh",
  },
  animate: {
    height: "70px",
    transition: {
      delay: 0.7,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

export const moving2 = {
  initial: {
    opacity: 0.8,
  },
  animate: {
    opacity: 0.2,
  },
};

export const moving3 = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const moving4 = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const moving5 = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
