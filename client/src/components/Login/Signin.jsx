import {
    Button,
    ButtonGroup,
    Heading,
    VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { Form } from "formik";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "@chatapp/common";
  
const Signin = () => {
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        const vals = {...values};

        fetch("http://localhost:4000/auth/login", {
          method: "POST",
          credentials: "include",
          headers: {"Content-type": "application/json",},
          body: JSON.stringify(vals),
        })
          .catch(err => {return;})
          .then(res => {
            if(!res || !res.ok || res.status >=400) {
              return;
            }
            return res.json();
          })
          .then(data => {
            if(!data) return;
            console.log(data);
          })
        actions.resetForm();
      }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1.7rem"
      >
        <Heading>Log in</Heading>

        <TextField
          name="username"
          placeholder="Drunkpotato07"
          autoComplete="off"
          label="username"
        />

        <TextField
          name="password"
          type="password"
          placeholder="admin123"
          autoComplete="off"
          label="password"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Log in
          </Button>
          <Button onClick={()=> navigate("/register")}>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Signin;
  