import React, {Component} from 'react';

import {ThemeProvider} from 'styled-components/native';
import {FlexOne} from '../element/container';
import {SimpleButton} from '../element/buttons';
import {PlainText} from '../element/text';

/**
 * Redux
 */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../redux/action/userAction';
import {theme as Theme} from '../element/theme';

class Home extends Component {
  render() {
    const {colors} = this.props.route.params.theme;
    return (
      <ThemeProvider theme={Theme}>
        <FlexOne middle>
          <SimpleButton
            // bg={colors.background}
            onPress={() => {
              this.props.logout();
            }}>
            <PlainText colors={colors.text}>Logout</PlainText>
          </SimpleButton>
        </FlexOne>
      </ThemeProvider>
    );
  }
}

/**
 *
 * @param {Global State} state
 * bind state to the component props
 */
const mapStateToProps = (state) => {
  const {user, UI} = state;
  return {
    user,
    UI,
  };
};
/**
 *
 * @param {Redux Actions} dispatch
 * bind actions to the component props
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logout,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
