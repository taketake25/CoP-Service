import React, { Component, useCallback } from 'react';
import autoBind from 'react-autobind';
import './EditNewArticle.css';
import { withRouter } from 'react-router';
import PageHeader from './PageHeader';
import marked from 'marked';
// import sanitize from 'sanitize-html';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dropzone from 'react-dropzone';
import { withCookies, Cookies } from 'react-cookie';

class EditNewArticle extends Component {
    constructor(props) {
        super(props)
        const { cookies } = this.props;
        this.state = {
            text: "",
            article_title: "",
            article_tags: "",
            alert: "",
            user_hash: cookies.get("user_hash") || "",
            files: [],
            filesWereDropped: false,
        }
        autoBind(this);

        if (this.state.user_hash === "") {
            this.props.history.push('/auth');
        }


        this.handleChangeText = this.handleChangeText.bind(this);
        marked.setOptions({ breaks: true });
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeTags = this.handleChangeTags.bind(this);
        this.handleChageSubmit = this.handleChangeSubmit.bind(this);
        this.handleOnDrop = this.handleOnDrop.bind(this);
    }

    handleOnDrop = (acceptedFiles) => { // なんでコンストラクタで書くかわからん．active
        this.setState({ files: this.state.files.concat({ acceptedFiles }) });
        acceptedFiles.map(file => console.log(file.name))
        // console.log(acceptedFiles.target.files)
        this.setState({ filesWereDropped: this.state.files });
    };

    handleChangeText(event) {
        this.setState({ text: event.target.value });
        // console.log(event.target.value);
    }
    handleChangeTitle(event) {
        this.setState({ article_title: event.target.value });
    }
    handleChangeTags(event) {
        this.setState({ article_tags: event.target.value });
    }

    handleChangeSubmit(e) {
        // this.setState({ alert: "ボタンが押されました" })

        if (this.state.article_title !== "" && this.state.text !== "") {
            var time = new Date();
            var date = time.getFullYear() + "." + (time.getMonth() + 1) + "." + time.getDate() + "." + time.getHours() + "." + time.getMinutes() + "." + time.getSeconds();
            var date2 = time.getFullYear() + "." + (time.getMonth() + 1) + "." + time.getDate() + "." + time.getHours() + "." + time.getMinutes() + "." + time.getSeconds();
            let formData = new FormData();

            formData.append("user_hash", this.state.user_hash);
            formData.append("article_title", this.state.article_title);
            formData.append("article_date", date);
            formData.append("article_date2", date2);
            formData.append("article_text", this.state.text);
            formData.append("article_tag_id", 1); //あとで追加するんやでな
            formData.append("write_user_id", 1); //あとで実装するんやでな

            if (this.state.filesWereDropped) {
                for (var i = 0; i < this.state.files.length; i++) {
                    this.state.files[i].acceptedFiles.forEach(file => {
                        console.log(file.name)
                        formData.append("img", file, file.name);
                    })
                }
            }
            for (var item of formData) console.log(item);

            // fetch("http://172.20.11.121:3000/article/create", {
            fetch("http://localhost:1234/article/create", {
                // fetch("http://192.168.0.13:4000/article/create", {
                method: "POST",
                // headers: {
                //     'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryO5quBRiT4G7Vm3R7'
                // },
                body: formData
            });
            this.props.history.push('/');
        } else {
            this.setState({ alert: "情報が入力されていません" })
        }
    }




    render() {
        const files = this.state.files.map(file => (
            <div>
                <li key={file.name}>
                    {file.name} - {file.size} bytes  -  {file.path}
                </li>
                <img style={{ width: '4vw', height: '4vw' }} src={file.path} alt="img" />
            </div>
        ));

        return (
            <div>
                <PageHeader />
                <div className="EditNewArticle">

                    {/* タイトルやタグを記入する部分 */}
                    <div className="EditNewArticleHeader">
                        <div className="EditNewArticleHeaderTitle">
                            <TextField
                                size="small"
                                variant="outlined"
                                placeholder="Title"
                                value={this.state.query}
                                onChange={(event) => this.handleChangeTitle(event)}
                            />
                        </div>
                        {/* ドロップダウンから選択する方法にする．というかあとで実装する */}
                        <div className="EditNewArticleHeaderTag">
                            <TextField
                                size="small"
                                variant="outlined"
                                placeholder="Tags   デザインは後で 画像sanitize-html" value={this.state.query}
                                onChange={(event) => this.handleChangeTags(event)} />
                        </div>
                    </div>

                    {/* メインの文章を記入する部分 */}
                    <div className="EditNewArticleBody">

                        {/* 文章の太字や画像の設定をする場所． 後で実装する */}
                        {/* <div className="EditNewArticleBodyOption"></div> */}
                        {/* https://github.com/apostrophecms/sanitize-html */}


                        <div className="EditNewArticleBodyEditor">
                            <Dropzone onDrop={this.handleOnDrop}
                                noClick="true"
                                accept="image/gif,image/jpeg,image/png,image/jpg">
                                {({ getRootProps, getInputProps }) => (
                                    <div className="uploadContainer">
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            {
                                                <TextField
                                                    fullWidth
                                                    multiline="true"
                                                    rows="25"
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="記事をMarkDown形式で入力"
                                                    value={this.state.text}
                                                    onChange={this.handleChangeText}
                                                />
                                                // <div>Drop 'n' drop some files here, or click to select files</div>
                                            }
                                        </div>
                                        {/* <aside>
                                            ここにファイル名が出力されるはずだよ
                                            <ul>{files}</ul>
                                        </aside> */}
                                    </div>
                                )}
                            </Dropzone>
                        </div>
                        <div className="EditNewArticleBodyPreview">
                            <div dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}>
                            </div>
                        </div>
                    </div>
                    {/* <p>{this.state.alert}</p> */}
                    <div className="EditNewArticleFooter">
                        <Button variant="contained" size="small" onClick={this.handleChangeSubmit}>投稿</Button>
                    </div>
                </div>
            </div >
        );
    }
}

// export default withRouter(EditNewArticle);
export default withCookies(EditNewArticle);
