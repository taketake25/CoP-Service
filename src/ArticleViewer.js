import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';

import './ArticleViewer.css';
import PageHeader from './PageHeader';

const mysql = require("mysql");
const config = require('./config');

// const connection = mysql.createConnection({
//     host: config.server,
//     user: config.username,
//     password: config.password,
//     database: config.database,
// });
// connection.connect();
// var insert_command = "INSERT INTO users (user_name, password) VALUES ('ttyo','b')";
// // userdataの取得
// connection.query('SELECT * from users;', function (err, rows, fields) {
//     if (err) { console.log('err: ' + err); }
//     for (var i = 0; i < rows.length; i++) {
//         console.log('id: ' + rows[i].user_id + '  name: ' + rows[i].user_name);
//     }
// });
// connection.end();
// console.log('');

class ArticleViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            markedLines: []
        }
        autoBind(this);


    }

    render() {
        // let {
        //     text,
        //     markedLines
        // } = this.state;
        return (
            <div>
                <PageHeader />

                <div className="ArticleViewer">
                    <div className="ArticleViewerHeader">
                        Headerやで
                    </div>

                    <ArticleBody />

                    <div className="ArticleViewerFooter">

                    </div>
                </div>
            </div>
        )
    }
}


const imagePath = "./image3.png"
class ArticleBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            markedLines: []
        }
        autoBind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeQuery = this.handleChangeQuery.bind(this);
    }
    handleClick(e) {
        this.setState(
            { b: !this.state.a }
        );
    }
    handleChangeQuery(e) {
        this.setState({
            query: "query text"
        });
    }
    render() {
        return (
            <div className="ArticleCard">

                <div className="ArticleMetaData">
                    <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='user imaga' />
                    <div className="ArticleCardTitle">記事のタイトルやでな</div>
                    <div className="ArticleCardDay">2019/12/25 18:51</div>
                </div>
                <div className="ArticleTag">記事のタグがここに来るんやで</div>
                <div className="ArticleCardAgenda">
                    記事の概要が表示されるんやで．この記事には何が書かれるかの想定としては，質問や作成したもの，勉強会の参加者募集，勉強内容の共有（Qiitaみたいな）などがあげられます．
                </div>
            </div>
        );
    }
}

export default withRouter(ArticleViewer);