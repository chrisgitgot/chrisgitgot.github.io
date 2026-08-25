import { useState } from 'react'
import Navigation from './components/Navigation.jsx'
import Logo from './components/Logo.jsx'
import NewsletterForm from './components/NewsletterForm.jsx'
import GamesGrid from './components/GamesGrid.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './styles/App.css'

function App() {
    const [inverted, setInverted] = useState(false)

    return (
        <div className={`app${inverted ? ' inverted' : ''}`}>
            <div className="main-content">
                <div className="logo-container">
                    <Navigation />
                    <Logo inverted={inverted} onToggle={() => setInverted((prev) => !prev)} />
                    <NewsletterForm />
                    <GamesGrid />
                </div>

                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App
