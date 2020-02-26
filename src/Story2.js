import React from 'react'

export const Story = ({image="none", label="none", title="No Title Provided", author="Anonymous", shortbody="no text found"}) => {
  var hasImage = false;
  { image !== "none" &&
    console.log('has image')
    hasImage = true;
  };
  const images = require.context('./assets/img', true);
  let imgsrc = images(`./welcome-image.png`);
  const cardImgStyle = {
    backgroundImage: `url(${imgsrc})`
  };
  console.log(image)
  return (
    <section className="card">
    { hasImage ? console.log(hasImage) : console.log('no has it' + hasImage) }


      <div class="card-text-container">
        <h6>{label}</h6>
        <h2>{title}</h2>
        <p className="card-author">By {author}</p>
        <p className="card-short-body">{shortbody}</p>
      </div>
    </section>
  )
}
