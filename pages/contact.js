export default class ContactPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="contact" class="page">
        <div class="header-container caption-mobile">    
        <h2>Events</h2>
        </div>
  
        <section class="carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/net.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5>Events</h5>
            </div>
          </div>
        </div>
      </div>
        </section>

<section class="faq-grid">
<h2>FAQ</h2>
<section class="grid-container">
<article class="grid-item">
<h3>Hvad koster havnebadet?</h3>
<p>Havnebadet er gratis at besøge, og du kan finde åbningstiderne under faciliteter.</p>
</article>

<article class="grid-item">
<h3>Hvor ligger Havnebadet henne?</h3>
<p>Det ligger ude på Aarhus Ø, hvor der også findes parkering til biler og cykler.</p>
</article>

<article class="grid-item">
<h3>Hvorfor vinterbadning?</h3>
<p>Vinterbadning er sundt for kroppen og du bliver frisk, du får også en masse energi.</p>
</article>

<article class="grid-item">
<h3>Er der sauna og omklædning?</h3>
<p>Der er to saunaer du frit kan benytte, et omklædningsrum til kvinder og et til mænd.</p>
</article>

<article class="grid-item">
<h3>Må man medbringe alkohol?</h3>
<p>et må man desværre ikke, dog er du velkommen til at medbringe din egen kaffe.</p>
</article>
</section>

<section class="contact">
<figure>
<img src="./images/img_1367.jpg" alt=".jpg" id="badering">
</figure>

<form>
<div class="input-wrapper">
<input type="text" id="name" name="name" placeholder="Navn">
<input type="text" id="email" name="email" placeholder="Email">
</div>
<textarea placeholder="Skriv til os"></textarea>
<div class="button-wrapper">
<button type="submit" form="form" value="Submit">Send</button>
</div>
</form>
</section>



</section>
        </section>
      `;
  }
}
