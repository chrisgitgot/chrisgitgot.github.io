import '../styles/Logo.css'

const NORMAL_LOGO = '/assets/ExploderLogo-WHITE.svg'
const FROWN_LOGO = '/assets/ExploderLogo-WHITE-FROWN.svg'

function Logo({ inverted, onToggle }) {
    return (
        <img
            id="logo"
            src={inverted ? FROWN_LOGO : NORMAL_LOGO}
            alt="EXPLODER Logo"
            onClick={onToggle}
        />
    )
}

export default Logo
