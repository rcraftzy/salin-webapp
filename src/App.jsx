import './App.css'
import { Route } from 'wouter'
import Home from './pages/Home'
import HomeApp from './pages/HomeApp'
import Videos from './pages/Videos'

function App() {
  return (
    <div className="App">
      <main>
        <Route path='/'>
          <Home />
        </Route>
        <section className="content">
          <Route path='/app'>
            <HomeApp />
          </Route>
          <Route path='/videos'>
            <Videos />
          </Route>
        </section>
      </main>
    </div>
  )
}
export default App
