import React, { Component } from 'react'

import Navigation from "../../components/landing-page/navigation/Navigation.js";
import Header from "../../components/landing-page/heading/Header.js";

class LandingPage extends Component {
    login = () => {
        this.props.auth.login();
    }

    logout = () => {
        this.props.auth.logout();
    }

    componentDidMount() {
        const { renewSession } = this.props.auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    render() {
        return (
            <div>
                <Navigation login={this.login} logout={this.logout} history={this.props.history}/>
                <Header/>
                <button onClick={() => {
                    localStorage.setItem('acct_type', "advertiser")
                    }}>
                    Advertiser
                </button>

                <button onClick={() => {
                    localStorage.setItem('acct_type', "affiliate")
                    }}>
                    Affiliate
                </button>
            </div>
        )
    }
}

export default LandingPage
