# redux-lexicon

React / Redux localization tool


## Installation

```
npm install redux-lexicon --save
```

## Api

#### reducer

currentLang reducer

#### setLang

update currentLang action creator

#### withLexContext( <mapStateToLang>, <mapStateToLexicon> )( WrappedComponent )

HOC - add lexicon context to App component </br>
mapStateToLang - currentLang selector </br>
mapStateToLexicon - lexicon selector

#### withLex( [componentKey] )(WrappedComponent)

HOC - add lex prop to WrappedComponent </br>
componentKey - optional, get only componentKey fields from lexicon

## Usage

1. connect lexicon and currentLang reducers to redux store

  You can take currentLang reducer and setLang action from this package

  #### data format from lexicon reducer:

  ```
  {
    "en": {
      "component1": {
        "key1": "en translate",
        "key2": "en translate"
      },
      "component2": {
        "key1": "en translate"
      }
    },
    "ru": {
      "component1": {
        "key1": "ru translate",
        "key2": "ru translate"
      },
      "component2": {
        "key1": " ru translate"
      }
    }
  }
  ```

2. wrap you root component withLexContext

  ```javascript
  import { withLexContext } from 'redux-lexicon'

  class App extends Component {
    ...
  }

  const enhanceLexContext = withLexContext(
    state => state.lang,
    state => state.lexicon
  )
  export default enhanceLexContext(App)
  ```

3. wrap you translate component withLex

  ```javascript
  import { withLex } from 'redux-lexicon'

  class YouComponent extends Component {
    ...
  }

  const enhanceLex = withLex('youComponent')
  export default enhanceLex(YouComponent)
  ```

4. get translate strings from lex prop in YouComponent
