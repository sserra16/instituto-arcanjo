import React, { MutableRefObject, useEffect, useRef } from "react";
import { useField } from '@unform/core';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textarea?: boolean;
  textPlaceholder?: string;
}

export default function Input({ textPlaceholder, textarea, ...rest }: InputProps) {
  const inputRef = useRef(null);
  let name = rest.name ? rest.name : "";
  
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: name,
      ref: inputRef,
      getValue: (ref: MutableRefObject<HTMLInputElement>) => {
        return ref.current.value
      },
      setValue: (ref: MutableRefObject<HTMLInputElement>, value: string) => {
        ref.current.value = value;
      }
    })
  }, [fieldName, registerField]);

  return !textarea ? (
    <input ref={inputRef} {...rest} />
  ) : (
    <textarea placeholder={textPlaceholder} ref={inputRef} className="input"></textarea>
  );
}
