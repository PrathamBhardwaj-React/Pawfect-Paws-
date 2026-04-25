
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
export default function AdminNavbar(){
    let isLogin=sessionStorage.getItem("isLogin")
    const nav=useNavigate()
    ///sweetalert2
    const logout=()=>{

        Swal.fire({
        title: "Are you sure you want to logout?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!"
        }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.clear()
            nav("/login")
            Swal.fire({
            title: "Logout!",
            text: "Logout successfully.",
            icon: "success"
            });
        }
        });
    }
    return(
        <>
        <div className="wrap">
            <div className="container">
             <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                <p className="mb-0 phone pl-md-2">
                    <a href="#" className="mr-2">
                    <span className="fa fa-phone mr-1" /> +91 6283582131
                    </a>
                    <a href="mailto:prathambhardwaj788@gmail.com" target="_blank">
                    <span className="fa fa-paper-plane mr-1" /> prathambhardwaj788@gmail.com
                    </a>
                </p>
                </div>
                <div className="col-md-6 d-flex justify-content-md-end">
                <div className="social-media">
                    <p className="mb-0 d-flex">
                    <a
                        href="mailto:prathambhardwaj788@gmail.com"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <span className="fa fa-envelope">
                        <i className="sr-only">Email</i>
                        </span>
                    </a>
                    <a
                        href="https://github.com/PrathamBhardwaj-React"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <span className="bi bi-github">
                        <i className="sr-only">Github</i>
                        </span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pratham-bhardwaj-93907235b/" target="_blank"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <span className="bi bi-linkedin">
                        <i className="sr-only">Linkedin</i>
                        </span>
                    </a>
                 
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
        >
          
              <div className="container">
      <a className="navbar-brand" href="index.html">
        <span className="flaticon-pawprint-1 mr-2" />
      Pet Heaven
      </a>
      <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#ftco-nav"
         aria-controls="ftco-nav"
         aria-expanded="false"
         aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
                      <Link to="/admin"  className="nav-link">
                        HOME
                      </Link>
                    </li>



                    <li className="dropdown nav-item">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        BREEDS
                    </a>

                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/admin/breed/add" className="dropdown-item">ADD</Link>
                        <Link to="/admin/breed/manage" className="dropdown-item">MANAGE</Link>
                     </div>
                    </li>

                    

                    <li className="dropdown nav-item">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        NGO
                    </a>

                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/admin/ngo/add" className="dropdown-item">ADD</Link>
                        <Link to="/admin/ngo/manage" className="dropdown-item">MANAGE</Link>
                     </div>
                    </li>

                    <li className="nav-item">
                      <Link to={"/admin/users/manage"} className="nav-link">
                        USERS
                      </Link>
                    </li>
                    


                    <li className="nav-item">
                      <Link to={"/admin/adoptionRequest/view"} className="nav-link">
                        ADOPTION REQUESTS
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/admin/petListing/manage"} className="nav-link">
                        PETS
                      </Link>
                    </li>


                     {
                        isLogin?
                        <li className="nav-item">
                            <Link to={"#"} onClick={logout} className="nav-link">
                                LOGOUT
                            </Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                LOGIN
                            </Link>
                        </li>
                    }
                    
                  

                      


     </ul>
      </div>
    </div>
        </nav>
        {/* END nav */}
        </>
    )
}