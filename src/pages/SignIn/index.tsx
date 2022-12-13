// node_modules
import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

// components
import SignInFormComponent from "../../components/SignIn";
import AuthLayoutComponent from "../../components/AuthLayout";

const SignInPage = () => {
    const { colorMode } = useColorMode();

    return (
        <AuthLayoutComponent>
            <SignInFormComponent />
        </AuthLayoutComponent>
    );
};

export default SignInPage;
