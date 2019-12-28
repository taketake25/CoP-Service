import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Home.css';


class PageHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            markedLines: []
        }
        autoBind(this)
        this.handleChangeQuery = this.handleChangeQuery.bind(this);
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    handleChangeQuery(e) {
        this.setState({
            query: "query text"
        });
    }

    // ストックボタンを押したときの挙動
    showSelfStocks(params) {

    }
    // 投稿ボタンを押したときの挙動
    editNewArticle(params) {
        this.props.history.push('/EditNewArticle')
    }

    render() {
        return (
            <div className="PageHeader">
                <div className="ServiceTitle">D-PENS</div>
                <div className="PageHeaderButtons">
                    <div className="SearchArticle">
                        <div>
                            <input
                                placeholder="検索"
                                type="text"
                                value={this.state.query}
                                onChange={(event) => this.handleChangeQuery(event)}
                            />
                        </div>
                    </div>
                    <button onClick={this.showSelfStocks}>ストック</button>
                    <button onClick={this.editNewArticle}>新規投稿</button>
                    <div className="Account">アカウント</div>
                </div>
            </div>
        );
    }
}

export default withRouter(PageHeader);