import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
   
  }
 //
  render(){
    return (
      <DatePicker
        style={{width: 200}}
        //date={this.props.Date}
        value ={ this.props.Date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={this.props.onChange }
      />
    )
  }
}




