import { connect } from 'react-redux';
import { increment, decrement } from "../actions/tasks";
import ArticleList from "../components/ArticleList";

function mapStateToProps({ articles }) {
    return {
        articles: articles.article,
        articles_id: articles.article_id,
        articles_id: articles.article_id,
    };
}

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
// export default connect(mapStateToProps)(ArticleList);
