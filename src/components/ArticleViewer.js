import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './ArticleViewer.css';
import PageHeader from './PageHeader';

class ArticleViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            article_id: this.props.match.params,
            article: []
        }
        autoBind(this);
        // ARTICLE.find(this.props.article => this.props.article_id === article_id)
        // ~~の中にArticleList.jsのarticleの配列が入る．
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
                    <ArticleBody article={this.state.article} />
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
            article: this.props.article
        }
        autoBind(this)
        console.log(JSON.stringify(this.props.article))
    }
    render() {
        return (
            <div className="ArticleCard">
                {this.state.article.article_id}
                <div className="ArticleMetaData">
                    <img style={{ width: '4vw', height: '4vw' }} src={imagePath} alt='user imaga' />
                    <div className="ArticleCardTitle">{this.state.article.article_title}</div>
                    <div className="ArticleCardDay">{this.state.article.article_date}</div>
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