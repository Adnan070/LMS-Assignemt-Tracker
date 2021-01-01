import React, {Component} from 'react';

import {HomeScreenView, LoginBox} from '../element/container';
import {BorderedInput} from '../element/inputs';
import {PlainText} from '../element/text';

export default class Home extends Component {
  render() {
    return (
      <HomeScreenView>
        <LoginBox>
          <BorderedInput placeholder="Password" />
        </LoginBox>
      </HomeScreenView>
    );
  }
}
