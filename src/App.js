import React from 'react';
import './App.css';

let stories2 = [
  {image: "welcome-image.png", label: "welcome", title: "Short Stories the fun way", author: "Jeff Bartenbach", shortbody: "Pointed Stories is a new way to enjoy short stories. It’s quite simply a feed of the best stories, from the classics to contemporary writers."},
  {label: "Short story", title: "A Great Title for the Ages", author: "John Doe", shortbody:"This is an example of a card without an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec viverra odio."}
]

function App() {

  return (
  <div id="main">
    <div class="logo2"></div>
      <div class="card">
        <div class="card-image"></div>
        <div class="card-text-container">
          <div class="card-label">Welcome</div>
          <div class="card-title">Short stories the fun way</div>
          <div class="card-author"></div>
          <div class="card-short-body">Pointed Stories is a new way to enjoy short stories. It’s quite simply a feed of the best stories, from the classics to contemporary writers.</div>
        </div>
      </div>
      <div class="card">
          <div class="card-no-image"></div>
          <div class="card-text-container">
            <div class="card-label">Short Story</div>
            <div class="card-title">A Great Title for the Ages</div>
            <div class="card-author">By John Doe</div>
            <div class="card-short-body">This is an example of a card without an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec viverra odio.</div>
          </div>
      </div>
    </div>

  );
};

export default App;
