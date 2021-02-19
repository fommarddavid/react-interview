import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/Header';
import Main from '../containers/Main';

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>React-interview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeStyled>
        <Header />
        <Main />
      </HomeStyled>
    </>
  )
};

export default Home;
