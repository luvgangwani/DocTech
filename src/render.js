import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/jquery/dist/jquery.slim.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import MainInterface from './components/MainInterface';

ReactDOM.render(
    <MainInterface />,
    document.getElementById("root")
);