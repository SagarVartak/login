import React, { Component } from 'react';
import "../styles/header.css"
class Header extends Component {
    render() {
        return (
            <div>
            <header>
            <div class="px-3 py-2 bg-dark text-white">
              <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
                  </a>
        
                  <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-capitalize">
                    <li>
                      <a href="/home" class="nav-link text-secondary">
                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home"/></svg>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard" class="nav-link text-white">
                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"/></svg>
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="/orders" class="nav-link text-white">
                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"/></svg>
                        Orders
                      </a>
                    </li>
                    <li>
                      <a href="/products" class="nav-link text-white">
                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#grid"/></svg>
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="/customers" class="nav-link text-white">
                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#people-circle"/></svg>
                        Customers
                      </a>
                    </li>
                  </ul>
                  <div class="col-md-2 text-end">
                      <button type="button" class="btn btn-primary" onClick={this.props.out}>Logout</button>
                 </div>
                </div>
              </div>
            </div>
          </header>
          </div>
        );
    }
}

export default Header;