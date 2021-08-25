class Navbar extends HTMLElement {

    constructor() {
        super();
        this.item;
    }


    static get observedAttributes(){
        return ['item'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
            this.item = newValue;
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark navbar--height bg-orange fixed-top" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">
                    <img src="./assets/img/logotipo.svg" alt="Logo" width="77" height="49">
                </a>
                <a class="nav-link no-hover btn-open-account d-block d-md-none ms-5" href="#!">Solicita ahora</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

               
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav font-weight-bold ms-auto">
                        <div class="d-block d-md-none offcanvas-header my-3 d-flex justify-content-between px-0">
                           <div class="label-menu-mobile">
                               Menú
                           </div>
                           <div>
                               <a href="#" class="text-decoration-none text-white btn-equis-close"><img src="assets/img/close-button.svg" alt="Cerrar"> </a>
                           </div>
                        </div>
                        <li class="nav-item me-3 py-3 py-lg-0 d-block d-md-none"><a class="nav-link text-white" href="./index.html">
                                Home</a></li>
                        <li class="nav-item me-3 py-2 py-lg-0 d-none d-md-block"><a class="nav-link text-white ${this.item == 'tarjeta' ? 'active' : '' }" href="./tarjeta-trafalgar.html">Tarjeta
                                Trafalgar</a></li>
                        <li class="nav-item me-3 py-2 py-lg-0 d-none d-md-block"><a class="nav-link text-white ${this.item == 'transferencia' ? 'active' : '' } "
                                href="#!">Transferencias</a></li>
                        <li class="nav-item me-3 py-2 py-lg-0 d-none d-md-block"><a class="nav-link text-white ${this.item == 'pago' ? 'active' : '' }" 
                                href="#!">Pago de servicios</a></li>
                        <li class="nav-item dropdown py-3 d-block d-md-none">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Funcionalidades
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li class="list-drop"><a class="dropdown-item py-3" href="./tarjeta-trafalgar.html">Tarjeta Trafalgar</a></li>
                            <li class="list-drop"><a class="dropdown-item py-3" href="#!">Transferencias</a></li>
                            <li class="list-drop"><a class="dropdown-item py-3" href="#!">Pago de servicios</a></li>
                            </ul>
                        </li>
                        <li class="nav-item me-3 py-3 py-lg-0"><a class="nav-link text-white ${this.item == 'nosotros' ? 'active' : '' } "
                                href="./nosotros.html">Nosotros</a></li>
                        <li class="nav-item me-3 py-3 py-lg-0 list-drop"><a class="nav-link text-white ${this.item == 'centro' ? 'active' : '' } "
                                href="./centro-ayuda.html">Centro de ayuda</a></li>
                    
                     

                        <li class="nav-item mt-4 py-lg-0 d-block d-md-none"> <a class="nav-link no-hover btn-open-account-mobile text-center text-white" href="#!">Abre tu cuenta ahora</a></li>
                    </ul>
                </div>

                <a class="nav-link no-hover btn-private-site d-none d-lg-flex me-3" href="#!" style="font-size:13px">Acceso a mi sitio
                    privado</a>
                <a class="nav-link no-hover btn-open-account d-none d-lg-flex" href="#!" style="font-size:13px">Abre tu cuenta</a>
            </div>
        </nav>
        `;
    }
}

window.customElements.define("tr-navbar", Navbar);