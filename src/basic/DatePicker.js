import React from 'react';
import { Modal, View, Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import variable from '../theme/variables/platform';

import { Text } from './Text';
import { Button } from './Button';

export class DatePicker extends React.Component {
  static defaultProps = {
    disabled: false
  };
  constructor(props) {
    super(props);
    this.state = {
      iosVisible: false,
      androidVisible: false,
      defaultDate: props.defaultDate ? props.defaultDate : new Date(),
      chosenDate:
        !props.placeHolderText && props.defaultDate
          ? props.defaultDate
          : undefined
    };
  }

  setDate(date) {
    this.setState({ chosenDate: new Date(date), androidVisible: false });
    if (this.props.onDateChange) {
      this.props.onDateChange(date);
    }
  }

  showDatePicker = () => {
    if (Platform.OS === 'ios') {
      this.setState({ iosVisible: true });
    } else {
      this.setState({ androidVisible: true });
    }
  };

  formatChosenDate(date) {
    if (this.props.formatChosenDate) {
      return this.props.formatChosenDate(date);
    }
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
  }

  render() {
    const {
      animationType,
      disabled,
      locale,
      maximumDate,
      minimumDate,
      modalTransparent,
      placeHolderText,
      placeHolderTextStyle,
      textStyle,
      timeZoneOffsetInMinutes
    } = this.props;

    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    return (
      <View>
        <View>
          <Text
            onPress={() => (!disabled ? this.showDatePicker() : undefined)}
            style={[
              {
                padding: variables.datePickerPadding,
                color: variables.datePickerTextColor
              },
              this.state.chosenDate ? textStyle : placeHolderTextStyle
            ]}
          >
            {this.state.chosenDate
              ? this.formatChosenDate(this.state.chosenDate)
              : placeHolderText || 'Select Date'}
          </Text>
          {this.state.androidVisible && (
            <DateTimePicker
              date={
                this.state.chosenDate
                  ? this.state.chosenDate
                  : this.state.defaultDate
              }
              onDateChange={date => this.setDate(date)}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              mode="date"
              locale={locale}
              timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
            />
          )}
          <View>
            <Modal
              supportedOrientations={['portrait', 'landscape']}
              animationType={animationType}
              transparent={modalTransparent} // from api
              visible={this.state.iosVisible}
              onRequestClose={() => {}}
            >
              <Text
                onPress={() => this.setState({ iosVisible: false })}
                style={{
                  backgroundColor: variables.datePickerBg,
                  flex: variables.datePickerFlex
                }}
              />
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
              >
                <Button
                  transparent
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                  onPress={() => this.setState({ iosVisible: false })}
                >
                  <Text style={{ fontWeight: 'bold' }}>Done</Text>
                </Button>
              </View>
              <DateTimePicker
                date={
                  this.state.chosenDate
                    ? this.state.chosenDate
                    : this.state.defaultDate
                }
                onDateChange={date => this.setDate(date)}
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                mode="date"
                locale={locale}
                timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
              />
            </Modal>
          </View>
        </View>
      </View>
    );
  }
}
