import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'learn www.nanisai.com'},
  {id: 3, suggestion: 'Price of Ethereum today'},
  {id: 4, suggestion: 'Latest trends in AI'},
  {id: 5, suggestion: 'Latest 3nath tutorials'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App
