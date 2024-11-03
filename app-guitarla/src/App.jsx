import Header from "./components/Header"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"



function App() {

  return (
    <>
        
    <Header></Header>r
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
           <Guitar></Guitar>
        </div>
    </main>

    <Footer></Footer>
    
    </>
  )
}

export default App
