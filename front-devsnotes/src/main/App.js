import styles from  '../styles.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'


export default props => (
    <div className="container">
      <Router>
        <Routes />
      </Router>
    </div>
  )
