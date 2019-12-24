import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './Home.css';

class Article extends Component {
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
            <div className="Article">
                <div className="ArticleHeader">

                </div>
                <div className="ArticleBody">

                </div>
                <div className="ArticleFooter">

                </div>
            </div>
        )
    }
}