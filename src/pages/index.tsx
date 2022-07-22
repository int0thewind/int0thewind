import { useEffect } from 'react';

const Home = (props) => {
  useEffect(() => {
    console.log(props);
  });

  return <p>Home page works!</p>;
};

export default Home;
