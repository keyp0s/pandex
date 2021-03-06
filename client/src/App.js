import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Create from './pages/create/Create'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import Settings from './pages/settings/Settings'
import Register from './pages/register/Register'
import Quiz from './pages/quiz/Quiz'
import Guide from './pages/guide/Guide'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './context/Context'

function App() {
    const { user } = useContext(Context)
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/guide'>
                    <Guide />
                </Route>
                <Route path='/quiz'>
                    <Quiz />
                </Route>
                <Route path='/create'>{user ? <Create /> : <Register />}</Route>
                <Route path='/login'>{user ? <Home /> : <Login />}</Route>
                <Route path='/register'>{user ? <Home /> : <Register />}</Route>
                <Route path='/settings'>
                    {user ? <Settings /> : <Register />}
                </Route>
                <Route path='/post/:postId'>
                    <Single />
                </Route>
            </Switch>
        </Router>
    )
}
export default App
