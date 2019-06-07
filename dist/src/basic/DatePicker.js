Object.defineProperty(exports,"__esModule",{value:true});exports.DatePicker=undefined;var _jsxFileName="src/basic/DatePicker.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactNative=require("react-native");var _Text=require("./Text");var _Button=require("./Button");var _platform=require("../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DatePicker=exports.DatePicker=function(_React$Component){_inherits(DatePicker,_React$Component);function DatePicker(props){_classCallCheck(this,DatePicker);var _this=_possibleConstructorReturn(this,(DatePicker.__proto__||Object.getPrototypeOf(DatePicker)).call(this,props));_this.state={modalVisible:false,defaultDate:props.defaultDate?props.defaultDate:new Date(),chosenDate:!props.placeHolderText&&props.defaultDate?props.defaultDate:undefined};return _this;}_createClass(DatePicker,[{key:"setDate",value:function setDate(date){this.setState({chosenDate:new Date(date)});if(this.props.onDateChange){this.props.onDateChange(date);}}},{key:"showDatePicker",value:function showDatePicker(){if(_reactNative.Platform.OS==="android"){this.openAndroidDatePicker();}else{this.setState({modalVisible:true});}}},{key:"openAndroidDatePicker",value:function openAndroidDatePicker(){var newDate,action,year,month,day,selectedDate,code,message;return regeneratorRuntime.async(function openAndroidDatePicker$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regeneratorRuntime.awrap(_reactNative.DatePickerAndroid.open({date:this.state.chosenDate?this.state.chosenDate:this.state.defaultDate,minDate:this.props.minimumDate,maxDate:this.props.maximumDate,mode:this.props.androidMode}));case 3:newDate=_context.sent;action=newDate.action,year=newDate.year,month=newDate.month,day=newDate.day;if(action==="dateSetAction"){selectedDate=new Date(year,month,day);this.setState({chosenDate:selectedDate});this.props.onDateChange(selectedDate);}_context.next=13;break;case 8:_context.prev=8;_context.t0=_context["catch"](0);code=_context.t0.code;message=_context.t0.message;console.warn("Cannot open date picker",message);case 13:case"end":return _context.stop();}}},null,this,[[0,8]]);}},{key:"formatChosenDate",value:function formatChosenDate(date){if(this.props.formatChosenDate){return this.props.formatChosenDate(date);}return[date.getDate(),date.getMonth()+1,date.getFullYear()].join('/');}},{key:"render",value:function render(){var _this2=this;var variables=this.context.theme?this.context.theme["@@shoutem.theme/themeStyle"].variables:_platform2.default;return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:78}},_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:79}},_react2.default.createElement(_Text.Text,{onPress:!this.props.disabled?this.showDatePicker.bind(this):undefined,style:[{padding:10,color:variables.datePickerTextColor},this.state.chosenDate?this.props.textStyle:this.props.placeHolderTextStyle],__source:{fileName:_jsxFileName,lineNumber:80}},this.state.chosenDate?this.formatChosenDate(this.state.chosenDate):this.props.placeHolderText?this.props.placeHolderText:"Select Date"),_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:93}},_react2.default.createElement(_reactNative.Modal,{supportedOrientations:['portrait','landscape'],animationType:this.props.animationType,transparent:this.props.modalTransparent,visible:this.state.modalVisible,onRequestClose:function onRequestClose(){},__source:{fileName:_jsxFileName,lineNumber:94}},_react2.default.createElement(_Text.Text,{onPress:function onPress(){return _this2.setState({modalVisible:false});},style:{backgroundColor:variables.datePickerBg,flex:1},__source:{fileName:_jsxFileName,lineNumber:101}}),_react2.default.createElement(_reactNative.View,{style:{flexDirection:"row",justifyContent:"flex-end"},__source:{fileName:_jsxFileName,lineNumber:105}},_react2.default.createElement(_Button.Button,{transparent:true,style:{paddingTop:0,paddingBottom:0},onPress:function onPress(){return _this2.setState({modalVisible:false});},__source:{fileName:_jsxFileName,lineNumber:108}},_react2.default.createElement(_Text.Text,{style:{fontWeight:"bold"},__source:{fileName:_jsxFileName,lineNumber:113}},"Done"))),_react2.default.createElement(_reactNative.DatePickerIOS,{date:this.state.chosenDate?this.state.chosenDate:this.state.defaultDate,onDateChange:this.setDate.bind(this),minimumDate:this.props.minimumDate,maximumDate:this.props.maximumDate,mode:"date",locale:this.props.locale,timeZoneOffsetInMinutes:this.props.timeZoneOffsetInMinutes,__source:{fileName:_jsxFileName,lineNumber:117}})))));}}]);return DatePicker;}(_react2.default.Component);DatePicker.defaultProps={disabled:false};
//# sourceMappingURL=DatePicker.js.map