import MainHeader from "./components/MainHeader"
import MainContent from "./components/MainContent/MainContent"

function App() {

  return (
    <> {/*  sintassi alternativa e più utilizzata del React Fragment: `<> </>` */}
      {/*<h1>Hello world</h1>*/}
      <MainHeader /> {/*Quando utilizziamo i componenti self-closing in JSX, obbligatoriamente inserire lo slash di chiusura all'interno del tag " />" */}
      <MainContent />
    </>
  )
}

export default App
