import React from 'react'
import {Users} from '../src/components/Users.js';
import { assert } from 'chai'

//var Hello = require('../src/Hello.es6');

describe('Users', () => {

  it('should work', () => {
    var user = <Users />;
    //TestUtils.renderIntoDocument(hello);
    //expect(hello).toBeTruthy();
     assert.isOk(user);
  });

});
