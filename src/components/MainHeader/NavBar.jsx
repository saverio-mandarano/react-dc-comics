const NavBar = () => {

    // dati per i link di navigazione
    const navItems = [
        { id: 1, text: 'CHARACTERS', url: '#', current: false },
        { id: 2, text: 'COMICS', url: '#', current: true },
        { id: 3, text: 'MOVIES', url: '#', current: false },
        { id: 4, text: 'TV', url: '#', current: false },
        { id: 5, text: 'GAMES', url: '#', current: false },
        { id: 6, text: 'COLLECTIBLES', url: '#', current: false },
        { id: 7, text: 'VIDEOS', url: '#', current: false },
        { id: 8, text: 'FANS', url: '#', current: false },
        { id: 9, text: 'NEWS', url: '#', current: false },
        { id: 10, text: 'SHOP', url: '#', current: false },
    ];




    const navItemsRender = navItems.map((navItem) => {
        return (
        // rendering array ritornato dal map
            <li key={navItem.id}>
                <a href={navItem.url}
                    className={navItem.current ? 'active' : ''}>
                    {navItem.text}
                </a>
            </li>
        )
    });

    return (
        <nav>
            <ul className="flex">
                {navItemsRender}
            </ul>
        </nav>
    )
};

export default NavBar;
