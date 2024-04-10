import React, { useState, useEffect } from "react";

interface Props {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setResponse: React.Dispatch<
    React.SetStateAction<{
      type: string;
      message: string;
    }>
  >;
}

const Form: React.FC<Props> = ({ setFormSubmitted, setResponse }) => {
  // variables
  const API_KEY = process.env.REACT_APP_FORM_API_KEY as string;
  const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // state
  const [form, setForm] = useState({
    email: "",
    message: "",
    accessKey: API_KEY,
  });

  // validation
  const [errors, setErrors] = useState({
    email: {
      type: "",
      description: "",
    },
    message: {
      type: "",
      description: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validation
    if (form.email.length === 0) {
      setErrors((prev) => ({
        ...prev,
        email: { type: "required", description: "Email address is required" },
      }));
      return false;
    } else if (form.email.length > 0) {
      setErrors((prev) => ({
        ...prev,
        email: { type: "", description: "" },
      }));
    }

    if (!emailValidation.test(form.email)) {
      setErrors((prev) => ({
        ...prev,
        email: {
          type: "pattern",
          description: "Please enter a valid email address.",
        },
      }));
      return false;
    } else if (emailValidation.test(form.email)) {
      setErrors((prev) => ({
        ...prev,
        email: {
          type: "",
          description: "",
        },
      }));
    }

    if (form.message.length === 0) {
      setErrors((prev) => ({
        ...prev,
        message: { type: "required", description: "Message is required" },
      }));
      return false;
    } else if (form.message.length > 0) {
      setErrors((prev) => ({
        ...prev,
        message: { type: "", description: "" },
      }));
    }

    // handle submit
    try {
      const res = await fetch("https://api.staticforms.xyz/submit/", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      console.log(json);

      if (json.success) {
        setResponse({
          type: "success",
          message: "Your message has been sent!",
        });
        setFormSubmitted(true);
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };
  // render
  return (
    <form
      action={"https://api.staticforms.xyz/submit"}
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="accessKey" defaultValue={API_KEY} />
      <div>
        <label htmlFor="email">Email address:</label>
        {errors.email.type === "required" && (
          <span>{errors.email.description}</span>
        )}
        {errors.email.type === "pattern" && (
          <span>{errors.email.description}</span>
        )}
      </div>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            email: value.target.value,
          }));
        }}
      />
      <div>
        <label htmlFor="message">Message:</label>
        {errors.message.type === "required" && (
          <span>{errors.message.description}</span>
        )}
      </div>
      <textarea
        name="message"
        id="message"
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            message: value.target.value,
          }));
        }}
      />
      <input type="text" name="honeypot" style={{ display: "none" }}></input>

      <div className="submit-button">
        <div className="submit-button-border"></div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
