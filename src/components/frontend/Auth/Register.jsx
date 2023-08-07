import CustomInput from "../inputComponent/CustomInput";
import Button from "../inputComponent/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, React } from "react";

function Register() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <div className="rbt-elements-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row gy-5 row--30">
            <div className="col-lg-3" />
            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <h3 className="title">Register</h3>
                <form className="max-width-auto" method="POST" action="">
                  <div className="form-group">
                    <CustomInput type="text" Label="Full Name" Required='required' />
                  </div>
                  <div className="form-group">
                    <CustomInput
                      type="email"
                      Label="Email address *"
                      Required='required'
                    />
                  </div>
                  <div className="form-group">
                    <CustomInput
                      type="number"
                      Label="Phone *"
                      Required='required'
                    />
                  </div>
                  <div className="form-group">
                    <CustomInput type="password" Label="Password" Required='required' />
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <CustomInput
                      type="password"
                      Label="Confirm Password "
                      Required='required'
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(data) => setSelectedDate(data)}
                      dataFormat="dd/MM/yyyy"
                      filterDate={(date) =>
                        date.getDay() != 6 && date.getDay() != 0
                      }
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </div>
                  <div className="form-submit-group">
                    <Button name="Register" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
