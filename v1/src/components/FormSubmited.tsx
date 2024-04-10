import React from "react";
import onSuccessImg from "../images/form-submit.png";

interface Props {
  response: {
    type: string;
    message: string;
  };
}

const OnSuccess: React.FC<Props> = ({ response }) => {
  return (
    <div className="contact-container-submit-success">
      <img src={onSuccessImg} alt="Your message has been send" />
      <strong>{response.message}</strong>
    </div>
  );
};
const OnError: React.FC<Props> = ({ response }) => {
  return (
    <div className="contact-container-submit-error">
      <strong>{response.message}</strong>
    </div>
  );
};

const FormSubmit: React.FC<Props> = ({ response }) => {
  return (
    <div className="contact-container-submit">
      {response.type === "success" && <OnSuccess response={response} />}
      {response.type === "error" && <OnError response={response} />}
    </div>
  );
};
export default FormSubmit;
