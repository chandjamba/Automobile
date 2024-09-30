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
                  Drop-off
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
                  Date
                </p>
                <input
                  className="carPayment__rental-drop-of-date-input"
                  type="date"
                  placeholder="Select your date"
                />
              </div>

              <div className="carPayment__rental-drop-of-time-input-box">
                <p className="carPayment__rental-drop-of-time-input-heading">
                  Time
                </p>
                <input
                  className="carPayment__rental-drop-of-time-input"
                  type="time"
                  placeholder=" Select your time"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carPayment__payment-info-box">
          <div className="carPayment__payment-info-heading-box">
            <div className="carPayment__payment-info-heading-1-box">
              <p className="carPayment__payment-info-heading-1">
                Payment Method
              </p>
            </div>
            <div className="carPayment__payment-info-heading-2-inner-box">
              <p className="carPayment__payment-info-heading-2">
                Please enter your payment method
              </p>
              <p className="carPayment__payment-info-heading-3">Step 3 of 4</p>
            </div>
            <div className="carPayment__payment-pick-up-radio-btn-box">
              <input
                className="carPayment__payment-pick-up-radio-btn"
                type="radio"
                name="pickup"
              />
              <p className="carPayment__payment-pick-up-radio-btn-heading">
                Pick-up
              </p>
            </div>
          </div>

          <div className="carPayment__payment-inputs-wrapper">
            <div className="carPayment__payment-cardNumber-input-box">
              <p className="carPayment__payment-cardNumber-input-heading">
                Card Number
              </p>
              <input
                className="carPayment__payment-cardNumber-input"
                type="text"
                placeholder="Card number"
              />
            </div>
            <div className="carPayment__payment-expiry-input-box">
              <p className="carPayment__payment-expiry-input-heading">
                Expiry Date
              </p>
              <input
                className="carPayment__payment-expiry-input"
                type="tel"
                placeholder="DD / MM / YY"
              />
            </div>
            <div className="carPayment__payment-cardHolder-input-box">
              <p className="carPayment__payment-cardHolder-input-heading">
                Card Holder
              </p>
              <input
                className="carPayment__payment-cardHolder-input"
                type="text"
                placeholder="Card holder"
              />
            </div>
            <div className="carPayment__payment-cvc-input-box">
              <p className="carPayment__payment-cvc-input-heading">CVC</p>
              <input
                className="carPayment__payment-cvc-input"
                type="text"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
