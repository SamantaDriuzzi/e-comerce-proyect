const Video = () => {
  return (
    <div>
      <video autoPlay muted loop className="w-full h-1/6">
        <source src="/video/iPad.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </div>
  );
};

export default Video;
