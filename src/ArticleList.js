import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './ArticleList.css';

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
            }]

        };
        autoBind(this)

        fetch("http://192.168.0.13:4000/user")
            .then(response => response.json())
            .then(user => this.setState({ user }));

        fetch("http://192.168.0.13:4000/article")
            .then(response => response.json())
            .then(article => this.setState({ article }));
    }

    render() {
        const cards = [];
        for (var i = 0; i < this.state.article.length; i++) {
            cards.push(
                <ArticleCard article={this.state.article[i]} />
            )
        }
        // <ArticleCard article_title={this.state.user[0].user_name} />

        return (
            <div className="ArticleList">
                <div className="ArticleListHeader">
                    <div className="ArticleListCategory">
                        ここの文章を検索内容によって変えたい．
                    </div>
                </div>
                <div className="ArticleListBody">
                    {/* 10個分の記事のカードを表示 */}
                    {cards}
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
            article_title: "",
            markedLines: []
        }
        autoBind(this)
    }
    render() {
        return (
            <div className="ArticleCard">
                <div className="ArticleMetaData">
                    <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='user image' />
                    <div className="ArticleCardTitle"><a href="/ArticleViewer" style={{}}>{this.props.article.article_title}</a></div>
                    <div className="ArticleCardDay">{this.props.article.article_date}</div>
                </div>
                <div className="ArticleTag">{this.props.article.article_tag_id}</div>
                <div className="ArticleCardAgenda">
                    {this.props.article.article_filename}.txtをhtmlにdangerな方法で変換するんやで．
                </div>
            </div>
        );
    }
}

export default ArticleList;