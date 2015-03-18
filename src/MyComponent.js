var React = require('react/addons');

var MyComponent = React.createClass({
  render: function() {
    if(this.props.flag){
      return <div>Hi</div>;
    }

    return false;
  }
});

module.exports = MyComponent;