import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
import './Home.css';
import ArticleList from './ArticleList';
import PageHeader from './PageHeader';

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

function HomeHeader(props) {
    return (
        <div className="HomeHeader">
            <div className="ServiceExplanation">
                <div className="ServiceIdea">同志社エンジニア交流サイト</div>
                <div className="ServiceLogo">D-PENS</div> {/* ロゴの画像にする */}
            </div>
            <div className="ServicePurpose">
                D-PENSとは<br />
                <hr size="3" noshade />
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

class UserRanking extends Component {
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

        fetch("http://192.168.0.13:4000/user")
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

class CategoryList extends Component {
    // 後で実装する
    constructor(props) {
        super(props)
        this.state = {
            tags: [{
                tag_id: 0,
                tag_name: ""
            }]
        };

        fetch("http://192.168.0.13:4000/tags")
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


function HomeFooter(props) {
    // 後で実装する
    return (
        <div className='HomeFooter'>
            Footer
        </div>
    );
}

export default withRouter(Home);