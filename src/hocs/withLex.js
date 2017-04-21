import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function withLex(cmpKey) {
  return Content => {
    class WithLex extends Component {
      static contextTypes = {
        lexiconLex: PropTypes.object.isRequired
      }
      render() {
        const lexLex = this.context.lexiconLex
        const lex = (cmpKey && lexLex[cmpKey]) ? lexLex[cmpKey] : lexLex
        return <Content {...this.props} lex={lex} />
      }
    }
    return WithLex
  }
}
