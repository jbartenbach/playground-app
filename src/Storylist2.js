import React from 'react'
import { Story } from './Story'


class Storylist extends React.Component {

  static defaultProps = {
    stories: [
      {image: "none", label: "Short Story", title: "Story", author: "Anonymous", shortbody: "Click the card to read" }
    ]
  }
  render() {
    console.log("render is working");
    const { stories } = this.props
    console.log(stories)
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
        {stories.map(
          (story, i) =>
            <Story
              key={i}
              image={story.image}
              label={story.label}
              title={story.title}
              author={story.author}
              shortbody={story.shortbody}/>
        )}
      </div>

    );
  }
}

export default Storylist
