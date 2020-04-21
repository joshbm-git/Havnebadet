export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <nav class="navbar navbar-expand-lg navbar-light bg-light tabbar">
    <a class="navbar-brand" href="#home">
    <img src="./images/logo.svg" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#facilities">
            Faciliteter
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#winterbathing">
            Vinterbadning
          </a>
        </li>
  
        <li class="nav-item">
          <a class="nav-link" href="#events">
            Events
          </a>
        </li>
  
        <li class="nav-item">
          <a class="nav-link" href="#contact">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  </nav>
  
    `;
  }
}
