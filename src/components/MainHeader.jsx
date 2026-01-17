//const subtitle = `Sottotitolo dell'Header`

function MainHeader() {

  return (
//      <h2>{subtitle}</h2>
    <header>
        <figure>
            <img src="/dc-logo.png" alt="Logo DC"></img> {/* con / entro in public */}
        </figure>
        <nav>
            <ul>
                <li><a href="#">CHARACTERS</a></li>
                <li><a href="#">COMICS</a></li>
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
