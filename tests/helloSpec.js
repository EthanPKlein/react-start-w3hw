import React from 'react'
import {Hello} from '../src/components/Hello.js';
import { assert } from 'chai'

describe('Hello', () => {

  it('should work', () => {
    var hello = <Hello />;
    TestUtils.renderIntoDocument(hello);
    expect(hello).toBeTruthy();
     assert.isOk(hello);
  });

});
