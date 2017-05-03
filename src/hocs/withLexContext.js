import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

function withLexContext(mapStateToLang, mapStateToLexicon, defLang = 'en') {
  return Content => {
    class WithLexContext extends Component {
      static childContextTypes = {
        lexiconLex: PropTypes.object.isRequired
      }
      static propTypes = {
        lang: PropTypes.string.isRequired,
        lexicon: PropTypes.object.isRequired,
      }
      getChildContext() {
        const {lexicon, lang} = this.props
        let lexiconLex = {}
        if (lexicon && lexicon[lang]) {
          lexiconLex = lexicon[lang]
        } else if (lexicon && lexicon[defLang]) {
          lexiconLex = lexicon[defLang]
        }
        return { lexiconLex }
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

export default withLexContext
