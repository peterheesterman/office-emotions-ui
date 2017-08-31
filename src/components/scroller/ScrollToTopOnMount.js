
import { Component } from 'react'

export class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, this.props.startPoint)
  }

  render() {
    return null
  }
}

ScrollToTopOnMount.defaultProps = {
  startPoint: 400
}
