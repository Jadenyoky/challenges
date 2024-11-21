export const moving = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
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

export const moving6 = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3,
    },
  },
};

export const moving7 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

export const moving8 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};
