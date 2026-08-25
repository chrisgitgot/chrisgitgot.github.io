import { useState } from 'react'
import '../styles/GamesGrid.css'
import GameBox from './GameBox.jsx'

const games = [
    {
        id: 'slippery-wizards',
        title: 'Slippery Wizards',
        image: '/assets/SlipperyWizardsIcon-01.png',
        alt: 'Slippery Wizards Icon',
        description: 'A tabletop card game of mischief and magic. Outwit your fellow wizards before they outwit you.',
        href: 'https://www.kickstarter.com/projects/largehotcoffee/slippery-wizards',
        linkLabel: 'View on Kickstarter',
    },
    {
        id: 'placeholder-1',
        title: 'Coming Soon',
        image: null,
        alt: '',
        description: "We're cooking up something new. Details soon.",
        href: undefined,
        linkLabel: undefined,
    },
    {
        id: 'placeholder-2',
        title: 'Coming Soon',
        image: null,
        alt: '',
        description: "We're cooking up something new. Details soon.",
        href: undefined,
        linkLabel: undefined,
    },
]

function GamesGrid() {
    const [expandedId, setExpandedId] = useState(null)

    return (
        <>
            <h2 className="games-heading">↓&nbsp; our games &nbsp;↓</h2>
            <div className={`games${expandedId ? ' games--expanded' : ''}`}>
                {games
                    .filter((game) => !expandedId || game.id === expandedId)
                    .map((game) => (
                        <GameBox
                            key={game.id}
                            game={game}
                            expanded={game.id === expandedId}
                            onToggle={() =>
                                setExpandedId((prev) => (prev === game.id ? null : game.id))
                            }
                        />
                    ))}
            </div>
        </>
    )
}

export default GamesGrid
