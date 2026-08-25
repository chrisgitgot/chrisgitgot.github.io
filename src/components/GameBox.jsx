function GameBox({ game, expanded, onToggle }) {
    if (expanded) {
        return (
            <div className="game-box game-box--expanded">
                <button type="button" className="game-box__close" onClick={onToggle} aria-label="Close">
                    ×
                </button>
                <div className="game-box__expanded-content">
                    {game.image && (
                        <img className="game-box__image" src={game.image} alt={game.alt} />
                    )}
                    <div className="game-box__info">
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                        {game.href && (
                            <a
                                className="game-box__link"
                                href={game.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {game.linkLabel}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <button type="button" className="game-box" onClick={onToggle}>
            {game.image ? (
                <img className="game-box__image" src={game.image} alt={game.alt} />
            ) : (
                <span className="game-box__placeholder">?</span>
            )}
            <span className="game-box__title">{game.title}</span>
        </button>
    )
}

export default GameBox
