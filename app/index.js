import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Results from './components/Results'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({theme}) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render() {
    return (

      <Router>
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>  
          <div className='container'>
            <Nav />
            <Switch>
              <Route exact path='/' component={Popular} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route render={() => <div>404</div>} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
