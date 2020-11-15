import React from 'react';
import './Page.css';
import { FaLinkedin, FaTwitter, FaTwitch, FaGithub, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div class="container">
      <div class="subcontainer">
        <div class="stuffdiv">
          <p class="stufftext">Hello, stranger!</p>
          <p class="stufftextsmall">I am Joan Serra, and this is my sort of website. I am a human being who works in cloud stuff and enjoys many things. If you're curious, why not check any of the following...</p> 
        </div>
        <div class="stuffdiv">
          <a class="stufflink" href="https://twitter.com/noopdles" title="Drama and general unhingement. Please don't judge me."><FaTwitter /> Twitter</a>
          <a class="stufflink" href="https://twitch.tv/cybernoodles" title="I play videogames. Badly"><FaTwitch /> Twitch</a>
          <a class="stufflink" href="https://instagram.com/noopdles" title="Sometimes I may take a photo of something interesting."><FaInstagram /> Instagram</a>
          <a class="stufflink" href="https://linkedin.com/in/joanserramolas" title="seriouscat.jpg"><FaLinkedin /> LinkedIn</a>
          <a class="stufflink" href="https://github.com/joan-serra" title="Code, or attempts at such."><FaGithub /> GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;
