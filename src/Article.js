import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './ArticleList.css';

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
                </div>
                <div className="ArticleListFooter">

                </div>
            </div>
        )
    }
}

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
            <div className="ArticleCard">
                <div className="ArticleCardTitle"></div>
                <div className="ArticleCardAgenda"></div>
                <div className="ArticleCardPoints"></div>
            </div>
        );
    }
}

export default Article;