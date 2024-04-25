import React from 'react'
import '../styles/blackjack.css'

const BlackJack = () => {
  return (
    <div>

      <div>
        <div id="hero">
          <h1>BlackJack</h1>
        </div>

        <div id="container2">

          <p id="message_el">Want to play a round</p>
          <div class="frame">
            <img src="bg_img.jpg" alt="neoncard" id="main_bg"/>
          </div>
          <br/>
            <a href="index.html">
              <button id="game_start">Let's Play</button>
            </a>
          </div>

            <script src="blackjack.js"></script>
          </div>


        </div>
        )
}

        export default BlackJack