
import {
  TouchableWithoutFeedbackProperties,
  TouchableWithoutFeedbackStatic
} from 'react-native';
import TriggerTypes from './triggerTypes.d.ts'

type TouchableHapticFeedbackProperties = TouchableWithoutFeedbackProperties & {
  hapticType?: TriggerTypes
}

export default TouchableHapticFeedbackProperties;