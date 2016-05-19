var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');


var App = React.createClass({

  render : function() {
    return (
      <div className="container">
        React.js
      </div>
    )
  }
});

/*
  Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));