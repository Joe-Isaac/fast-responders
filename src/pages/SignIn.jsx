import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import { authentication, db } from "../Firebase/firebase-config";
import logo from "../assets/logo.jpg";
import { Card, Form, Input } from "antd";

function SignIn() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const auth = getAuth();
    const subsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigateUserByRole();
      } else {
        console.log("User not logged in");
      }
    });

    subsribe();
  }, []);

  async function navigateUserByRole() {
    const auth = getAuth();

    const docRef = doc(db, "users", auth?.currentUser?.uid);
    const data = await getDoc(docRef);
    if (data) {
      const userInfo = data.data();

      if (userInfo.role === "driver") {
        //   navigation.navigate("HomeScreen");
      } else if (userInfo.role == "serviceProvider") {
        //   navigation.navigate("ProviderProfileScreen");
      } else {
        console.log("Theres been an error with the user role ", userInfo.role);
      }
    } else {
      console.log("There was an error getting data");
    }
  }

  async function signIn() {
    try {
      const res = await signInWithEmailAndPassword(
        authentication,
        emailAddress,
        password
      );
      navigateUserByRole();
    } catch (err) {
      console.log(err, " error while fetching ");
    }
  }

  function submitForm(data) {
    console.log("We have submitted form data ", data);
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

        {/* Any other details section */}
      </div>
    </div>
  );
}

export default SignIn;
