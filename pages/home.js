export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="home" class="page">
      <div class="header-container caption-mobile">      <h2>Havnebadet</h2>
      <h3>Bassin 7</h3></div>

      <section class="carousel">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./images/slideshowimg1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Havnebadet</h5>
            <p>Bassin 7</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./images/slideshowimg2.jpeg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
          <h5>Havnebadet</h5>
          <p>Bassin 7</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./images/slideshowimg3.jpeg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
          <h5>Havnebadet</h5>
          <p>Bassin 7</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    </section>

    <section class="openings">
    <div class="table-container">
      <table>
      <div class="header-container">
      <h2>Åbningstider</h2>
    </div>
        <tr>
          <th>Mandag:</th>
          <th>Lukket</th>
        </tr>
        <tr>
          <th>Tirsdag:</th>
          <th>Lukket</th>
        </tr>
        <tr>
          <th>Onsdag:</th>
          <th>Lukket</th>
        </tr>
        <tr>
          <th>Torsdag:</th>
          <th>Lukket</th>
        </tr>
        <tr>
          <th>Fredag:</th>
          <th>Lukket</th>
        </tr>

        <tr>
          <th>Lørdag:</th>
          <th>08.00 - 12.00</th>
        </tr>

        <tr>
          <th>Søndag:</th>
          <th>08.00 - 12.00</th>
        </tr>
      </table>
      </div>
      <figure>
      <img src="./images/bridge.JPG" alt="" />
    </figure>
    </div>

    </section>
    <section class="gallery">
    <div class="header-container">
    <h2>INSTAGRAM: BASSIN 7</h2>
    <h3>DEL DINE ØJEBLIKKE #VORESHAVNEBAD</h3>
    </div>
    

    <section id="gallery2">
      <figure><img src="./images/instagram1.jpg" alt="" /></figure>
      <figure><img src="./images/instagram2.jpg" alt="" /></figure>
      <figure><img src="./images/instagram3.jpg" alt="" /></figure>
      <figure><img src="./images/instagram4.jpg" alt="" /></figure>
      <figure><img src="./images/instagram1.jpg" alt="" /></figure>
    </section>
  </section>

  <section class="map">

 <div class="header-container">
      <h2>Find os her</h2>
    </div>
    <figure>
      <img src="./images/map.jpg" alt="" />
    </figure>
  </section>

  </section>
    `;
  }
}
