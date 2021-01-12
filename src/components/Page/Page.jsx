import React from 'react';
import './Page.css';
import { FaLinkedin, FaTwitter, FaTwitch, FaGithub, FaInstagram, FaSteam, FaBattleNet, FaDiscord, FaVideo } from "react-icons/fa";

function App() {
  return (
    <div class="container">
      <div class="subcontainer">
        <div class="stuffdiv">
        <p class="stufftext">𓆏<br />HELLO</p>
          <p class="stufftextsmall">I am Joan Serra, and this is my sort of website. I am a human being who works in cloud stuff and enjoys many things. If you're curious, why not check any of the following?</p> 
        </div>
        <div class="stuffdiv">
          <a class="stufflink" href="https://twitter.com/noopdles" title="Drama and general unhingement. Please don't judge me."><FaTwitter /> Twitter</a>
          <a class="stufflink" href="https://twitch.tv/noopdles" title="I play videogames. Badly"><FaTwitch /> Twitch</a>
          <a class="stufflink" href="https://instagram.com/noopdles" title="Sometimes I may take a photo of something interesting."><FaInstagram /> Instagram</a>
          <a class="stufflink" href="https://letterboxd.com/noopdles" title="I like movies"><FaVideo /> Letterboxd</a>
          <a class="stufflink" href="https://linkedin.com/in/joanserramolas" title="seriouscat.jpg"><FaLinkedin /> LinkedIn</a>
          <a class="stufflink" href="https://github.com/joan-serra" title="Code, or attempts at such."><FaGithub /> GitHub</a>
          <span class="stufflink"><FaDiscord /> Noodles#6855</span>
          <br />
          <p class="stufftextsmall">Fancy playing videogames with me?</p>
          <br />
          <a class="stufflink" href="https://steamcommunity.com/id/noopdles/" title="Don't judge me."><FaSteam /> Steam</a>
          <a class="stufflink" href="https://playoverwatch.com/en-us/career/pc/Noodles-22366/" title="Mostly Overwatch and WoW"><FaBattleNet /> Noodles#22366</a>
        </div>
      </div>
    </div>
  );
}

export default App;
