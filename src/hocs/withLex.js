import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default function withLex(cmpKey, ...otherCmpKeys) {
  return Content => {
    class WithLex extends Component {
      static contextTypes = {
        lexiconLex: PropTypes.object.isRequired
      }
      getLex() {
        const lexLex = this.context.lexiconLex
        if (otherCmpKeys && otherCmpKeys.length) {
          const allCmpKeys = [cmpKey, ...otherCmpKeys]
          return allCmpKeys.reduce((acc, cmpKey) => {
            acc[cmpKey] = lexLex[cmpKey]
            return acc
          }, {})
        } else if (cmpKey && lexLex[cmpKey]) {
          return lexLex[cmpKey]
        } else {
          return lexLex
        }
      }
      render() {
        return <Content {...this.props} lex={this.getLex()} />
      }
    }
    return WithLex
  }
}
