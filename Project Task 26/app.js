import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };

    // Bind chooseVideo to the current value of this
    this.chooseVideo = this.chooseVideo.bind(this);
  }

 // Define the chooseVideo function
 chooseVideo = (newVideo) => {
  // Update the src property in the state
  this.setState({ src: VIDEOS[newVideo] });
}
  render() {
    return (
      <div>
        <h1>Video Player</h1>
         {/* Pass the src property and chooseVideo function down to the Menu component */}
         <Menu src={this.state.src} chooseVideo={this.chooseVideo} />
        {/* Pass the src property down to the Video component */}
        <Video src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);