//const subtitle = `Sottotitolo dell'Header`

function MainHeader() {

  return (
//      <h2>{subtitle}</h2>
    <header>
        <div className="container flex">
            <figure>
                <img src="/dc-logo.png" alt="Logo DC"/> {/* con / entro in public - sempre slash di chiusura tag */}
            </figure>
            <nav>
                <ul className="flex">
                    <li><a href="#">CHARACTERS</a></li>
                    <li><a href="#" className="active">COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default MainHeader

//oppure
// export default function MainHeader() {
//   return (
//       <h1>Hello world</h1>
//   )
// }


//oppure
// const MainHeader = () => {
//     return (
//       <h2>Header</h2>
//   )
// }

// export default MainHeader
