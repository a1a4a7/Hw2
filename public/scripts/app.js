'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestView = function (_React$Component) {
  _inherits(RequestView, _React$Component);

  function RequestView(props) {
    _classCallCheck(this, RequestView);

    var _this = _possibleConstructorReturn(this, (RequestView.__proto__ || Object.getPrototypeOf(RequestView)).call(this, props));

    _this.state = { users: [], showposts: true };
    _this.handleClick = _this.handleClick.bind(_this);

    return _this;
  }

  _createClass(RequestView, [{
    key: 'handleClick',
    value: function handleClick() {
      var _this2 = this;

      fetch('https://jsonplaceholder.typicode.com/posts').then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);
        _this2.setState({ users: data });
      }).catch(function (e) {
        return console.log('错误:', e);
      });
    }
  }, {
    key: 'togglePost',
    value: function togglePost() {
      var togglePost = this.state.showposts;
      this.setState({
        showposts: !togglePost
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'button', value: 'fetch data', onClickCapture: this.handleClick }),
        React.createElement(
          'button',
          { onClick: this.togglePost },
          'show/hide'
        ),
        React.createElement(
          'div',
          null,
          this.state.showposts && this.state.users.map(function (item, index) {
            return React.createElement(
              'table',
              { key: index.toString() },
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'th',
                    null,
                    item.userId
                  ),
                  React.createElement(
                    'th',
                    null,
                    item.id
                  ),
                  React.createElement(
                    'th',
                    null,
                    item.title
                  ),
                  React.createElement(
                    'th',
                    null,
                    item.body
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return RequestView;
}(React.Component);

ReactDOM.render(React.createElement(RequestView, null), document.getElementById('app'));
