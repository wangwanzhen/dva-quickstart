import React from 'react';
import {
  connect
} from 'dva';
import styles from './user.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Message
} from 'antd';
const FormItem = Form.Item
const RestInput = styled(Input)
`
	&.ant-input-affix-wrapper .ant-input:not(:first-child){
		padding-left:42px;
	}
.ant-input {
	font-size:18px;
  color:#272E40;
}
`
class UserLogin extends React.Component {
  state = {
    userName: '',
    password: '',
    errormsg: ''
  }
  inputStyle = {
    height: '50px',
    width: "400px",
    fontSize: '18px'
  }
  static contextTypes = {
    router: PropTypes.object
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'usermodel/userLogin',
          payload: {
            login: values.userName,
            password: values.password,
            isRember: values.rememberUserName
          },
          success: (res) => {
          },
          fail: (rea) => {
          }
        })
      }
    });
  }
  componentDidMount() {
    this.setState({
      userName: this.props.userName
    })
  }
  componentWillUnmount() {

  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return (
      <div className={styles.loginBody} style={{backgroundImage:`url(${require('../../assets/user/bg_login.png')})`}}>
      	<div>
      		<div className={styles.loginTitle}>
            <span style={{fontSize:"50px",fontWeight:'bold'}}>
              <img src={require('../../assets/user/icon_logo.png')}/>
            </span>
            <span className={styles.loginTitleDesc}>厂家后台管理系统</span>
          </div>
      	<div className={styles.loginCard}>
        	<div className={styles.assistText}>登录</div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入您的账号!' }],
                  initialValue:this.state.userName
                })(
                  <RestInput style={this.inputStyle} size='large' prefix={<Icon type="user" style={{ color: 'rgb(200,201,206)',fontSize:24,marginRight:'14px' }} />} placeholder="请输入您的账号" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入您的密码!' },{validator:(rule,value,cb)=>this.state.errormsg?cb(this.state.errormsg):cb(),message:this.state.errormsg}],
                  initialValue:this.state.password
                })(
                  <RestInput style={this.inputStyle} size='large' prefix={<Icon type="lock" style={{ color: 'rgb(200,201,206)',fontSize:24,marginRight:'14px' }} />} type="password" placeholder="请输入您的密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('rememberUserName', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox className={styles.checkBox}>记住账号</Checkbox>
                )}
              </FormItem>
              <Button type="primary" htmlType="submit" style={{height:'50px',width:'100%',fontSize:'20px'}} loading={this.props.loading}>
                  登录
              </Button>
              <div className={styles.LoginHelp}>更多账号密码问题请联系客服:13758257847</div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.usermodel.userName,
    loading: state.loading.effects['usermodel/userLogin']
  }
}
export default connect(mapStateToProps)(Form.create()(UserLogin));
