import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
import './ArticleList.css';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import ArticleViewer from './ArticleViewer';
// import { inputArticles, increment, decrement } from "../actions/tasks";

class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            article: [{
                article_id: 0,
                article_title: "",
                article_date: "",
                article_filename: "",
                write_user_id: 0,
                article_tag_id: 0
            }],
            count: 0,
            search_word: this.props.match.params.word,
        };
        autoBind(this)

        console.log(this.state.search_word);
        if (this.state.search_word == 'lastest' || this.state.search_word == undefined) {
            var searchPage = `http://localhost:1234/article/`;
        } else {
            var searchPage = `http://localhost:1234/article/word/${this.state.search_word}`;
        }
        // var httpRequest = `http://172.20.11.121:4000/article/${this.state.search_word}`;
        // var httpRequest = `http://localhost:1234/article/`;
        // fetch("http://192.168.0.13:4000/article")
        // fetch("http://172.20.11.121:4000/article/")
        fetch(searchPage)
            // .then(response => console.log(response))
            .then(response => response.json())
            .then(article => this.setState({ article }));
    }

    render() {
        //ここに書いている内容はめちゃくちゃ実行が繰り返されてる可能性がある
        const cards = [];
        for (var i = 0; i < this.state.article.length; i++) {
            cards.push(
                <ArticleCard article={this.state.article[i]} />
            )
        }
        const dates = [];
        for (i = 0; i < this.state.article.length; i++) {
            dates.push(
                <Route path={`/ArticleViewer/:article_id`} component={ArticleViewer}
                    render={props => <ArticleViewer {...props} article={this.state.article[i]} />} />
            )
        }
        // inputArticles(this.state.article);

        var label = "";
        if (this.state.search_word === "lastest" || this.state.search_word === undefined) {
            label = "新着投稿"
        } else {
            label = "検索語：\"" + this.state.search_word + "\"";
        }

        return (
            <div className="ArticleList" >
                <Router>
                    {dates}
                </Router>
                <div className="ArticleListHeader">
                    <div className="ArticleListCategory">
                        {label}
                    </div>
                </div>
                <div className="ArticleListBody">
                    {cards}
                </div>
                <div className="ArticleListFooter">

                </div>
            </div>
        )
    }
}


const imagePath = "image3.png"
class ArticleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article_title: "",
        }
        autoBind(this)
    }
    render() {
        return (
            <div className="ArticleCard">
                <div className="ArticleMetaData">
                    <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='image' />
                    <div className="ArticleCardTitle"><a href={`/ArticleViewer/${this.props.article.article_id}`} style={{}}>{this.props.article.article_title}</a></div>
                    <div className="ArticleCardDay">{this.props.article.article_date.substr(0, 10)}</div>
                </div>
                <div className="ArticleTag">{this.props.article.article_tag_id}</div>
                {/* <div className="ArticleCardAgenda">
                    4行の概要を表示させるのもありかと考えてた．
                </div> */}
            </div>
        );
    }
}

export default withRouter(ArticleList);