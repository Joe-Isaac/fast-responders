import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { authentication, db } from "../Firebase/firebase-config";
import logo from "../assets/logo.jpg";
import { Card, Form, Input, Modal, Spin } from "antd";

function SignUp() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [form] = Form.useForm();

//   useEffect(() => {
//     const auth = getAuth();
//     const subsribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         navigateUserByRole();
//       } else {
//         console.log("User not logged in");
//       }
//     });

//     subsribe();
//   }, []);

//   async function navigateUserByRole() {
//     const auth = getAuth();

//     const docRef = doc(db, "users", auth?.currentUser?.uid);
//     const data = await getDoc(docRef);
//     if (data) {
//       const userInfo = data.data();

//       if (userInfo.role === "driver") {
//         //   navigation.navigate("HomeScreen");
//       } else if (userInfo.role == "serviceProvider") {
//         //   navigation.navigate("ProviderProfileScreen");
//       } else {
//         console.log("Theres been an error with the user role ", userInfo.role);
//       }
//     } else {
//       console.log("There was an error getting data");
//     }
//   }

//   async function signIn() {
//     try {
//       const res = await signInWithEmailAndPassword(
//         authentication,
//         emailAddress,
//         password
//       );
//       navigateUserByRole();
//     } catch (err) {
//       console.log(err, " error while fetching ");
//     }
//   }

  async function submitForm(data) {
    console.log("We have submitted form data ", data);

    setIsCreatingUser(true);
    try{
        // create user with email and password
      const userCredential = await createUserWithEmailAndPassword(authentication, data.email, data.password);
      console.log("User created ", userCredential.user);
      // save user role to Firestore
      const user = userCredential.user;

    //   We start by creating a collection ref
      const userCollectionRef = collection(db, "users");

    //   From the collection ref, create a document for the created user using their uuid.
    //   Notice that the last argument is always the name of the collection/document.
      const docRef = doc(userCollectionRef, user.uid);

    //   The only way to create a document or a collection is by passing the ref to setDoc or setCollection method.
    //   Then we can pass the data along with the ref. This will be an object with the given keys.
    const res = await setDoc(docRef, {
        uid: user.uid,
        email: user.email,
        role: "driver",
        data: null,
      });
        setIsCreatingUser(false);
        console.log("This is the response from creating a user in firebase. ", res)
        successMessage(`user with email ${data?.email} created successfully. User repo also initialized.`)
    }
    catch(err){
        setIsCreatingUser(false);
        errorMessage(err.message);
    }

    
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
          <p style={{fontWeight: 'bold', fontSize: 15}}> {message}</p>{' '}
        </div>
      ),
    });
  };

  const errorMessage = (message) => {
    Modal.error({
      title: (
        <div>
          {' '}
          <p style={{color: 'red'}}> Error Message</p>{' '}
        </div>
      ),
      content: (
        <div>
          {' '}
          <p style={{fontWeight: 'bold', fontSize: 15}}> {message}</p>{' '}
        </div>
      ),
    });
  };

  const creatingUser = (message) => {
    Modal.info({
      title: (
        <div>
          {' '}
          <p style={{color: 'green'}}> Success Message</p>{' '}
        </div>
      ),
      content: (
        <div>
          {' '}
          <p style={{fontWeight: 'bold', fontSize: 15}}> {message}</p>{' '}
        </div>
      ),
    });
  };


  function validatorFunction(_,data){
    if(data == null || data == undefined || data == ""){
        return Promise.reject("Please confirm the password!");
    }
    else{
        if(data === form.getFieldValue("password")){
            return Promise.resolve();
        }
        else{
            return Promise.reject("Passwords do not match!");
        }
        
    }
}

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
          <div className="text-3xl font-sans font-bold">Create user</div>
          <div className="text-sm font-mono my-3">Create your user below</div>
          </div>
            <Form form={form} onFinish={submitForm} className="w-4/5">
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

              <Form.Item
              {...formItemLayout}
              className="text-lg my-8"
                rules={[
                  {
                    validator: validatorFunction,
                    validateTrigger: "onSubmit",
                  }
                ]}
                label="Confirm"
                name="confirmPassword"
              >
                <Input.Password visibilityToggle size="large" className="w-4/5"/>
              </Form.Item>

              <div className="w-full flex h-12 justify-center">
                <button type="submit" className="text-white  w-3/4 font-bold hover:bg-white hover:text-black bg-blue-500 py-2 hover:border-2 px-4 rounded-lg font-mono text-xl">
                    Create User
                </button>
              </div>
            </Form>
          </div>
        </Card>

        <Modal footer={false} closable={false} open={isCreatingUser}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <p
                    style={{
                      fontSize: 28,
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      color: '#4096ff',
                    }}>
                    Creating User
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Spin size='large' />
                </div>
              </Modal>

        {/* Any other details section */}
      </div>
    </div>
  );
}

export default SignUp;
