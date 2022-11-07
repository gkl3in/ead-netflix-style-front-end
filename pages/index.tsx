import Head from "next/head";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import styles from "../styles/homeNoAuth.module.scss" 

const HomeNotAuth = function () {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
				<meta property="og:title" content="Onebitflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil." />
      </Head>
    <main>
      <HeaderNoAuth />
    </main>
    </>
  );
};

export default HomeNotAuth;