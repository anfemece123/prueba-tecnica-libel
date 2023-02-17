import React from "react";
import "./Header.css";
import video from "../../video/video-juegos-89894.mp4";

export const Header = () => {
  return (
    <div className="cover-container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
      <video className="video" src={video} autoPlay loop muted />
      <div className="frase-container">
        <h1>Big Comeback</h1>

        <p>
          Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis ves-{" "}
          <br />
          tibulum urna turpis et risus. Mauris porttitor risus faucibus, auctor
          <br />
          arcu a, tincidunt hibh...
        </p>
        <button className="button button1">WATCH NOW</button>
        <button className="button button2">+ PLAYLIST</button>
      </div>
      <div className="button-play">
        <a href="#" class="round-button">
          <i class="fa fa-play fa-2x"></i>
        </a>
      </div>
    </div>
  );
};
