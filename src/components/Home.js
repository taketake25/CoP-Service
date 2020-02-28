import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
import './Home.css';
import ArticleList from './ArticleList';
// import ArticleList from '../containers/ArticleList';
import PageHeader from './PageHeader';
import logo from "./logo.png";

class Home extends Component {
    constructor(props) {
        super(props)
        autoBind(this)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState(
            { b: !this.state.a }
        );
    }

    render() {
        const back = "background.jpg";
        return (
            <div className="HomeRoot">
                <PageHeader />

                <div className="Home">
                    {/* <div><img src={back} /> </div> */}
                    <HomeHeader />
                    <HomeBody />
                </div >
                <HomeFooter />
            </div>
        )
    }
}

function HomeHeader(props) {
    const logo = "logo.png";
    return (
        <div className="HomeHeader">
            <div className="ServiceExplanation">
                <div className="ServiceIdea">同志社エンジニア交流サイト</div>
                <img src={logo} alt="ServiceLogo" />
            </div>
            <div className="ServicePurpose">
                D-PENSとは<br />
                <hr size="3" noshade />
                キャッチーな説明文を後で考え直すんやで<br />
                フォント変えないとな<br />
                背景に同志社っぽい写真を反映させたい<br />
                {/* 「工学系の大学生だから，誰かと一緒にモノ作りを楽しみたい！」と思ったことはないでしょうか．でも，サークルやプロジェクトなどの特殊な環境に身を置いている人や，開発好きな友達がいないとなかなかチーム開発の機会はないですよね．だからといって，ほかの集団に気軽に遊びに行けるほどの度胸はないし...<br /> */}
            </div>
        </div>
    );
}

function HomeBody(props) {
    return (
        <div className='HomeBody'>
            <ArticleList {...props} search_word={"lastest"} />
            <div className="ArticleSide">
                <UserRanking />
                <CategoryList />
            </div>
        </div>
    );
}

export class UserRanking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [{
                user_id: 0,
                user_name: "",
                user_password: "",
                user_image: "",
                user_point: 0
            }],
        };

        // fetch("http://192.168.0.13:4000/user")
        // fetch("http://172.20.11.121:4000/user")
        fetch("http://localhost:1234/user")
            .then(response => response.json())
            .then(user => this.setState({ user }));
    }

    render() {
        const users = [];
        for (var i = 0; i < this.state.user.length; i++) {
            users.push(<p>{i + 1}. {this.state.user[i].user_name}</p>);
        }
        return (
            <div className='UserRanking'>
                <p>UserRanking</p>
                {users}
            </div>
        );
    }
}

export class CategoryList extends Component {
    // 後で実装する
    constructor(props) {
        super(props)
        this.state = {
            tags: [{
                tag_id: 0,
                tag_name: ""
            }]
        };

        // fetch("http://192.168.0.13:4000/tags")
        // fetch("http://172.20.11.121:4000/tags")
        fetch("http://localhost:1234/tags")
            .then(response => response.json())
            .then(tags => this.setState({ tags }));
    }
    render() {
        const Categorys = [];
        for (var i = 0; i < this.state.tags.length; i++) {
            Categorys.push(<p>{i + 1}. {this.state.tags[i].tag_name}</p>);
        }
        return (
            <div className="Category">
                <p>Category</p>
                {Categorys}
            </div>
        );
    }
}


export function HomeFooter(props) {
    // 後で実装する
    return (
        <div className='HomeFooter'>
            <div className='FooterAccounts'>
                <img src={logo} alt="ServiceLogo" /> {/* ロゴの画像にする */}

                <a href={`http://sample.com`} style={{}}>twitter</a><br />
                <a href={`http://sample.com`} style={{}}>facebook</a>
            </div>
            <div className='FooterTools'>
                <a href={`/`} style={{}}>タグ一覧</a><br />
                <a href={`/`} style={{}}>ユーザを探す</a>
            </div>
            <div className='FooterServiceInfo'>
                <a href={`/`} style={{}}>about</a><br />
                <a href={`/`} style={{}}>利用規約</a><br />
                <a href={`/`} style={{}}>プライバシー</a><br />
                <a href={`/`} style={{}}>ガイドライン</a><br />
                <a href={`/`} style={{}}>ご意見</a><br />
                <a href={`/`} style={{}}>ヘルプ</a><br />
            </div>
            <br />@2020- taketake Inc.
        </div>
    );
}

export default withRouter(Home);