import React, {Component} from "react";
import PropTypes from "prop-types";
import "../../client/main.css";

import AccountsUIWrapper from "./AccountsUser.jsx";

class App extends Component {
    constructor(props) {
        super(props);

        this.ayudas = [];
        this.puntos = 0;
        this.agregarUsuario;
    }

    agregarUsuario() {
        Meteor.call('tasks.insert', Meteor.user().profile.name, Meteor.user()._id, [usuario.ayudas], usuario.puntos);
    }
    loginWithFacebook() {
        Meteor.loginWithFacebook({ requestPermissions: ['public_profile', 'email'], loginStyle: 'redirect' }, (err) => {

            this.zone.run(() => {
                if (err) {
                    this.error = err;
                } else {
                    console.log('done');
                }
            });
        });
    }
    render() {
        console.log(Meteor.user());
        if(Meteor.user()!== undefined && Meteor.user()!==null) {
            console.log(Meteor.userId());
            return (
                <div>
                    <AccountsUIWrapper/>
                    <h2>PERFIL</h2>
                    
                </div>
            )
        }
        else {
            return (
                <div>
                    <div id="imagen">
                        <h2>IMAGEN</h2>
                    </div>
                    <div id="inicio">
                        <AccountsUIWrapper/>
                    </div>
                </div>
            )
        }
    }
}

if(Meteor.user()){
    Meteor.subscribe('myuser');
}

App.propTypes = {

};

export default App;