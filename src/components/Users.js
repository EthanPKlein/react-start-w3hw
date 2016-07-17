import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as actions from '../actions/';
import {bindActionCreators} from 'redux';
import * as types from '../constants/actionTypes';
import AddUser from './add-user'

class Users extends React.Component {
  constructor(props) {
   super(props);

   this.state = {list:[]};
   this.render = this.render.bind(this);
   this.clickHandler = this.clickHandler.bind(this);
   this.reduxDispatch = this.reduxDispatch.bind(this);
   this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    var self = this;
    $.getJSON('/data.json').done(function (data) {
      //userList = data.list;
      self.setState({
        list : data.list
      });
    });
  }

  render() {
    var self = this;
    var list = this.state.list;

    return (
            <div>
              <ul>
              {list.map(function(item, i) {
                  return <li><Link to={`/users/${i}`}>{item.name}</Link> - {item.email}</li>
              })}
              </ul>
              <button onClick={self.clickHandler}>Test Clicker</button>
              <button onClick={self.reduxDispatch}>Dispatch</button>
              <AddUser dispatchItem={self.reduxDispatch}/>
            </div>
    );
  }

  clickHandler() {
       console.log('so this was a click event, now you can use a similar event to "save"', this.state);
       var tmpState = this.state.list;
       tmpState.push({name:"hello world", email:'hello@icct.com'});
       this.setState({list:tmpState});
   }

  // reduxDispatch() {
  //      console.log('dispatched...');
  //      var tmpState = this.state.list;
  //      var user = {name:"dummy dummy", email:'dummy@icct.com', foo:'aa'};
  //      tmpState.push(user);
  //      this.props.actions.addUser(tmpState);
  // }

  addUserDispatch() {
       console.log('dispatched...');

       // this feels wrong.
       var newName = document.getElementById('newName').value;
       var newEmail = document.getElementById('newEmail').value;

      //  userStore.dispatch({
      //    type: 'ADD_USER',
      //    user: {name:newName, email:newEmail}
      //  });
  }

  updateList(user) {
    var tmpState = this.state.list;
    tmpState.push(user);
  }

}

// Update the 'list' props anytime the state changes
function mapStateToProps(state) {
    console.log(arguments); // ???
    return {
      handleSubmit: function(newUser) {
        userStore.dispatch({
            type: 'ADD_USER',
            user: {name:'derp', email:'derpmail'}
        });
      },

      list: state
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Users); // presentational component to connect to the store
