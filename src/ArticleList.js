import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './ArticleList.css';
const mysql = require("mysql");

const config = require('./config');

const connection = mysql.createConnection({
    host: config.server,
    user: config.username,
    password: config.password,
    database: config.database,
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

        return (
            <div className="ArticleList">
                <div className="ArticleListHeader">
                    <div className="ArticleListCategory">
                        ここの文章を検索内容によって変えたい．
                        {this.state.text}
                    </div>
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


const imagePath = "./image3.png"
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
                    <div className="ArticleCardTitle"><a href="/ArticleViewer" style={{}}>記事のタイトルやでな</a></div>
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