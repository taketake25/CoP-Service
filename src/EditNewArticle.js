import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './EditNewArticle.css';
const mysql = require("mysql");
// ↓この情報は別の.gitignoreされたファイルから取得すること
const connection = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "D-PENS",
});

