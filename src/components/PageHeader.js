import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Home.css';
import { Button, Input, Form } from '@material-ui/core';


class PageHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            markedLines: []
        }
        autoBind(this)
        this.handleChangeQuery = this.handleChangeQuery.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    handleChangeQuery(e) {
        this.setState({
            query: e.target.value //検索内容の文面を更新
        });
    }
    //検索欄においてEnterが押されたらqueryを飛ばす
    keyPress(e) {
        if (e.which === 13) {
            var searchPage = `/search/${this.state.query}`;
            console.log(searchPage);
            this.props.history.push(searchPage);
            // window.location.reload()
        }
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
                <div className="ServiceTitle">
                    <a href="/" style={{}}>D-PENS</a>
                </div>
                <div className="PageHeaderButtons">
                    <div className="SearchArticle">
                        <div>
                            <Input
                                variant="filled"
                                bgcolor="primary.main"
                                color="primary"
                                type="text"
                                placeholder="検索"
                                value={this.state.query}
                                onChange={(event) => this.handleChangeQuery(event)}
                                onKeyPress={(e) => this.keyPress(e)}
                            />
                        </div>
                    </div>
                    <Button variant="contained" size="small" onClick={this.showSelfStocks}>ストック</Button>
                    <Button variant="contained" size="small" onClick={this.editNewArticle}>新規投稿</Button>
                    <div className="Account"><a href="/auth" style={{}}>アカウント</a></div>
                </div>
            </div>
        );
    }
}

export default withRouter(PageHeader);