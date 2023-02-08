import "./Home.css";
import React, { useContext, useState } from "react";

const Home = () => {

  return (
    <div >

    <div class="toolbar" role="banner">
      <span class="title_fallen">Fallen Realms</span>
      <div class="spacer"></div>
      <a aria-label="Fallen Realms" target="_blank" rel="noopener" href="https://twitter.com/FallenRealmsNFT" title="Twitter">
        <svg id="twitter-logo" height="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <rect width="400" height="400" fill="none"/>
          <path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" fill="#fff"/>
        </svg>
      </a>

    </div>
    <div>
    <img class="flex-item img-top" src="https://nftstorage.link/ipfs/bafybeicakuaa4agfupd4gejh4qf6l2ieisvtjzey3bphwqyv2wg7nqixzi" alt="Backgd"></img>
    </div>

    <section id="aboutme" class="flex-container-2">
        <p class="font-header">Fallen Realms</p>
        <p class="artist-info">NFT Project by Emmanuel Pallassi Jr</p>
        <p class="art-info">Ancient Abstract Folk Art coming to the modern era</p>
    </section>
        <section id="portfolio" class="flex-container-3">
            <img class="flex-item-3" src="https://nftstorage.link/ipfs/bafybeicdpdrj3sg7jhcungwrfnqkefdbb3betoaivv353gafvfzp2sit3e" alt="Flower"></img>
            <img class="flex-item-3" src="https://nftstorage.link/ipfs/bafkreifzzipvo6glpwpddf4mpbuuos37hy4ibvos72qeovspfo6ozztit4" alt="Flower"></img>
            <img class="flex-item-3" src="https://nftstorage.link/ipfs/bafkreidw5j2sqavxr6mhcifsnzcu6xr2lmqp6kpvauvgs6cb75bzp2f4ri" alt="Flower"></img>
        </section>

    <div class="footer" >
      <p class="twitter-txt">Follow us on <a  href="https://twitter.com/FallenRealmsNFT" target="_blank">Twitter </a>
      to stay updated.</p>

    </div>
    </div>

  );
};

export default Home;
