import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';

import './ArticleViewer.css';
import PageHeader from './PageHeader';

const mysql = require("mysql");
// ↓この情報は別の.gitignoreされたファイルから取得すること
const connection = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "D-PENS",
});


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