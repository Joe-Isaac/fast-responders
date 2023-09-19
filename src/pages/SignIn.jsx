import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import { authentication, db } from "../Firebase/firebase-config";
import logo from "../assets/logo.jpg";
import { Card, Form, Input, Modal, Spin, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

function SignIn() {
  const location = useLocation();
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const data = location.state;
  const navigate = useNavigate();

  const successMessage = (message) => {
    Modal.success({
      title: (
        <div>
          {' '}
          <p style={{color: 'green'}}> Success Message</p>{' '}
        </div>
      ),
      content: (
        <div>
          {' '}
          <p style={{fontWeight: 'bold', fontSize: 15}}> Successfully signed in</p>{' '}
        </div>
      )
    });
  };

  const errorMessage = (errorMsg) => {
    Modal.error({
      title: (
        <div>
          <p style={{color: '#f5222d'}}> Error Message</p>
        </div>
      ),
      content: (
        <div>
          <p style={{fontWeight: 'bold', fontSize: 15}}>{errorMsg}</p>
        </div>
      ),
    });
  };

  // Below useEffect checks if the user is logged in and they trynna access the login page
  useEffect(() => {
    const auth = getAuth();
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigateUserByRole();
      } else {
        console.log("User not logged in");
      }
    });

    subscribe();
  }, []);

  // Below useEffect checks if we have been redirected to this page
  useEffect(()=>{
    if(data !== null){
      message.error(data.message);
    }
  }, [])

  // This function will navigate the user by the role after signing in
  async function navigateUserByRole() {
    const auth = getAuth();

    console.log("This is auth ", auth);

    const docRef = doc(db, "users", auth?.currentUser?.uid);
    const data = await getDoc(docRef);
    if (data) {
      const userInfo = data.data();

      // console.log("This is user info ", userInfo);

      if (userInfo.role === "driver") {
          navigate("/profile")
      } else if (userInfo.role == "admin") {
        //   navigation.navigate("ProviderProfileScreen");
        navigate("/create-user")
      } else {
        console.log("Theres been an error with the user role ", userInfo.role);
      }
    } else {
      console.log("There was an error getting data");
      errorMessage("User data does not exist");
    }
  }

  // This is signing in
  async function signIn(data) {
    console.log("Signing in user to firebase")
    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        authentication,
        data.email,
        data.password
      );
      console.log("This is the response after signing in ", res);
      setIsLoading(false);
      successMessage("Successfully signed in")
      navigateUserByRole();
    } catch (err) {
      setIsLoading(false);
      errorMessage(err.message);
      console.log(err.message, " error while fetching ");
    }

      setIsLoading(false);
  }

  function submitForm(data) {
    signIn(data);
  }

  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
      sm: {span: 24},
      md: {span: 6},
    },
    wrapperCol: {
      xs: {span: 24},
      sm: {span: 24},
      md: {span: 18},
    },
  };

  return (
    <div className="h-screen flex items-center bg-blue-50">
      <div className="w-full flex justify-center items-center">
        {/* Header section */}

        {/* <div>Fast Responders</div> */}

        {/* Sign in Card */}
        <Card
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px",
          }}
          className="w-2/5"
        >
          <div className="w-full flex justify-center">
          <img src={logo} className="object-cover h-28 w-28" />
          </div>

          <div className="flex w-full flex-col items-center justify-center">
          <div className="my-3">
          <div className="text-3xl font-sans font-bold">Sign In</div>
          <div className="text-sm font-mono my-3">Welcome back, sign in below</div>
          </div>
            <Form onFinish={submitForm} className="w-4/5">
              <Form.Item
              {...formItemLayout}
              className="text-lg my-8"
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter email",
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email',
                  },
                ]}
              >
                <Input size="large" className="w-4/5 font-mono text-base"/>
              </Form.Item>
              <Form.Item
              {...formItemLayout}
              className="text-lg my-8"
                rules={[
                  {
                    required: true,
                    message: "Please enter password",
                  }
                ]}
                label="Password"
                name="password"
                
              >
                <Input.Password visibilityToggle size="large" className="w-4/5"/>
              </Form.Item>

              <div className="w-full flex h-12 justify-center">
                <button className="text-white  w-3/4 font-bold hover:bg-white hover:text-black bg-blue-500 py-2 hover:border-2 px-4 rounded-lg font-mono text-xl">
                  Sign in
                </button>
              </div>
            </Form>
          </div>
        </Card>

        <Modal open={isLoading} footer={false} closable={false}>
          <div className="flex flex-col my-4 space-y-4 items-center justify-center">
          <div className="font-sans font-semibold text-2xl">Signing in</div>
          <Spin/>
          </div>
        </Modal>

        {/* Any other details section */}
      </div>
    </div>
  );
}

export default SignIn;
