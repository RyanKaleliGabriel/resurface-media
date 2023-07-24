import React from "react";
import { useState } from "react";

function Video() {
  return (
    <div>
      <div className="videoContainer">
        <div className="videoItem">
          <button id="openModalBtn">
            <i class="fa-solid fa-play fa-xl"></i>
          </button>
          <h1>Watch Video Demo</h1>
        </div>
      </div>
      <div class="modal" id="videoModal">
        <div class="modalContent">
          <span class="closeBtn" id="closeModalBtn">
            &times;
          </span>
          <iframe
            title="Resurface"
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=85vmGd13R8s"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
