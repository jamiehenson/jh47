/** @jsx React.DOM */
var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return (
        <tr>
          <td>{itemText}</td>
          <td>0</td>
        </tr>
      )
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <table>
            <TodoList items={this.state.items} />
        </table>
        
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input className="form-control col-md-4" onChange={this.onChange} value={this.state.text} />
          <button className="btn btn-default">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

React.render(<TodoApp />, document.getElementById("content"));
