import TriggerTypes from './triggerTypes.d.ts'

declare const ReactNativeHapticFeedback: {
  trigger(type: TriggerTypes): void;
};

export default ReactNativeHapticFeedback;