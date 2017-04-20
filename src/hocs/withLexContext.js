import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function withLexContext(mapStateToLang, mapStateToLexicon) {
  return Component => {
    class LexProvider extends Component {
      static childContextTypes = {
        lexiconLex: React.PropTypes.object.isRequired
      }
      static propTypes = {
        lang: PropTypes.string.isRequired,
        lexicon: PropTypes.object.isRequired,
        children: PropTypes.object.isRequired,
      }
      getChildContext() {
        return {
          lexiconLex: this.props.lexicon[this.props.lang]
        }
      }
      render() {
        return <Component {...this.props}}/>
      }
    }
    function mapStateToProps(state) {
      return {
        lang: mapStateToLang(state)
        lexicon: mapStateToLexicon(state)
      }
    }
    return connect(mapStateToProps)(LexProvider)
  }
}
