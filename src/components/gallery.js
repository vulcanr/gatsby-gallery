import React, { Component } from "react"
import PropTypes from "prop-types"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import "./gallery.css"

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      showBullets: false,
      useBrowserFullscreen: false,
      showPlayButton: false,
    }
  }

  render() {
    const { galleryImages } = this.props
    const images = galleryImages

    return (
      <ImageGallery
        items={images}
        useBrowserFullscreen={this.state.useBrowserFullscreen}
        showPlayButton={this.state.showPlayButton}
      />
    )
  }
}
