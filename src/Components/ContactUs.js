import React, {useState} from 'react'
import Header from "./Header";
import FooterBottom from "./FooterBottom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  Form,
  Col,
  Button,
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";

 import {contactCreate} from '../Redux/ContactUs/ContactActions'
import { useSelector,useDispatch } from 'react-redux'

function ContactUs(){
  const contact_detail = useSelector(state => state.Contact)
  const dispatch = useDispatch()
  console.log("loading",contact_detail.loading)
  console.log("success",contact_detail.success)

  const [inputValues,setInputValues] = useState({contact_name: "",contact_email: "",contact_phone: "",contact_subject: "",contact_message: ""})
  const submitHandler = (event) =>{
    event.preventDefault();
      const data = inputValues
      dispatch(contactCreate(data));
  }
  return(
    <div className="contact">
      <Header />
      <div className="row">
        <div className="container">
          <div className="row main-contact">
            {contact_detail.loading ? (
              <div className="col-md-8 main-contactform ">
                {contact_detail.success ? (
                  <div className="contact-submit">
                  <h1>Form submitted successfully!</h1>
                  </div>
                ) : (
                  <div className="contact-loader">
                    <img src="/img/loader.gif"></img>
                  </div>
                )}
              </div>
            ) : (
              <div className="col-md-8 main-contactform ">
                <h4>Send a message</h4>

                <p>
                  We are looking forward to hearing any comments or concerns
                  you might have. Please fill out the following information
                  and leave your message. Someone will get back to you as soon
                  as possible.
                </p>
                <Form onSubmit={event => submitHandler(event)}>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>*Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={inputValues.contact_name}
                        onChange={e =>
                          setInputValues({...inputValues,contact_name : e.target.value})
                        }
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>*Email</Form.Label>
                      <Form.Control
                        type="email"
                        required
                        value={inputValues.contact_email}
                        onChange={e =>
                          setInputValues({...inputValues,contact_email : e.target.value})
                        }
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group>
                    <Form.Label>*Phone</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={inputValues.contact_phone}
                      onChange={e => setInputValues({...inputValues,contact_phone : e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={inputValues.contact_subject}
                      placeholder="Booking"
                      onChange={e =>
                        setInputValues({...inputValues,contact_subject : e.target.value})
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>*Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="7"
                      required
                      value={inputValues.contact_message}
                      onChange={e =>
                        setInputValues({...inputValues,contact_message : e.target.value})
                      }
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" name="submit">
                    SEND MESSAGE
                  </Button>
                </Form>
              </div>
            )}
            <div className="col-md-4 contactus-heading">
              <h4>Contact Us</h4>
              <h5>DineReserve™</h5>
              <div className="mobile-no">
                <p>
                  P:(USA)<span className="mobileinfo">+1720 448 8203</span>
                </p>
                <p>
                  P:(NZ)<span className="mobileinfo">+64 22 069 7269</span>
                </p>
                <p>
                  Skype:<span className="mobileinfo">DineReserve</span>
                </p>
                <p>
                  E:<span className="mobileinfo">info@dinereserve.com</span>
                </p>
                <p>
                  W:<span className="mobileinfo">www.dinereserve.com</span>
                </p>
              </div>
              <div className="contact-social">
                <h1>Social</h1>
                <div className="social-link">
                  <ul>
                    <li className="circle">
                      <a href={"https://www.facebook.com/DineReserve"}>
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="circle">
                      <a href={"https://twitter.com/dinereserve"}>
                        <i className="fab fa-twitter" />
                      </a>
                    </li>

                    <li className="circle">
                      <a href={"https://www.linkedin.com/company/dinereserve-com?trk=eml-biz-b-page-company_admin_added&midToken=AQHq_JgvUr44CQ&fromEmail=fromEmail&ut=02coKKG9Nf5mI1"}>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  )
}

export default ContactUs
