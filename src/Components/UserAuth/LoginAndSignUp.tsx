import React, { useState } from "react"
import {Form, Button, Checkbox, Input, Divider} from "antd";
import { useForm } from "antd/lib/form/Form";
import "./LoginSignup.css";
import styled from "styled-components";
import img from "./images/image1.jpg";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";


const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -5px;
    width: 100%;
    height: 93vh;
    background-image: url(${img});
    background-size: cover;
`

const StyledForm = styled(Form)`
  background-color: rgba(255, 255, 255, 0.33);
  box-shadow: 10px 10px 62px 0 rgba(90, 100, 255, 0.33);
  backdrop-filter: blur(5px);
  width: fit-content;
  height: fit-content;
  height: 55%;
  width: 100%;
  border-radius: 16px;
  padding-top: 30px;
  padding-right: 100px;
`;

export type FieldType = {
    username : String,
    email : String,
    password : String,
    phoneNo : String | Number,
    remember : boolean
}

const LoginAndSignUp : React.FC = () =>{
  
  
   
   const [form] = Form.useForm(); // Changed to Form.useForm()

   const [login, setLogin] = useState<Boolean>(false)
   
   const onFinish = () =>{
    const formData = form.getFieldsValue();
    console.log("Form Data:", formData);
   }

   return <>
  <StyledDiv style={{backgroundImage:"./images/image1.jpg"}}>
   <StyledForm 
    name="basic"
    form={form}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 ,}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    {login ? "":
    <Form.Item<FieldType>
    label="Username"
    name="username"
    rules={[{ required: true, message: 'Please input your username!' }]}
    >
     <Input />
     </Form.Item> }

    <Form.Item<FieldType>

      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    {login ? 
    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    : ""}
    <Form.Item wrapperCol={{offset : 8, span : 10}}>

        <Button onClick={() => {
          if(login) setLogin(false)
          else{
            setLogin(true)
          }
        }}>
        
        {login ? "Don't have an account ? Register here": "Already have an account"}
        </Button>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        {login ? "Login" : "Sign Up"}
      </Button>
      <Divider style={{borderColor:"black"}}>{login ? "Login" : "Sign Up"}</Divider>
      <div className="icons">
        <GoogleOutlined className="google" onClick={() => { console.log("Login cutu") }}/>
        <MailOutlined className="google"/>
      </div>
    </Form.Item>
  </StyledForm>
  </StyledDiv>
   </>
}


export default LoginAndSignUp;


