import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './authentication.css';
import { withRouter } from 'react-router';
import PageHeader from './PageHeader';


class authentication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // reduxによるデータ保存をしたい．
            user_name: "",
            user_password: "",
            alert: ""
        }
        autoBind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSigninSubmit = this.handleSigninSubmit.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({ user_name: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ user_password: event.target.value });
    }
    handleSubmit(e) {
        this.setState({ submit: "True" });
    }
    handleSigninSubmit(e) {
        let new_user = {
            user_name: this.state.user_name,
            user_password: this.state.user_password,
        };
        if (this.state.user_name != "" && this.state.user_password != "") {
            fetch("http://192.168.0.13:4000/user/create", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(new_user)
            });
            this.props.history.push('/')
        } else {
            this.setState({ alert: "情報が入力されていません" })
        }
    }

    render() {
        return (
            <div>
                <PageHeader />
                <div className="auth">
                    <div className="signin">
                        signin(mailがないからloginとの差別化が...)
                        <input
                            type="text"
                            placeholder="input your user_name"
                            value={this.state.query}
                            onChange={(event) => this.handleChangeUsername(event)}
                        />
                        <input
                            type="text"
                            placeholder="input your password"
                            value={this.state.query}
                            onChange={(event) => this.handleChangePassword(event)}
                        />
                        <button onClick={this.handleSigninSubmit}>signinするで</button>
                    </div>
                    <div className="login">
                        login
                        <input
                            type="text"
                            placeholder="input your user_name"
                            value={this.state.query}
                            onChange={(event) => this.handleChangeUsername(event)}
                        />
                        <input
                            type="text"
                            placeholder="input your password"
                            value={this.state.query}
                            onChange={(event) => this.handleChangePassword(event)}
                        />
                        <button onClick={this.handleSubmit}>loginするで</button>
                    </div>
                </div>
                <div className="alert"><p>{this.state.alert} <br /></p></div>
            </div >
        );
    }
}

export default withRouter(authentication);