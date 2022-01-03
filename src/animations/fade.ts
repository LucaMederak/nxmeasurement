export const fadeAnimation = {
  hidden: { opacity: 0.6 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.3 },
  },
};

export const fadeItem = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
