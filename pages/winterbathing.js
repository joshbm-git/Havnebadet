export default class WinterbathingPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="winterbathing" class="page">
        <div class="header-container caption-mobile">    
        <h2>Vinterbadning</h2>
        </div>
  
        <section class="carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/banner_1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5>Vinterbadning</h5>
            </div>
          </div>
        </div>
      </div>
        </section>

        <section class="winter-info">
        <div class="winter-flex-tablet">
            <article class="winter-about">
                <h3> Hvordan påvirker vinterbadning kroppen?</h3>
                <p> Spørger du en vinterbader, kan du være sikker på, at de gode grunde til at hoppe i det iskolde vand står i kø: Du får et bedre immunforsvar og bliver derfor mindre syg om vinteren, du får mere energi og får det simpelthen bare bedre. ’At gå ned igennem et hul i isen er totalt fedt, men grødis er det bedste,’ sagde en vinterbader for nylig.</p>

                <p>Måske hører du til en af dem, der tænker gys, men alligevel drømmer om at være lige så sej og få det adrenalinsus, som vinterbadningen giver. I så fald er den nemmeste vej at begynde træningen fysisk og mentalt netop nu, mens vandet har en temperatur, som ikke kun er for vikinger. Det råder flere erfarne vinterbadere til. </p>
            </article>

            <article class="winter-data">
                <div class="box">
                    <h5>Vandtemperatur</h5>
                    <p> 0º</p>
                </div>
                <div class="box">
                    <h5>Bassindybde</h5>
                    <p> 2m</p>
                </div>
                <div class="box">
                    <h5>Bassinstørrelse</h5>
                    <p> 20x30m</p>
                </div>
            </article>
            </div>
            <article class="winter-flex-laptop">
            <article class="winter-tips">
                <h3> 5 gode tips </h3>
                <ul>
                    <li> Varm dine muskler op før du går i vandet</li>
                    <li> Træk vejret roligt bår du går i vandet </li>
                    <li> Tag kun et kort dyp på 5 til 10 sekunder</li>
                    <li> Tag varmt tøj på efter badning og drik noget varmt</li>
                    <li> Gå ikke under vandet hvis du er påvirket af Alkohol</li>
                </ul>

                </article>
            <figure>
            <img src="./images/mandemand.jpg" alt="mand i vand">
            </figure>
   
            </article>

            </section>

            </div>
        </section>

        </section>
      `;
  }
}
