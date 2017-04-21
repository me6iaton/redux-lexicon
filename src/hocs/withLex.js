import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function withLex(namespace) {
  return Content => {
    class WithLex extends Component {
      static contextTypes = {
        lexiconLex: PropTypes.object.isRequired
      }
      static propTypes = {
        children: PropTypes.object.isRequired,
      }
      render() {
        const lexiconLex = this.context.lexiconLex
        const lex = namespace ? lexiconLex[namespace] : lexiconLex
        return <Content {...this.props} lex={lex} />
      }
    }
    return WithLex
  }
}
