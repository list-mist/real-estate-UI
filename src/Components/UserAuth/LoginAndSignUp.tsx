import React, { useState } from "react"
import {Form, Button, Checkbox, Input} from "antd";
import { useForm } from "antd/lib/form/Form";

export type FieldType = {
    username : String,
    email : String,
    password : String,
    phoneNo : String | Number,
    remember : boolean
}

const LoginAndSignUp : React.FC = () =>{
   const[form] = useForm();
   const [login, setLogin] = useState<Boolean>(false)
   
   const onFinish = () =>{
    const formData = form.getFieldsValue();
    console.log("Form Data:", formData);
   }

   return <>
   <Form
    name="basic"
    form={form}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
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

        {login ? "Register here": "Already have an account"}
        </Button>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        {login ? "Login" : "Sign Up"}
      </Button>
    </Form.Item>
  </Form>
   </>
}

export default LoginAndSignUp;


