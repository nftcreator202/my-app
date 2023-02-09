import "../Home/Home.css";
import React, { useContext, useState } from "react";

const Project = () => {

  return (
    <div >

    <div class="toolbar" role="banner">
      <span class="title_fallen"> <a href="/">Fallen Realms</a></span>
      <div class="spacer">
        <a class="project_toolbar" href="/project">Project</a>
        <a class="artist_toolbar" href="/artist">Artist</a>
      </div>
      <a aria-label="Fallen Realms" target="_blank" rel="noopener" href="https://twitter.com/FallenRealmsNFT" title="Twitter">
        <svg id="twitter-logo" height="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <rect width="400" height="400" fill="none"/>
          <path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" fill="#1D9BEF"/>
        </svg>
      </a>
    </div>

    <section>

    <p class="project-info">
        Introducing <b>Fallen Realms</b>, a folk art created by combining elements of traditional folk
        art with the abstract art form. It is characterized by its use of bold colors,
        simple forms, and decorative elements, drawing inspiration from folk art traditions around the world.
        <br/>
        <br/>
        Folk art is one of the ancient and beloved art styles of the great painters and artists across the world.
        Now, bringing this ancient art style to the most modern era of Web3 with the help of AI by the artist
        <b>  Emmanuel Pallassi Jr</b>.
        <br/>
        <br/>
        The beauty of these artworks is admirable. They're also backed by the power of blockchain technology in
        the Ethereum blockchain, making them verifiably authentic and scarce for you to collect.
        <br/>
        <br/>
        Fallen Realms art collection contains limited edition of 555 individual pieces of Abstract Folk Art. Each piece of this collection is highly detailed and 1/1.
           <br/>
           <br/>
          Join our premint <a href="https://www.premint.xyz/Fallenrealms/" target="_blank">here</a> </p>
    </section>
        <section id="portfolio" class="flex-container-project-images">
            <img class="flex-item-3" src="/art1.png" alt="Art Piece 1"></img>
            <br/>
            <img class="flex-item-3" src="/art2.jpeg" alt="Art Piece 2"></img>
            <br/>
            <img class="flex-item-3" src="/art3.jpeg" alt="Art Piece 3"></img>
        </section>

    <div class="footer" >
      <p class="twitter-txt">Follow us on <a href="https://twitter.com/FallenRealmsNFT" target="_blank">Twitter </a>
      to stay updated.</p>

    </div>
    </div>

  );
};

export default Project;
