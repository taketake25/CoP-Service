import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
import './Home.css';
import { HomeFooter, UserRanking, CategoryList } from './Home';
import ArticleList from './ArticleList';
import PageHeader from './PageHeader';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            article: [{
                article_id: 0,
                article_title: "",
                article_date: "",
                article_filename: "",
                write_user_id: 0,
                article_tag_id: 0
            }],
            search_word: this.props.match.params.word,
        }

        console.log(this.props.match.params.word);
        console.log(this.state.search_word);
        autoBind(this)
    }

    render() {
        return (
            <div className="HomeRoot">
                <PageHeader />

                <div className="Search">
                    {/* <div><img src={back} /> </div> */}
                    <SearchBody />
                </div >
                <HomeFooter />
            </div>
        )
    }
}

function SearchBody(props) {
    return (
        <div className='SearchBody'>
            {/* articleList.jsを参考にした */}
            {/* <ArticleList {...props} search_word={this.state.search_word} /> */}
            <ArticleList />

            <div className="ArticleSide">
                <UserRanking />
                <CategoryList />
                {/* Qiitaでは書いているがteratailではユーザランキング */}
            </div>
        </div>
    );
}




// class PageHeader extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             query: '',
//             markedLines: []
//         }
//         autoBind(this)
//         this.handleChangeQuery = this.handleChangeQuery.bind(this);
//         this.keyPress = this.keyPress.bind(this);
//     }

//     //PageHeader.jsから引っ張ってくると検索機能がうまく機能しなかったので，
//     //こちらに全部コピーしてきた．誰か直して
//     static propTypes = {
//         match: PropTypes.object.isRequired,
//         location: PropTypes.object.isRequired,
//         history: PropTypes.object.isRequired
//     }

//     handleChangeQuery(e) {
//         this.setState({
//             query: e.target.value //検索内容の文面を更新
//         });
//     }
//     //検索欄においてEnterが押されたらqueryを飛ばす
//     keyPress(e) {
//         if (e.which === 13) {
//             var searchPage = `/search/${this.state.query}`;
//             console.log(searchPage);
//             this.props.history.push(searchPage);
//         }
//     }
//     // ストックボタンを押したときの挙動
//     showSelfStocks(params) {

//     }
//     // 投稿ボタンを押したときの挙動
//     editNewArticle(params) {
//         this.props.history.push('/EditNewArticle')
//     }

//     render() {
//         return (
//             <div className="PageHeader">
//                 <div className="ServiceTitle">
//                     <a href="/" style={{}}>D-PENS</a>
//                 </div>
//                 <div className="PageHeaderButtons">
//                     <div className="SearchArticle">
//                         <div>
//                             <Input
//                                 variant="filled"
//                                 bgcolor="primary.main"
//                                 color="primary"
//                                 type="text"
//                                 placeholder="検索"
//                                 value={this.state.query}
//                                 onChange={(event) => this.handleChangeQuery(event)}
//                                 onKeyPress={(e) => this.keyPress(e)}
//                             />
//                         </div>
//                     </div>
//                     <Button variant="contained" size="small" onClick={this.showSelfStocks}>ストック</Button>
//                     <Button variant="contained" size="small" onClick={this.editNewArticle}>新規投稿</Button>
//                     <div className="Account"><a href="/auth" style={{}}>アカウント</a></div>
//                 </div>
//             </div>
//         );
//     }
// }

export default withRouter(Search);