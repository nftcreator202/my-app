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

    <section class="flex-container">
        <img class="artist-flex-item img-top" src="https://nftstorage.link/ipfs/bafkreicubaoqbeyr4cpz7ibaoyzhgpuky75akm6zyyah5mi2zemw5z7sz4" alt="Flower"></img>
        <div class="artist-flex-item">
            <p class="artist-page-info">
            Hello. I am 34 years old European artist, Emmanuel Pallassi Jr.
            I consider Ammy Phillips, the famous American folk artist, as my mentor and I've learned from his style alot.
            <br/>
            <br/>
            I am an IRL folk abstract artist and painter from 5 years. All my creations are inspired by God.
            My style is based upon the ancient primitive civilized society.
            <br/>
            <br/>
            At the young age of 23, I put up adverts to paint people’s portraits.
            After the enhancement of my skills, I finally started the folk art at the age of 29.
            I mixed up the folk and abstract arts to further revive the beauty of my creations.
            <br/>
            <br/>
            I am coming to web3 with my limited collection of folk abstract art.
            I want to be praised for my art but not for who I am.
            </p>
        </div>
    </section>

    <div class="footer" >
      <p class="twitter-txt">Follow us on <a href="https://twitter.com/FallenRealmsNFT" target="_blank">Twitter </a>
      to stay updated.</p>

    </div>
    </div>

  );
};

export default Project;
