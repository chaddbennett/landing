import React from 'react'
import ModalVideo from 'react-modal-video'
import './_video.scss';
import '../button/_button.scss';

export default class VideoPopup extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({ isOpen: true })
  }

  render () {
    return (
      <div>
        {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='b0yQcysKTFg' onClose={() => this.setState({isOpen: false})} /> */}
        <a href="https://app.cachemunk.com/signup">
          <button className="btn-global" onClick={this.openModal}>Get Started</button>
        </a>
      </div>
    )
  }
}
