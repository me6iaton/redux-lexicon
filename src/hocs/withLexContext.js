import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function withLexContext(mapStateToLang, mapStateToLexicon) {
  return Content => {
    class WithLexContext extends Component {
      static childContextTypes = {
        lexiconLex: PropTypes.object.isRequired
      }
      static propTypes = {
        lang: PropTypes.string.isRequired,
        lexicon: PropTypes.object.isRequired,
        children: PropTypes.object.isRequired,
      }
      getChildContext() {
        const {lexicon, lang} = this.props
        return {
          lexiconLex: (lexicon && lexicon[lang]) ? lexicon[lang] : {}
        }
      }
      render() {
        return <Content {...this.props}/>
      }
    }
    function mapStateToProps(state) {
      return {
        lang: mapStateToLang(state),
        lexicon: mapStateToLexicon(state),
      }
    }
    return connect(mapStateToProps)(WithLexContext)
  }
}
