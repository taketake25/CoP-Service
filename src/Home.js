import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './Home.css';
import ArticleList from './Article';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            markedLines: []
        }
        autoBind(this)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState(
            { b: !this.state.a }
        );
    }

    render() {
        // let {
        //     text,
        //     markedLines
        // } = this.state;
        return (
            <div className="HomeRoot">
                <PageHeader />
                <div className="Home">
                    <HomeHeader />
                    <HomeBody />
                </div >
                <HomeFooter />
            </div>
        )
    }
}


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

    }

    render() {

        return (
            <div className="PageHeader">
                <div className="ServiceTitle">D-PENS</div>
                <div className="PageHeaderButtons">
                    <div className="SearchArticle">
                        <div>
                            <label>
                                検索：
                            <input
                                    type="text"
                                    value={this.state.query}
                                    onChange={(event) => this.handleChangeQuery(event)}
                                />
                            </label>
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


function HomeHeader(props) {
    return (
        <div className="HomeHeader">
            <div className="ServiceExplanation">
                <div className="ServiceIdea">同志社エンジニア交流サイト</div>
                <div className="ServiceLogo">D-PENS</div> {/* ロゴの画像にする */}
            </div>
            <div className="ServicePurpose">
                D-PENSとは<br />
                <hr size="5" noshade />
                「工学系の大学生だから，誰かと一緒にモノ作りを楽しみたい！」と思ったことはないでしょうか．でも，サークルやプロジェクトなどの特殊な環境に身を置いている人や，開発好きな友達がいないとなかなかチーム開発の機会はないですよね．だからといって，ほかの集団に気軽に遊びに行けるほどの度胸はないし...<br />
            </div>
        </div>
    );
}

function HomeBody(props) {
    return (
        <div className='HomeBody'>
            <ArticleList />
            <div className="ArticleSide">
                <UserRanking />
                <CategoryList />
            </div>
        </div>
    );
}

function HomeFooter(props) {
    // 後で実装する
    return (
        <div className='HomeFooter'>
            Footer
        </div>
    );
}

function UserRanking(props) {
    // 後で実装する
    return (
        <div className='UserRanking'>
            <p>UserRanking</p>
        </div>
    );
}

class CategoryList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Category">
                <p>Category</p>
            </div>
        );
    }
}

export default Home;