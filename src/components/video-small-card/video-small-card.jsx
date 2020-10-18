import propTypes from "prop-types";
import React, {PureComponent} from "react";


class VideoSmallcard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mouseIn: false
    };
    this.videoPlayerNode = React.createRef();
  }

  playVideo() {
    const {filmId} = this.props;
    const {playFilmId} = this.props;
    if (playFilmId === filmId) {
      this.setState({mouseIn: true});
      this.videoPlayerNode.current.play();
    } else {
      if (this.videoPlayerNode.current === null) {
        return;
      } else {
        this.setState({mouseIn: false});
        this.videoPlayerNode.current.pause();
        this.videoPlayerNode.current.load();
      }
    }
  }

  render() {
    const {filmVideo, filmAvatar} = this.props;
    this.playVideo();
    return (
      <React.Fragment>
        <video ref={this.videoPlayerNode} poster={`img/${filmAvatar}.jpg`} muted
          src={filmVideo}
          alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"
        />
      </React.Fragment>
    );
  }

}

VideoSmallcard.propTypes = {
  filmAvatar: propTypes.string,
  filmVideo: propTypes.number,
  id: propTypes.number,
  filmId: propTypes.number,
  playFilmId: propTypes.number
};
export default VideoSmallcard;
