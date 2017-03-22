import React from 'react';

const LoginForm = React.createClass({
    handleClick: function(event) {
        event.preventDefault();
        var username = this.refs.username.value,
            password = this.refs.password.value;

        if (username != password) {
            alert('Username or password incorrect');

        } else {
            alert('Welcome home');
        }
    },
    render: function() {
        var avatarUrl = '../img/avatar_2x.png';

        return (
            <div className="login-panel">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card" src={avatarUrl} />
                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="text" className="form-control" placeholder="Username" ref="username" />
                        <input type="password" className="form-control" placeholder="Password" ref="password" />

                        <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={this.handleClick}>Sign in</button>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = LoginForm;