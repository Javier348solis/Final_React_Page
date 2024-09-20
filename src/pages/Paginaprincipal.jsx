import React from 'react'
import Navbar from '../components/Navbar'

function Paginaprincipal() {
  return (
    <div>
      <Navbar/>

      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="src/Img/img relojes/WhatsApp Image 2024-09-09 at 10.58.38 AM.jpeg" class="d-block w-100" alt="" width={300} height={300}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Reloj inteligente</h5>
        <p>₡20.000(Incluye audifonos)</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="src/Img/img otros/WhatsApp Image 2024-09-09 at 10.58.55 AM.jpeg" class="d-block w-100" alt="" width={300} height={300}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Parlante con audifonos T&G</h5>
        <p>₡25.000 (Incluye cargador tipo c)</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="src/Img/img celulares/WhatsApp Image 2024-09-09 at 10.58.11 AM.jpeg" class="d-block w-100" alt="" width={300} height={300}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Conjunto de cables tipo C charging</h5>
        <p>₡7.000 (Garantia: 2 meses)</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
export default Paginaprincipal
