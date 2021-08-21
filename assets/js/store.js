class Store extends HTMLElement {


    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="store">
            <div class="d-flex banner-main align-items-center justify-content-center py-5 py-md-0">
                <div class="text-center">
                    <h2 class="title">¿Listo para comenzar?</h2>
                    <p class="copy px-5 px-md-0 mt-5 mt-md-0">Descarga la aplicación Trafalgar y abre tu cuenta en minutos.</p>

                    <div class="mt-5 d-none d-md-block">
                        <img src="assets/img/store.svg" alt="">
                    </div>

                    <div class="mt-5 d-block d-md-none">
                        <img src="assets/img/store-mobile.svg" alt="">
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

window.customElements.define("tr-store", Store);