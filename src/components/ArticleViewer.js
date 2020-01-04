import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import PropTypes from 'prop-types';
import marked from 'marked';

import PageHeader from './PageHeader';
import './ArticleViewer.css';
import './EditNewArticle.css';


class ArticleViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            article_id: this.props.match.params,
            // このjsonの内容をちょっと整理したい．
            articles: [{
                article_date: "undefined",
                article_filename: "undefined",
                article_tag_id: 0,
                article_text: "undefined",
                article_title: "undefined",
                write_user_id: 0,
                write_user_name: "undefined",
            }],
        }
        autoBind(this);
        marked.setOptions({ breaks: true });

        var temp = this.props.match.params.article_id;
        var httpRequest = `http://192.168.0.13:4000/article/getText/${temp}`;
        // this.state.articles.article_textを直接突っ込むとobject型としてとらえられてしまうので，`${}`で囲う

        // console.log(httpRequest);
        // ここの部分をreact-reduxでうまいことしたい～
        fetch(httpRequest, {
            method: "GET",
            dataType: "json",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ articles: json[0] })
                console.log(JSON.stringify(this.state.articles));
            });

        // .then(json => console.log(json));
    }

    render() {
        return (
            <div>
                <PageHeader />
                <div className="ArticleViewer">
                    <div className="ArticleViewerHeader">
                        Headerやで
                        {/* 隠れてしまっているのでpaddingを修正する */}
                    </div>

                    <div className="ArticleCard">
                        <div className="ArticleMetaData">
                            <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='user imaga' />
                            <div className="ArticleCardTitle">{this.state.articles.article_title}</div>
                            <div className="ArticleCardDay">{this.state.articles.article_date}</div>
                        </div>
                        <div className="ArticleTag">{this.state.articles.article_tag_id}</div>
                        <div className="ArticleCardAgenda">
                            {/* this.state.articles.article_textを直接突っ込むとobject型としてとらえられてしまうので，`${}`で囲う */}
                            <div dangerouslySetInnerHTML={{ __html: marked(`${this.state.articles.article_text}`) }}>
                                {/* <div dangerouslySetInnerHTML={{ __html: marked(this.state.articles.article_text) }}> */}
                            </div>
                        </div>
                    </div>

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
            articles: this.props.articles[0]
        }
        autoBind(this)
        console.log(JSON.stringify(this.state.articles))
    }
    render() {
        return (
            <div className="ArticleCard">
                {/* {this.state.article.article_id} */}
                <div className="ArticleMetaData">
                    <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='user imaga' />
                    <div className="ArticleCardTitle"><p>{this.state.articles.article_title}</p></div>
                    <div className="ArticleCardDay">{this.state.articles.article_date}</div>
                </div>
                <div className="ArticleTag">{this.state.articles.article_tag_id}</div>
                <div className="ArticleCardAgenda">
                    {this.state.articles.article_text}
                </div>
            </div>
        );
    }
}

export default withRouter(ArticleViewer);