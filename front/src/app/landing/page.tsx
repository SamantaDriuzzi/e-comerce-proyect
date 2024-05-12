import Head from "next/head";

const Landing = () => {
  return (
    <div className="flex justify-center items-center h-900 w-full">
      <Head>
        <title>Video de bienvenida</title>
      </Head>

      <video autoPlay muted loop className="w-full h-auto">
        <source src="/videoaple.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </div>
  );
};

export default Landing;
