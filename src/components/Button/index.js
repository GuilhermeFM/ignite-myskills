import React from "react";

import { Button, ButtonText } from "./styles";

export default function ({ children, ...rest }) {
  return (
    <Button {...rest}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}
