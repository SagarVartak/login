import React, { Component } from 'react';

class SideBar extends Component {

    render() {
        return (
            <div>
                <h1 class="visually-hidden">Sidebars examples</h1>
                <div class="d-flex flex-column p-3 text-white bg-dark" style="width:280px;">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
                        <span class="fs-4">Sidebar</span>
                    </a>
                    <hr />
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home"/></svg>
                            Home
                        </a>
                        </li>
                        <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"/></svg>
                            Dashboard
                        </a>
                        </li>
                        <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#table"/></svg>
                            Orders
                        </a>
                        </li>
                        <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#grid"/></svg>
                            Products
                        </a>
                        </li>
                        <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"/></svg>
                            Customers
                        </a>
                        </li>
                    </ul>
                    <hr />
                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                        <strong>mdo</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
        </div>
        );
        }
}

export default SideBar;