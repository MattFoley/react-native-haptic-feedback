import React, { PureComponent } from 'react';
import {Platform, View, TouchableWithoutFeedback, NativeModules} from 'react-native';
import PropTypes from 'prop-types';

export default class TouchableHapticFeedback extends PureComponent {

    static defaultProps = {
      hapticType: 'selection'
    }

    constructor (props) {
        super(props);
    }

    onPressIn() {
      const {onPressIn} = this.props;
      // Trigger Feedback
      onPressIn();
    }

    render () {
        const {children, ...componentProps} = this.props;

        return (
            <TouchableWithoutFeedback
              {...componentProps}
              onPressIn={this.onPressIn}
            >
                {children}
            </TouchableWithoutFeedback>
        );
    }
}
