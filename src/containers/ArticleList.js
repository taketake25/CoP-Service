import { connect } from 'react-redux';
import { increment, decrement } from "../actions/tasks";
import ArticleList from "../components/ArticleList";

ArticleList.propTypes = {
    count: PropTypes.number,
    articles: PropTypes.array,
    // increment: PropTypes.func.isRequired,
    // decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    count: state.count,
    articles: state.article,
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
// export default connect(mapStateToProps)(ArticleList);
