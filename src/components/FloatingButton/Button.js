//Not using now
import React from "react";
import { ButtonBase } from "./FloatingButtonElement";
import { Add } from "@styled-icons/material/Add";

const Button = React.forwardRef(function Button(
  { style, className, isOpen, onClick },
  ref
) {
  return (
    <ButtonBase
      ref={ref}
      style={style}
      className={className}
      isOpen={isOpen}
      onClick={onClick}
    >
      <Add size={28} />
    </ButtonBase>
  );
});

export default Button;
