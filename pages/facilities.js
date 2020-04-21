export default class FacilitiesPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="facilities" class="page">

        <div class="header-container caption-mobile">    
        <h2>Faciliteter</h2>
        </div>
  
        <section class="carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/img_1320.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5>Faciliteter</h5>
            </div>
          </div>
        </div>
      </div>
        </section>
        <section class="info-box">
        <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              &Aring;bningstider
              </button>
            </h5>
          </div>
      
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
            <table>
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
            <figure>
            <img src="./images/bridge.JPG" alt="" />
          </figure>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Sauna
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              <figure>
              <img src="./images/sauna%20kopi.jpg" alt="">
          </figure>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Basin
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            <figure>
            <img src="./images/basin.jpg" alt="">
        </figure>
            </div>
          </div>

          <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
              Kaffe &amp; Mad
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            <figure>
            <img src="./images/img.jpg" alt="">
        </figure>
           </div>
          </div>

          <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
              Regler
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
            <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            <figure>
            <img src="./images/ring.JPG" alt="">
              </div>
          </div>
        </div>
</section>
</section>

      `;
  }
}
