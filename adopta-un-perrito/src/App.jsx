
import Header from './assets/components/Header'
import { MyCard } from './assets/components/MyCard'
import Footer from './assets/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
    <div className="container w-100 text-center p-5">
      <Header titulo="Adopta un perrito"/>
      <div className="container w-100 d-flex">
        <MyCard
        url="https://cdnx.jumpseller.com/entrepatasybigotes/image/26756974/Chilean-fox-terrier_03.jpg.jpg?1662089188"
        name="Bartolo"
        description="perro de raza chilena muy atletas y listos para el trabajo."
        texto="Terrier Chileno"
        bg="primary"
        />
        <MyCard
        url="https://naricillashumedas.files.wordpress.com/2012/06/pitbull-dogs_perros-pitbull_07.jpg?w=640"
        name="Messi"
        description="perro amoroso jugeton muy sociable con las personas y los demas animales"
        texto="Pitbull"
        bg="danger"
        />
        <MyCard
        url="https://t1.ea.ltmcdn.com/es/razas/0/3/5/pastor-belga-malinois_530_0_600.jpg"
        name="Kila"
        description="perro grande para personas deportistas ue le guste la aventura."
        texto="Pastor Belga"
        bg="info"
        />
        <MyCard
        url="https://purina.cl/sites/default/files/styles/webp/public/2022-10/purina-que-sabes-de-los-perros-poodle_0.jpg.webp?itok=xBzQ0JdT"
        name="Pepona"
        description="perro muy jugeton apto para niños."
        texto="poodull"
        bg="success"
        />
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
