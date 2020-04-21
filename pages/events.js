export default class EventsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="events" class="page">
        <div class="header-container caption-mobile">    
        <h2>Events</h2>
        </div>
  
        <section class="carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/banner.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5>Events</h5>
            </div>
          </div>
        </div>
      </div>
        </section>

        <section class="event-grid">
        <h2>Arrangementer ved Havnebadet</h2>

        <section class="grid-container">
     <article class="grid-item">
     <p class="date">Lørdag d. 2. marts 2019</p>
     <figure>
     <img src="./images/marts1.jpg"/>
     </figure>
     <p class="time">13:00-14:00</p>
     <h3>Udspring-event</h3>
     </article>

     <article class="grid-item">
     <p class="date">Søndag d. 3. marts 2019</p>
     <figure>
     <img src="./images/marts2.jpg"/>
     </figure>
     <p class="time">22:00-01:00</p>
     <h3>Fuldmåneaften</h3>
     </article>

     <article class="grid-item">
     <p class="date">Fredag d. 22. marts 2019</p>
     <figure>
     <img src="./images/marts3.jpg"/>
     </figure>
     <p class="time">15:00-17:00</p>
     <h3>Water Complex</h3>
     </article>

     <article class="grid-item">
     <p class="date">Lørdag d. 13. april 2019</p>
     <figure>
     <img src="./images/april1.jpg"/>
     </figure>
     <p class="time">20:00-21:00</p>
     <h3>Helseaften</h3>
     </article>

     <article class="grid-item">
     <p class="date">Fredag d. 19. april 2019</p>
     <figure>
     <img src="./images/april2.jpg"/>
     </figure>
     <p class="time">17:00-18:00</p>
     <h3>Saunagus</h3>
     </article>

     <article class="grid-item">
     <p class="date">Søndag d. 28. april 2019</p>
     <figure>
     <img src="./images/april3.jpg"/>
     </figure>
     <p class="time">14:00-18:00</p>
     <h3>Fredagsbar</h3>
     </article>

     <article class="grid-item">
     <p class="date">Lørdag d. 12. maj 2019</p>
     <figure>
     <img src="./images/maj1.jpg"/>
     </figure>
     <p class="time">16:00-17:00</p>
     <h3>The Street Coffee Running Club</h3>
     </article>

     <article class="grid-item">
     <p class="date">Lørdag d. 19. maj 2019</p>
     <figure>
     <img src="./images/maj2.jpg"/>
     </figure>
     <p class="time">19:00-21:00</p>
     <h3>Midvinterjazz</h3>
     </article>

     <article class="grid-item">
     <p class="date">Fredag d. 24. maj 2019</p>
     <figure>
     <img src="./images/maj3.jpg"/>
     </figure>
     <p class="time">18:00-00:00</p>
     <h3>Champagnefredag</h3>
     </article>

     
        
        
        </section>
        </section>
        </section>
      `;
  }
}
