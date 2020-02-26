import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import PropTypes from 'prop-types';
// import sanitize from 'sanitize-html';
import marked from 'marked';
import PageHeader from './PageHeader';
import './ArticleViewer.css';
import { HomeFooter } from './Home';
import { TextField, Card, Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';

class ArticleViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            article_id: this.props.match.params,
            // このjsonの内容をちょっと整理したい．
            articles: [{
                article_date: "",
                article_filename: "undefined",
                article_tag_id: 0,
                article_text: "undefined",
                article_title: "undefined",
                write_user_id: 0,
                write_user_name: "undefined",
            }],
            comments: [{
                message: "",
                commented_user_name: "null"
            }],
            alert: "",
        }
        autoBind(this);
        marked.setOptions({ breaks: true });
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChageSubmit = this.handleChangeSubmit.bind(this);

        var temp = this.props.match.params.article_id;
        // var httpRequest = `http://192.168.0.13:4000/article/getText/${temp}`;
        // var httpRequest = `http://172.20.11.121:4000/article/getText/${temp}`;
        var httpRequest = `http://localhost:1234/article/getText/${temp}`;
        fetch(httpRequest, {
            method: "GET",
            dataType: "json",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then(response => response.json())
            .then(json => {
                console.log(
                    // JSON.stringify(this.state.articles) +
                    JSON.stringify(json)
                );
                this.setState({ articles: json[0] })
                console.log(this.state.articles.article_id)
            });

        // var commentRequest = `http://172.20.11.121:3000/article/getComment/${temp}`;
        var commentRequest = `http://localhost:1234/article/getComment/${temp}`;
        // var commentRequest = `http://192.168.0.13:4000/article/getComment/${temp}`;
        fetch(commentRequest, {
            method: "GET",
            dataType: "json",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then(response => response.json())
            .then(json => {
                console.log(
                    JSON.stringify(json)
                );
                this.setState({ comments: json[0] })
                console.log(this.state.comments.message)
            });
    }

    handleChangeText(event) {
        this.setState({ text: event.target.value });
        console.log(event.target.value);
    }

    handleChangeSubmit(e) {
        if (this.state.text !== "") {
            let new_comment = {
                comment_user_id: 1,
                comment_article_id: this.props.match.params.article_id,
                message: this.state.text,
            };

            // fetch("http://192.168.0.13:4000/comment/create", {
            // fetch("http://172.20.11.121:1234/comment/create", {
            fetch("http://localhost:1234/comment/create", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(new_comment)
            });

            // 現在のコメント欄を追加する
            this.setState({ comments: this.state.comments.concat({ message: this.state.text, commented_user_name: "馬場" }) });
            this.setState({ text: '' });
        } else {
            this.setState({ alert: "情報が入力されていません" })
        }
    }


    render() {
        const showComments = [];
        const imagePath = "image3.png"

        for (var i = 0; i < this.state.comments.length; i++) {
            showComments.push(
                <Card key={this.state.comments[i].commented_user_name} style={{ marginTop: '10px' }}>
                    <div className="Comment">
                        <div className="CommentUserInfo">
                            <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='user image' />
                            <div className="UserName">
                                {this.state.comments[i].commented_user_name}
                            </div>
                        </div>
                        <div className="CommentText">
                            {this.state.comments[i].message}
                        </div>
                    </div>
                </Card >
            )
        }

        return (
            <div>
                <PageHeader />
                <div className="ArticleViewer">
                    <div className="ArticleViewerHeader">
                        {/* Headerやで */}
                        {/* 隠れてしまっているのでpaddingを修正する */}
                    </div>

                    <div className="ArticleMain">
                        <div className="ArticleMetaData">
                            <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='IMG' />
                            <div className="ArticleCardDay">{this.state.articles.article_date}</div>
                            {/* なぜかここで substr()できないので，バックエンドの方で短くする予定． */}
                            {/* <div className="ArticleCardDay">{temp.substr(0, 10)}</div> */}
                        </div>
                        <div className="ArticleTitle">{this.state.articles.article_title}</div>
                        <div className="ArticleTag">{this.state.articles.article_tag_id}</div>
                        <div className="ArticleText">
                            {/* this.state.articles.article_textを直接突っ込むとobject型としてとらえられてしまうので，`${}`で囲う */}
                            <div dangerouslySetInnerHTML={{
                                __html: marked(`${this.state.articles.article_text}`)
                                // __html: sanitize(marked(`${this.state.articles.article_text}`), {
                                //     allowedTags: sanitize.defaults.allowedTags.concat([
                                //         'img'
                                //     ])
                                // })
                                // sanitizeするとh1などがうまく表示されない
                            }}>
                                {/* <div dangerouslySetInnerHTML={{ __html: marked(this.state.articles.article_text) }}> */}
                            </div>
                        </div>
                    </div>

                    <div className="ArticleFooter">
                        <div className="Comments">
                            {showComments}
                        </div>
                        <div className="SendComment">
                            <div>
                                <TextField
                                    id="filled-multiline-flexible"
                                    label="コメントを投稿する"
                                    multiline
                                    rows="3"
                                    variant="outlined"
                                    placeholder="コメントを記入してください．"
                                    fullWidth
                                    value={this.state.text}
                                    onChange={this.handleChangeText}
                                />

                                {/* マリアナ海溝の深さ */}
                            </div>
                            <div className="CommentSender">
                                <Button variant="outlined" onClick={this.handleChangeSubmit}>投稿</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeFooter />
            </div >
        )
    }
}


export default withRouter(ArticleViewer);