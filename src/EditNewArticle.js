import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './EditNewArticle.css';
import { withRouter } from 'react-router';
import PageHeader from './PageHeader';
import marked from 'marked';
import sanitize from 'sanitize-html';


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
            text: " ",
            markedLines: [],
            submit: false
        }
        autoBind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
    }

    handleChangeText(event) {
        this.setState({ text: event.target.value });
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
                            <input type="text" placeholder="Tags   デザインは後でなおす" value={this.state.query}
                                onChange={(event) => this.handleChangeSubmit(event)} />
                        </div>
                    </div>

                    {/* メインの文章を記入する部分 */}
                    <div className="EditNewArticleBody">

                        {/* 文章の太字や画像の設定をする場所． 後で実装する */}
                        {/* <div className="EditNewArticleBodyOption"></div> */}
                        <div className="EditNewArticleBodyEditor">
                            <textarea
                                value={this.state.text}
                                onChange={this.handleChangeText}
                            />
                        </div>
                        <div className="EditNewArticleBodyPreview">
                            <div dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}>
                            </div>
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
