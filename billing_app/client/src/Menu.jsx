import React from "react";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">SnackWagon</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#billingNavbar"
          aria-controls="billingNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div className="collapse navbar-collapse" id="billingNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#billing">Billing</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#inventory">Inventory</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reports">Reports</a>
            </li> 
            
          </ul>
        </div> */}
        <div>
          <h3> Self Order</h3>
        </div>
        <div className="menuDropdown">
          
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#settings">Admin</a></li>
                  <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#help">Settings</a></li>
              
               
              </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Menu;
