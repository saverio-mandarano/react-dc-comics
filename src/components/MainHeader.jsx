//const subtitle = `Sottotitolo dell'Header`

function MainHeader() {

  return (
//      <h2>{subtitle}</h2>
    <header>
        <figure>
            <img src="/dc-logo.png" alt="Logo DC"></img> {/* con / entro in public */}
        </figure>
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
