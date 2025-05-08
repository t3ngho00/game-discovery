import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error) ? "Invalid page" : "Something went wrong"}
      </Text>
    </>
  );
};

export default ErrorPage;
