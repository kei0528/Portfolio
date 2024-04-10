import React, { useState } from "react";
import Form from "./Contact.Form";
import FormSubmitted from "./FormSubmited";

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    message: "",
  });
  return (
    <section className="contact" id="contact">
      <div
        className={
          "contact-container" + " " + (formSubmitted ? "submitted" : "")
        }
      >
        <div className="contact-container-greeting">
          <h2>Contact</h2>
          {!formSubmitted && (
            <p>I am always happy to hear from you. Feel free to contact me! </p>
          )}
        </div>
        {!formSubmitted && (
          <Form setFormSubmitted={setFormSubmitted} setResponse={setResponse} />
        )}
        {formSubmitted && <FormSubmitted response={response} />}

        <address>
          <table>
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-user"></i>
                </td>
                <td>Keisuke Tanaka</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-envelope"></i>
                </td>
                <td>
                  <a href="mailto:keisuketanaka97@gmail.com">
                    keisuketanaka97@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-phone"></i>
                </td>
                <td>
                  <a href="tel:01781115017">01781115017</a>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fab fa-github"></i>
                </td>
                <td>
                  <a href="https://github.com/kei0528">@kei0528</a>
                </td>
              </tr>
            </tbody>
          </table>
        </address>
      </div>
    </section>
  );
};

export default Contact;
