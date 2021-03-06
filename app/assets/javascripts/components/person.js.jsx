/** @jsx React.DOM */

var Person = React.createClass({
  render: function() {
    return (
      <div className="person">
        <div className="person-avatar">
          <Avatar person={this.props.person} size="22" />
        </div>

        {this.label()}
      </div>
    );
  },

  label: function() {
    if(this.props.person.name) {
      return (
        <span>
          <strong>{this.props.person.name}</strong>
          &nbsp;
          <span className="text-muted">{this.props.person.email}</span>
        </span>
      )
    } else {
      return (
        <strong>{this.props.person.email}</strong>
      )
    }
  }
});
