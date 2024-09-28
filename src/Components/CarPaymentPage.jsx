import "./carPaymentPage.scss";

export default function CarPaymentPage() {
  return (
    <div className="carPayment">
      <div className="carPayment__input-side-wrapper">
        <div className="carPayment__billing-info-box">
          <div className="carPayment__billing-info-heading-box">
            <div className="carPayment__billing-info-heading-1-box">
              <p className="carPayment__billing-info-heading-1">Billing Info</p>
            </div>
            <div className="carPayment__billing-info-heading-2-inner-box">
              <p className="carPayment__billing-info-heading-2">
                Please enter your billing info
              </p>
              <p className="carPayment__billing-info-heading-3">Step 1 of 4</p>
            </div>
          </div>

          <div className="carPayment__billing-inputs-wrapper">
            <div className="carPayment__billing-name-input-box">
              <p className="carPayment__billing-name-input-heading">Name</p>
              <input
                className="carPayment__billing-name-input"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="carPayment__billing-phone-input-box">
              <p className="carPayment__billing-phone-input-heading">
                Phone Number
              </p>
              <input
                className="carPayment__billing-phone-input"
                type="tel"
                placeholder="Phone number"
              />
            </div>
            <div className="carPayment__billing-address-input-box">
              <p className="carPayment__billing-address-input-heading">
                Address
              </p>
              <input
                className="carPayment__billing-address-input"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="carPayment__billing-town-input-box">
              <p className="carPayment__billing-town-input-heading">
                Town/City
              </p>
              <input
                className="carPayment__billing-town-input"
                type="text"
                placeholder="Town or City"
              />
            </div>
          </div>
        </div>
        <div className="carPayment__rental-info-box">
          <div className="carPayment__rental-info-heading-box">
            <div className="carPayment__rental-info-heading-1-box">
              <p className="carPayment__rental-info-heading-1">Rental Info</p>
            </div>
            <div className="carPayment__rental-info-heading-2-inner-box">
              <p className="carPayment__rental-info-heading-2">
                Please enter your rental info
              </p>
              <p className="carPayment__rental-info-heading-3">Step 2 of 4</p>
            </div>
          </div>
          <div className="carPayment__rental-pick-up-and-drop-of-info-inputs-box">
            <div className="carPayment__rental-pick-up-info-inputs-box">
              <div className="carPayment__rental-pick-up-radio-btn-box">
                <input
                  className="carPayment__rental-pick-up-radio-btn"
                  type="radio"
                  name="pickup"
                />
                <p className="carPayment__rental-pick-up-radio-btn-heading">
                  Pick-up
                </p>
              </div>
              <div className="carPayment__rental-pick-up-location-input-box">
                <p className="carPayment__rental-pick-up-location-input-heading">
                  Locations
                </p>
                <select className="carPayment__rental-pick-up-location-input">
                  <option>Batala</option>
                  <option>Qadian</option>
                  <option>Amritsar</option>
                  <option>Ludhiana</option>
                  <option>Gurdaspur</option>
                  <option>jalandhar</option>
                </select>
              </div>

              <div className="carPayment__rental-pick-up-date-input-box">
                <p className="carPayment__rental-pick-up-date-input-heading">
                  Date
                </p>
                <input
                  className="carPayment__rental-pick-up-date-input"
                  type="date"
                  placeholder="Select your date"
                />
              </div>

              <div className="carPayment__rental-pick-up-time-input-box">
                <p className="carPayment__rental-pick-up-time-input-heading">
                  Time
                </p>
                <input
                  className="carPayment__rental-pick-up-time-input"
                  type="time"
                  placeholder=" Select your time"
                />
              </div>
            </div>

            <div className="carPayment__rental-drop-of-info-inputs-box">
              <div className="carPayment__rental-drop-of-radio-btn-box">
                <input
                  className="carPayment__rental-drop-of-radio-btn"
                  type="radio"
                  name="drop-of"
                />
                <p className="carPayment__rental-drop-of-radio-btn-heading">
                  Drop-of
                </p>
              </div>
              <div className="carPayment__rental-drop-of-location-input-box">
                <p className="carPayment__rental-drop-of-location-input-heading">
                  Locations
                </p>
                <select className="carPayment__rental-drop-of-location-input">
                  <option>Batala</option>
                  <option>Qadian</option>
                  <option>Amritsar</option>
                  <option>Ludhiana</option>
                  <option>Gurdaspur</option>
                  <option>jalandhar</option>
                </select>
              </div>

              <div className="carPayment__rental-drop-of-date-input-box">
                <p className="carPayment__rental-drop-of-date-input-heading">
                  Locations
                </p>
                <input
                  className="carPayment__rental-drop-of-date-input"
                  type="date"
                  placeholder="Select your date"
                />
              </div>

              <div className="carPayment__rental-drop-of-address-input-box">
                <p className="carPayment__rental-drop-of-address-input-heading">
                  Locations
                </p>
                <input
                  className="carPayment__rental-drop-of-address-input"
                  type="time"
                  placeholder=" Select your time"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
