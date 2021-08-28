class Footer extends HTMLElement {


    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container-fluid">
                <div class="d-flex justify-content-between flex-column flex-md-row">
                    <div class="d-flex flex-column flex-md-row">
                        <div class="align-self-start align-self-md-center">
                            <img src="assets/img/logotipo-footer.svg" alt="logo" class="me-4 logo-footer">
                        </div>
                        <div class="text-white mt-5 mt-md-0">
                            <p class="m-0 footer-ph-1">Centro de ayuda</p>
                            <p class="m-0 mt-4 mt-md-0" style="font-size:15px">55 500 15800</p>
                            <p class="m-0" style="font-size:15px">ayuda@trafalgardigital.mx</p>
                        </div>
                    </div>

                    <div class="links d-flex text-white flex-column flex-md-row mt-5 mt-md-0" style="font-size:15px">
                        <p class="me-4">Términos y condiciones </p>
                        <p class="me-4">Aviso de privacidad </p>
                        <p class="me-4"> Contrato de Adhesión </p>
                        <p class="m-0"> Riesgos y vulnerabilidades</p>
                    </div>
                </div>

                <div>
                    <hr class="text-white line">
                </div>

                <div class="d-flex justify-content-between flex-row-reverse flex-md-row" >
                    <div class="text-white">
                        Trafalgar 2021
                    </div>

                    <div class="d-flex">
                        <div class="me-3">
                            <img src="assets/img/facebook.svg" alt="facebook">
                        </div>
                        <div class="me-3">
                            <img src="assets/img/linkedin.svg" alt="linkedin">
                        </div>
                        <div class="me-3">
                            <img src="assets/img/twitter.svg" alt="twitter">
                        </div>
                        <div>
                            <img src="assets/img/youtube.svg" alt="youtube">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

window.customElements.define("tr-footer", Footer);