import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './authentication.css';
import { withRouter } from 'react-router';
import PageHeader from './PageHeader';
import { withCookies, Cookies } from 'react-cookie';
import { HomeFooter } from './Home';

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

    componentWillMount() { // コンポー年とがDOMに追加される前に一度だけ呼ばれる → 初期化処理に適している
        const { cookies } = this.props;
        this.state = {
            user_name: cookies.get("user_name") || "",
            user_password: cookies.get("user_password") || ""
        }
    }

    handleChangeUsername(event) {
        this.setState({ user_name: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ user_password: event.target.value });
    }
    handleSubmit(e) {
        this.setState({ submit: "True" });
        const { cookies } = this.props;
        var user_name = this.state.user_name;
        var user_password = this.state.user_password;

        //ここにログイン情報が正しいかの確認処理を行うPOST

        if (this.state.user_name == "" && this.state.user_password == "") {
            this.setState({ alert: "情報が入力されていません" })
        } else {
            let user_info = {
                user_name: this.state.user_name,
                user_password: this.state.user_password,
            };
            fetch("http://192.168.0.13:4000/user/auth", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user_info)
            });
            this.props.history.push('/')

            // あるサイト曰く，このcookieの保存方法はセキュリティ上最悪の実装方法である．
            // セキュリティの向上のためには，BASE64によるハッシュ値のみを保存し，1か月に1度の頻度で更新すること．
            cookies.set('user_name', user_name, { path: '/' });
            cookies.set('user_password', user_password, { path: '/' });

            this.setState({ user_name });
            this.setState({ user_password });

            this.props.history.push('/')
        }
    }

    handleSigninSubmit(e) {
        let new_user = {
            user_name: this.state.user_name,
            user_password: this.state.user_password,
        };
        if (this.state.user_name !== "" && this.state.user_password !== "") {
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
                        新規登録
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
                        <button onClick={this.handleSigninSubmit}>新規登録するで</button>
                    </div>
                    <div className="login">
                        ログイン
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
                        <button onClick={this.handleSubmit}>ログインするで</button>
                    </div>
                </div>
                <div className="alert"><p>{this.state.alert} <br /></p></div>
                <HomeFooter />
            </div >
        );
    }
}

export default withCookies(authentication);