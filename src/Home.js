import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './Home.css';

class Home extends Component {
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
            <div className="HomeRoot">
                <div className="Page-header">

                    <div className="title">D-PENS</div> {/* inline-blockにする */}
                    <div className="search">
                        <div>
                            <label>
                                検索:
                            <input
                                    type="text"
                                    value={this.state.query}
                                    onChange={(event) => this.handleChangeName(event)}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="Home">
                    <p>home body</p>
                    <HomeHeader />
                    <HomeBody />
                </div >
            </div>
        )
    }
}


function HomeHeader(props) {
    return (
        <div className="Home-header">
            <div>D-PENS</div> {/*logo*/}
            <div></div>

        </div>
    );
}

function HomeBody(props) {
    return (
        <div className='Home-body'>
            <div classname='Home-box Home-recentry'>
            </div>
            <div className='Home-box Home-category'>
            </div>
        </div>
    );
}


export default Home;