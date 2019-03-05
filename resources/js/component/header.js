import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Header extends Component {
    constructor() {
        super()

        this.state = {
            isEnable: ""
        }

        this.toggleNavButton = this.toggleNavButton.bind(this)
    }

    toggleNavButton() {
        if(this.state.isEnable == ""){
            this.setState({isEnable: "is-active"})
        }else {
            this.setState({isEnable: ""})
        }
    }

    render() {
        return(
            <div>
                <nav className="navbar is-link is-fixed-top"  role="navigation" aria-label="main navigation">
                    <div className="container">
                    <div className="navbar-brand">
                        <a role="button" className={`navbar-burger burger ${this.state.isEnable}`} aria-label="menu" aria-expanded="false" onClick={this.toggleNavButton}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className={`navbar-menu ${this.state.isEnable}`}>
                        <div className="navbar-start">
                        <a href="/" className="navbar-item">
                            Home
                        </a>

                        <a href="/movies" className="navbar-item">
                            Movies
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                            More
                            </a>

                            <div className="navbar-dropdown">
                            <a href="/about" className="navbar-item">
                                About
                            </a>
                            <a href="/contact" className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a href="/report" className="navbar-item">
                                Report an issue
                            </a>
                            </div>
                        </div>
                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            {/* <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a> */}
                            <a href="https://github.com/nemixe" className="has-text-weight-bold has-text-white">
                                github
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}


ReactDOM.render(<Header />, document.getElementById('header'))