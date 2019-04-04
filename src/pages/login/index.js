import React, { Component } from 'react'

import "./login.less"





import { Form, Input, Row, Col, Icon, Button } from 'antd';


const FormItem = Form.Item
const formItemLayout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 4 },
};



class Login extends Component {



    componentDidMount(){







 
        console.log("object--------------->   ")
    }
    render() {

        const { getFieldDecorator } = this.props.form
        return (


            <Form className="wrap" >

                <Row type="flex"  align="middle" style={{height:"100vh"}}>
                    <Col span={24} style={{marginBottom:100}}>
                        <Row><Col className="title">欢迎你</Col></Row>

                        <Row type="flex" justify="center">
                            <Col span={6} >
                                <FormItem>
                                    {
                                        getFieldDecorator("user_name")(
                                            <Input placeholder="请输入用户名" className="user_name"    prefix={<Icon type="user" style={{ color: '#AAAAAA', fontSize:25 }} />}/>
                                        )
                                    }
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <Col span={6} >
                                <FormItem>
                                    {
                                        getFieldDecorator("password")(
                                            <Input placeholder="请输入密码" className="password"   prefix={<Icon type="lock" style={{ color: '#AAAAAA', fontSize:25 ,}} />}/>
                                        )
                                    }
                                </FormItem>
                            </Col>
                        </Row>

                        <Row type="flex" justify="center">
                            <Col span={6} >
                                    <Button type="primary">登录</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Form>
        )
    }
}

export default Form.create()(Login)