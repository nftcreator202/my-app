import "./Home.css";
import React, { useContext, useState } from "react";

const Home = () => {

  return (
    <div >
        <section class="flex-container">
            <img class="flex-item img-top" src="https://nftstorage.link/ipfs/bafkreicubaoqbeyr4cpz7ibaoyzhgpuky75akm6zyyah5mi2zemw5z7sz4" alt="Flower"></img>
            <div class="flex-item">
                <p class="font-header">Fallen Realms</p>
                <p class="artist-info">NFT Project by Emmanuel Pallassi Jr</p>
                <p class="art-info">Ancient Abstract Folk Art coming to the modern era</p>
                <a href="#aboutme" class="aboutme"> About Me </a>
                <a href="#portfolio" class="portfolio"> Portfolio </a>
            </div>
        </section>
        <section id="aboutme" class="flex-container-2">
            <p>Hello. I am 34 years old European artist, Emmanuel Pallassi Jr. </p>
            <br/>
            <p>I consider Ammy Phillips, the famous American folk artist, as my mentor and I've learned from his style alot. I am an IRL folk abstract artist and painter from 5 years. All my creations are inspired by God. My style is based upon the ancient primitive civilized society. </p>
            <br/>
            <p>At the young age of 23, I put up adverts to paint people’s portraits. After the enhancement of my skills, I finally started the folk art at the age of 29.
            I mixed up the folk and abstract arts to further revive the beauty of my creations.
            I am coming to web3 with my limited collection of folk abstract art. I want to be praised for my art but not for who I am. </p>
        </section>
        <section id="portfolio" class="flex-container-3">
            <img class="flex-item-3" src="https://nftstorage.link/ipfs/bafybeicdpdrj3sg7jhcungwrfnqkefdbb3betoaivv353gafvfzp2sit3e" alt="Flower"></img>
            <img class="flex-item-3" src="https://nftstorage.link/ipfs/bafkreifzzipvo6glpwpddf4mpbuuos37hy4ibvos72qeovspfo6ozztit4" alt="Flower"></img>
            <img class="flex-item-3" src="https://nftstorage.link/ipfs/bafkreidw5j2sqavxr6mhcifsnzcu6xr2lmqp6kpvauvgs6cb75bzp2f4ri" alt="Flower"></img>
        </section>
        <section class="flex-container-4">
        <h1>What is Fallen Realms?</h1>
        <br/>
            <p>
            Introducing Fallen Realms, a folk art created by combining elements of traditional folk art with the abstract art form. It is characterized by its use of bold colors, simple forms, and decorative elements, drawing inspiration from folk art traditions around the world.
             </p>
             <p>
            Folk art is one of the ancient and beloved art styles of the great painters and artists across the world. Now, bringing this ancient art style to the most modern era of Web3 with the help of AI by the artist Emmanuel Pallassi Jr.
             </p>
             <p>
            The beauty of these artworks is admirable. They're also backed by the power of blockchain technology in the Ethereum blockchain, making them verifiably authentic and scarce for you to collect.
             </p>
             <p>
            Fallen Realms art collection contains limited edition of 555 individual pieces of Abstract Folk Art. Each piece of this collection is highly detailed and 1/1.
             </p>
             <p>
            Join our premint <a href="https://www.premint.xyz/Fallenrealms/" target="_blank"> here</a>.
            </p>
            <br/>
           <p >
            Follow us on <a  href="https://twitter.com/FallenRealmsNFT" target="_blank">Twitter </a>
            to stay updated.

            </p>

            <br/>
            <br/>
        </section>

    </div>
  );
};

export default Home;
