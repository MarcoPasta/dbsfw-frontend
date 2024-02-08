import './Navbar.css'

export default function Navbar () {
    return (
        <>
        <nav className="navcontainer">
            <ul className="navmenu">
                <li>
                    <div>Intro</div>
                </li>
                <li>
                    <div>Portfolio</div>
                </li>
                <li>
                    <div>Timeline</div>
                </li>
            </ul>
            <div className="line"/> 
        </nav>
    </>
    )
}