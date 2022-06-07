/** @format */
// homepage animation
export const homecontainer = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: "100vh",
    transition: {
      duration: 0.75,
    },
  },
  hide: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.75,
      /* delay: 0.3,    */   /* Add from original animations.js */
    },
  },
};
export const homeh2 = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      delay: 0.5
    },
  },
  hide: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.75,
    },
  },
};
export const homebtn = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      delay: 0.5
    },
  },
  hide: {
    opacity: 0,
    x: -200,
    transition: {
      duration: 0.75,
    },
  },
};
/* customized from original */
export const backhomebtn = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
  hide: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.75,
    },
  },
};
export const btns = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  hide: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const detailcontainer = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
      delay: 0.3, 
    },
  },
  show: {
    scale: 1,
  },
  hide: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 0.75,
    },
  },
};
/* customized END */

// services page animations
export const servicesh3btn = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hide: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
    },
  },
};

export const cards = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const card = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      
    },
  },
  hide: {
    opacity: 0,
    scale: 0.75,
    transition: {
      duration: 0.5,
    },
  },
};
