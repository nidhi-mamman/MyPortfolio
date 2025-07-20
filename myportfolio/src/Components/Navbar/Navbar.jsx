const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        <li class="nav-item me-5 fs-5 fw-bolder">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item me-5 fs-5 fw-bolder">
                            <a class="nav-link" href="#">About</a>
                        </li>
                         <li class="nav-item me-5 fs-5 fw-bolder">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                         <li class="nav-item me-5 fs-5 fw-bolder">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                         <li class="nav-item me-5 fs-5 fw-bolder">
                            <a class="nav-link" href="#">Skills</a>
                        </li>
                         <li class="nav-item me-5 fs-5 fw-bolder">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
    )
}

export default Navbar