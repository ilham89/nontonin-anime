export const routes = [
  {
    to: '/',
    name: 'Upcoming',
  },
  {
    to: '/top-tv',
    name: 'Top TV',
  },
  {
    to: '/top-movie',
    name: 'Top Movie',
  },
  {
    to: '/top-airing',
    name: 'Top Airing',
  },
];

export const variants = {
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
