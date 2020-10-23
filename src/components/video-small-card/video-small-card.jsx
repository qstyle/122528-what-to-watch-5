import propTypes from "prop-types";
import React, {PureComponent} from "react";

class VideoSmallcard extends PureComponent {
  constructor(props) {
    super(props);
    this.videoPlayerNode = React.createRef();
  }

  playVideo() {
    const {isHovered} = this.props;

    if (this.videoPlayerNode.current === null) {
      return;
    }

    if (isHovered) {
      this.videoPlayerNode.current.play();
    } else {
      this.videoPlayerNode.current.load();
    }
  }

  componentDidUpdate() {
    this.playVideo();
  }

  render() {
    const {filmVideo, filmAvatar} = this.props;
    return (
      <React.Fragment>
        <video
          ref={this.videoPlayerNode}
          poster={`img/${filmAvatar}.jpg`}
          src={filmVideo}
          width="280"
          height="175"
          muted
        />
      </React.Fragment>
    );
  }

}

VideoSmallcard.propTypes = {
  filmAvatar: propTypes.string,
  isHovered: propTypes.bool,
  filmVideo: propTypes.string,
  id: propTypes.number,
  filmId: propTypes.number,
  playFilmId: propTypes.number
};
export default VideoSmallcard;
