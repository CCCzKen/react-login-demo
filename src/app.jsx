import React from 'react';
import ReactDom from 'react-dom';
import Background from './components/background.jsx';
import LoginForm from './components/loginform.jsx';


const App = React.createClass({
    render: function() {
        return (
            <div>
                <Background />
                <LoginForm />
            </div>
        )
    }
});

ReactDom.render(
    <App />,
    document.getElementById('application')
);