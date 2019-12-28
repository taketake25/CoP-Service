import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './EditNewArticle.css';
import { withRouter } from 'react-router';
import PageHeader from './PageHeader';


const mysql = require("mysql");
const config = require('./config');

const connection = mysql.createConnection({
    host: config.server,
    user: config.username,
    password: config.password,
    database: config.database,
});



class EditNewArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            markedLines: [],
            submit: false
        }
        autoBind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
    }

    handleChangeText(e) {
        this.setState({

        });
    }
    handleChangeSubmit(e) {
        this.setState({
            submit: "True"
        });
    }

    render() {
        return (
            <div>
                <PageHeader />
                <div className="EditNewArticle">

                    {/* タイトルやタグを記入する部分 */}
                    <div className="EditNewArticleHeader">
                        <div className="EditNewArticleHeaderTitle">
                            <input
                                type="text"
                                placeholder="Title"
                                value={this.state.query}
                                onChange={(event) => this.handleChangeSubmit(event)}
                            />
                        </div>
                        {/* ドロップダウンから選択する方法にする．というかあとで実装する */}
                        <div className="EditNewArticleHeaderTag">
                            <input type="text" placeholder="Tags" value={this.state.query}
                                onChange={(event) => this.handleChangeSubmit(event)} />
                        </div>
                    </div>

                    {/* メインの文章を記入する部分 */}
                    <div className="EditNewArticleBody">

                        {/* 文章の太字や画像の設定をする場所． 後で実装する */}
                        {/* <div className="EditNewArticleBodyOption"></div> */}
                        <div className="EditNewArticleBodyEditor">
                            <label>
                                本文
                            <input
                                    type="text"
                                    value={this.state.text}
                                    onChange={(event) => this.handleChangeText(event)}
                                />
                            </label>
                        </div>
                        <div className="EditNewArticleBodyPreview">

                        </div>
                    </div>
                    <div className="EditNewArticleFooter">
                        <label>
                            投稿
                            <input
                                type="submit"
                                value={this.state.query}
                                onChange={(event) => this.handleChangeSubmit(event)}
                            />
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EditNewArticle);
