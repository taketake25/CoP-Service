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
            user: [{
                user_id: 0,
                user_name: "",
                user_password: "",
                user_image: "",
                user_point: 0
            }],
            article: [{
                article_id: 0,
                article_title: "",
                article_date: "",
                article_filename: "",
                write_user_id: 0,
                article_tag_id: 0
            }],
            count: 0,
        };
        autoBind(this)

        // fetch("http://192.168.0.13:4000/user")
        fetch("http://172.20.11.121:4000/user")
            .then(response => response.json())
            .then(user => this.setState({ user }));

        // fetch("http://192.168.0.13:4000/article")
        fetch("http://172.20.11.121:4000/article")
            // .then(response => console.log(response))
            .then(response => response.json())
            .then(article => this.setState({ article }));
        // .then(article => console.log(article));

    }

    render() {
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

        return (
            <div className="ArticleList" >
                <Router>
                    {dates}
                </Router>
                <div className="ArticleListHeader">
                    <div className="ArticleListCategory">
                        みんなの記事だよ～
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
                    <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='user image' />
                    <div className="ArticleCardTitle"><a href={`/ArticleViewer/${this.props.article.article_id}`} style={{}}>{this.props.article.article_title}</a></div>
                    <div className="ArticleCardDay">{this.props.article.article_date}</div>
                </div>
                <div className="ArticleTag">{this.props.article.article_tag_id}</div>
                {/* <div className="ArticleCardAgenda">
                    {this.props.article.article_filename}をhtmlにdangerな方法で変換するんやで．<br />
                    合計4行の文章をagendaとして出力するんやで<br />
                    でも，10個分のCardのテキストを出力すると，constructorでの実行が間に合わないので，困ってるんやわ．<br />
                    ということで，<br />
                    4行のテストを終了するで．
                </div> */}
            </div>
        );
    }
}

// ArticleList.propTypes = {
//     articles: PropTypes.array,
//     increment: PropTypes.func.isRequired,
//     decrement: PropTypes.func.isRequired,
// };

export default withRouter(ArticleList);