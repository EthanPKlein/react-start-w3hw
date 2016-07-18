import React from 'react'

var AddUser = React.createClass({
    getInitialState: function() {
      return {name: '', email: ''};
    },
    handleNameChange: function(e) {
      // could do name validation here if desired
      this.setState({name: e.target.value});
    },
    handleEmailChange: function(e) {
      // could do email validation here if desired, such as requiring proper regex
      this.setState({email: e.target.value});
    },
    handleSubmit: function(e) {
      console.log("handling submit...");
      e.preventDefault();
      this.props.submitName();
      this.setState({name: '', email: ''});
    },
    render: function() {
        return (
                <div style={{border: '1px solid black'}}>
                    <form onSubmit={this.handleSubmit}>
                      <span>Name:</span>
                      <input id="newName" type="text" placeholder="Bob Bobbyson" value={this.state.name} onChange={this.handleNameChange}/><br />
                      <span>Email:</span>
                      <input id="newEmail" type="text" placeholder="bb@bobbyson.net" value={this.state.email} onChange={this.handleEmailChange}/><br />
                      <input type="submit" value="Submit" />
                    </form>
                </div>
        );
  }
});

export default AddUser;
