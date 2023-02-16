import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FreeTrialBtn from "./FreeTrialBtn";
import errorIcon from "../../public/images/icon-error.svg";

const Form = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [personData, setPersonData] = useState([]);
  console.log(personData);
  return (
    <>
      <FreeTrialBtn />
      <StyledFormContainer
        onSubmit={handleSubmit((data) => {
          setPersonData((prevData) => [...prevData, data]);
        })}
      >
        <StyledForm>
          <InputContainer>
            <Input
              type="text"
              defaultValue={getValues("firstname")}
              placeholder="Your name"
              {...register("firstname", {
                required: "First Name cannot be empty",
                minLength: {
                  value: 4,
                  message: "Min length required 4",
                },
              })}
            />
            <p>{errors.firstname?.message}</p>

            {errors.firstname?.message && <img src={errorIcon} />}
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              defaultValue={getValues("lastname")}
              placeholder="Your Lastname"
              {...register("lastname", {
                required: "Last Name cannot be empty",
                minLength: {
                  value: 4,
                  message: "Min length required 4",
                },
              })}
            />
            <p>{errors.lastname?.message}</p>
            {errors.lastname?.message && <img src={errorIcon} />}
          </InputContainer>
          <InputContainer>
            <StyledEmailInput
              type="text"
              defaultValue={getValues("email")}
              placeholder="Your Email"
              {...register("email", {
                required: "Email cannot be empty",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Looks like this is not an email",
                },
              })}
            />
            <p>{errors.email?.message}</p>
            {errors.email?.message && <img src={errorIcon} />}
          </InputContainer>
          <InputContainer>
            <StyledPassInput
              type="password"
              defaultValue={getValues("password")}
              placeholder="Your Password"
              {...register("password", {
                required: "Password cannot be empty",
                minLength: {
                  value: 6,
                  message: "At least 6 characters",
                },
              })}
            />
            <p>{errors.password?.message}</p>
            {errors.password?.message && <img src={errorIcon} />}
          </InputContainer>
          <Submit>Claim your free trial</Submit>
          <StyledQuote>
            By clicking the button, you are agreeing to our{" "}
            <strong>Terms and Services</strong>
          </StyledQuote>
        </StyledForm>
      </StyledFormContainer>
    </>
  );
};

export default Form;

export const StyledQuote = styled.p`
  width: 95%;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 11px;
  line-height: 21px;
  /* or 191% */

  text-align: center;

  color: #bab7d4;

  strong {
    font-weight: 700;
    font-size: 11px;
    line-height: 21px;
    /* or 191% */

    text-align: center;

    color: #ff7979;
  }
`;

export const StyledFormContainer = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  /* width: 90%; */
  /* margin: auto; */
`;
export const Submit = styled.button`
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 1px;
  color: #ffffff;
  width: 100%;
  background-color: ${({ theme }) => theme.colors?.green};
  height: 3.5rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 -4px 4px 0 inset #00000040;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 450px;
  min-width: 325px;
  padding: 2rem 2rem 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 6px 6px 0px #00000040;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
  img {
    position: absolute;
    right: 0.5rem;
    top: 0.9rem;
  }
  p {
    margin-top: 5px;
    font-style: italic;
    font-weight: 500;
    font-size: 11.5px;
    line-height: 16px;
    /* identical to box height */
    color: red;
    text-align: right;
  }
`;

export const Input = styled.input`
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 186% */

  letter-spacing: 0.4px;

  color: #3d3b48;
  text-indent: 1rem;
  height: 3.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid
    ${(props) =>
      props.defaultValue?.length < 4 ? "red" : "rgba(0, 0, 0, 0.35)"};

  &:focus {
    outline: 1px solid
      ${(props) => (props.defaultValue?.length < 4 ? "red" : "#5e54a4")};
  }
`;

export const StyledEmailInput = styled(Input)`
  border: 1px solid
    ${(props) =>
      props.defaultValue?.length >= 0 &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(props.defaultValue)
        ? "red"
        : "rgba(0, 0, 0, 0.35)"};
  &:focus {
    outline: 1px solid
      ${(props) =>
        props.defaultValue?.length >= 0 &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(props.defaultValue)
          ? "red"
          : "#5e54a4"};
  }
`;
export const StyledPassInput = styled(Input)`
  border: 1px solid
    ${(props) =>
      props.defaultValue?.length < 6 ? "red" : "rgba(0, 0, 0, 0.35)"};

  &:focus {
    outline: 1px solid
      ${(props) => (props.defaultValue?.length < 6 ? "red" : "#5e54a4")};
  }
`;
