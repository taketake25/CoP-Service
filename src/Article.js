import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './Article.css';
const mysql = require("mysql");

// ↓この情報は別の.gitignoreされたファイルから取得すること
const connection = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "D-PENS",
});


class ArticleList extends Component {
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
        // let {
        //     text,
        //     markedLines
        // } = this.state;
        return (
            <div className="ArticleList">
                <div className="ArticleListHeader">

                </div>
                <div className="ArticleListBody">
                    {/* 10個分の記事のカードを表示 */}
                    <ArticleCard />
                    <ArticleCard />
                </div>
                <div className="ArticleListFooter">

                </div>
            </div>
        )
    }
}


const imagePath = "./image.png"
class ArticleCard extends Component {
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

export default ArticleList;