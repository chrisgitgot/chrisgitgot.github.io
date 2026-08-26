import { useState } from 'react'
import '../styles/GamesGrid.css'
import GameBox from './GameBox.jsx'

const games = [
    {
        id: 'slippery-wizards',
        title: 'Slippery Wizards',
        image: '/assets/SlipperyWizardsIcon-01.png',
        alt: 'Slippery Wizards Icon',
        description: 'A competitive tile-based tabletop card game of puzzling strategy. Slip into a world of tiles and tentacles! Flip the tiles below to transform the board! Cast spells from a deck of devious magic to claim your victory!',
        href: 'https://www.kickstarter.com/projects/largehotcoffee/slippery-wizards',
        linkLabel: 'View on Kickstarter',
    },
    {
        id: 'placeholder-1',
        title: 'Coming Soon',
        image: null,
        alt: '',
        description: "We're cooking up something new. Stay tuned.",
        href: undefined,
        linkLabel: undefined,
    },
    {
        id: 'placeholder-2',
        title: 'Coming Soon',
        image: null,
        alt: '',
        description: "We're cooking up something new. Stay tuned.",
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
