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
          </div>
          <div className="carPayment__payment-info-inner-wrapper">
            <div className="carPayment__payment-creditCard-radio-btn-box">
              <div className="carPayment__payment-creditCard-radio-heading-wrapper">
                <input
                  className="carPayment__payment-creditCard-radio-btn"
                  type="radio"
                  name="payOnline"
                />
                <p className="carPayment__payment-creditCard-radio-btn-heading">
                  Credit Card
                </p>
              </div>
              <div className="carPayment__payment-creditCard-logo-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="50"
                  id="visa"
                >
                  <polygon
                    fill="#1565c0"
                    points="17.202 32.269 21.087 32.269 23.584 16.732 19.422 16.732"
                  ></polygon>
                  <path
                    fill="#1565c0"
                    d="M13.873 16.454l-3.607 11.098-.681-3.126c-1.942-4.717-5.272-6.659-5.272-6.659l3.456 14.224h4.162l5.827-15.538H13.873zM44.948 16.454h-4.162l-6.382 15.538h3.884l.832-2.22h4.994l.555 2.22H48L44.948 16.454zM39.954 26.997l2.22-5.826 1.11 5.826H39.954zM28.855 20.893c0-.832.555-1.665 2.497-1.665 1.387 0 2.775 1.11 2.775 1.11l.832-3.329c0 0-1.942-.832-3.607-.832-4.162 0-6.104 2.22-6.104 4.717 0 4.994 5.549 4.162 5.549 6.659 0 .555-.277 1.387-2.497 1.387s-3.884-.832-3.884-.832l-.555 3.329c0 0 1.387.832 4.162.832 2.497.277 6.382-1.942 6.382-5.272C34.405 23.113 28.855 22.836 28.855 20.893z"
                  ></path>
                  <path
                    fill="#ff9800"
                    d="M9.711,25.055l-1.387-6.936c0,0-0.555-1.387-2.22-1.387c-1.665,0-6.104,0-6.104,0
	S8.046,19.229,9.711,25.055z"
                  ></path>
                </svg>
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
                  type="date"
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
          <div className="carPayment__payment-paypal-radio-btn-box">
            <div className="carPayment__payment-paypal-radio-heading-wrapper">
              <input
                className="carPayment__payment-paypal-radio-btn"
                type="radio"
                name="payOnline"
              />
              <p className="carPayment__payment-paypal-radio-btn-heading">
                Paypal
              </p>
            </div>
            <div className="carPayment__payment-paypal-logo-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="64"
                height="64"
                id="paypal"
              >
                <path
                  fill="#139AD6"
                  d="M49.2 28.2h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3H46c.2 0 .3-.1.3-.3l.4-2.5c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 3.9-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.5-.8-2.6-.8m.4 3.3c-.2 1.2-1.1 1.2-2 1.2H47l.4-2.3c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.2.1.2.4.2.9"
                ></path>
                <path
                  fill="#263B80"
                  d="M24.7 28.2h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3h1.6c.2 0 .4-.2.5-.4l.4-2.4c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 3.9-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.4-.8-2.6-.8m.4 3.3c-.2 1.2-1.1 1.2-2 1.2h-.5l.4-2.3c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.1.1.2.4.1.9M35 31.4h-1.6c-.1 0-.3.1-.3.2l-.1.5-.1-.2c-.4-.5-1.1-.7-1.9-.7-1.8 0-3.4 1.4-3.7 3.3-.2 1 .1 1.9.6 2.5.5.6 1.2.8 2.1.8 1.5 0 2.3-.9 2.3-.9l-.1.5c0 .2.1.3.3.3H34c.2 0 .4-.2.5-.4l.9-5.6c-.1-.1-.3-.3-.4-.3m-2.3 3.2c-.2.9-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.3-1.2.1-.9.9-1.6 1.8-1.6.5 0 .8.2 1.1.4.3.3.4.8.4 1.2"
                ></path>
                <path
                  fill="#139AD6"
                  d="M59.4 31.4h-1.6c-.1 0-.3.1-.3.2l-.1.5-.1-.2c-.4-.5-1.1-.7-1.9-.7-1.8 0-3.4 1.4-3.7 3.3-.2 1 .1 1.9.6 2.5.5.6 1.2.8 2.1.8 1.5 0 2.3-.9 2.3-.9l-.1.5c0 .2.1.3.3.3h1.5c.2 0 .4-.2.5-.4l.9-5.6c-.1-.1-.2-.3-.4-.3m-2.3 3.2c-.2.9-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.3-1.2.1-.9.9-1.6 1.8-1.6.5 0 .8.2 1.1.4.4.3.5.8.4 1.2"
                ></path>
                <path
                  fill="#263B80"
                  d="M43.7 31.4H42c-.2 0-.3.1-.4.2L39.4 35l-1-3.2c-.1-.2-.2-.3-.5-.3h-1.6c-.2 0-.3.2-.3.4l1.8 5.3-1.7 2.4c-.1.2 0 .5.2.5h1.6c.2 0 .3-.1.4-.2l5.5-7.9c.3-.3.1-.6-.1-.6"
                ></path>
                <path
                  fill="#139AD6"
                  d="m61.3 28.5-1.4 9c0 .2.1.3.3.3h1.4c.2 0 .4-.2.5-.4l1.4-8.8c0-.2-.1-.3-.3-.3h-1.6c-.1-.1-.2 0-.3.2"
                ></path>
                <path
                  fill="#263B80"
                  d="M12 25.2c-.7-.8-2-1.2-3.8-1.2h-5c-.3 0-.6.3-.7.6l-2 13.1c0 .3.2.5.4.5H4l.8-4.9v.2c.1-.3.4-.6.7-.6H7c2.9 0 5.1-1.2 5.8-4.5v-.3c-.1 0-.1 0 0 0 .1-1.3-.1-2.1-.8-2.9"
                ></path>
                <path
                  fill="#139AD6"
                  d="M12.7 28.1v.3c-.7 3.4-2.9 4.5-5.8 4.5H5.4c-.3 0-.6.3-.7.6l-1 6.1c0 .2.1.4.4.4h2.6c.3 0 .6-.2.6-.5v-.1l.5-3.1v-.2c0-.3.3-.5.6-.5h.4c2.5 0 4.5-1 5-4 .2-1.2.1-2.3-.5-3-.1-.2-.3-.4-.6-.5"
                ></path>
                <path
                  fill="#232C65"
                  d="M12 27.8c-.1 0-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.4-.1-.8-.1-1.3-.1H6.2c-.1 0-.2 0-.3.1-.2.1-.3.3-.3.5l-.8 5.2v.2c.1-.3.4-.6.7-.6H7c2.9 0 5.1-1.2 5.8-4.5 0-.1 0-.2.1-.3-.2-.1-.3-.2-.5-.2-.3-.1-.3-.1-.4-.1"
                ></path>
              </svg>
            </div>
          </div>
          <div className="carPayment__payment-bitcoin-radio-btn-box">
            <div className="carPayment__payment-bitcoin-radio-heading-wrapper">
              <input
                className="carPayment__payment-bitcoin-radio-btn"
                type="radio"
                name="payOnline"
              />
              <p className="carPayment__payment-bitcoin-radio-btn-heading">
                Bitcoin
              </p>
            </div>
            <div className="carPayment__payment-bitcoin-logo-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 1.663 239.76 36.105"
                id="bitcoin"
              >
                <path
                  fill="#f7931a"
                  d="M28.765 18.639c-1.95 7.322-9.874 11.778-17.697 9.952C3.247 26.766-1.514 19.347.438 12.026 2.388 4.702 10.31.246 18.13 2.072c7.824 1.825 12.583 9.243 10.634 16.567z"
                ></path>
                <path
                  fill="#fff"
                  d="M21.037 13.384c.29-1.819-1.19-2.797-3.212-3.45l.656-2.462-1.602-.375-.639 2.4c-.42-.099-.854-.192-1.283-.284L15.6 6.8l-1.602-.374-.656 2.463c-.349-.075-.691-.148-1.024-.225l.002-.008-2.21-.516-.425 1.601s1.188.256 1.163.271c.649.152.766.554.747.873l-.747 2.807c.044.01.102.026.166.05l-.17-.04-1.047 3.932c-.08.185-.28.462-.734.357.016.022-1.164-.273-1.164-.273l-.796 1.717 2.085.486c.387.092.768.188 1.142.277l-.663 2.492 1.6.374.657-2.466c.437.111.862.214 1.276.31l-.654 2.455 1.603.373.663-2.487c2.731.484 4.786.288 5.65-2.025.698-1.862-.034-2.936-1.472-3.637 1.047-.227 1.835-.87 2.046-2.202zm-3.661 4.805c-.495 1.862-3.845.856-4.93.603l.88-3.302c1.085.254 4.567.756 4.05 2.7zm.496-4.832c-.452 1.694-3.24.833-4.145.623l.798-2.995c.905.211 3.817.606 3.347 2.372z"
                ></path>
                <g fill="#4d4d4d">
                  <path d="M42.79 9.934c1.184 0 2.207.2 3.067.59a6.117 6.117 0 0 1 2.148 1.591 6.53 6.53 0 0 1 1.255 2.353c.27.9.404 1.868.404 2.906 0 1.592-.312 3.097-.94 4.515a11.667 11.667 0 0 1-2.57 3.702c-1.085 1.05-2.366 1.877-3.844 2.488-1.475.613-3.079.918-4.801.918-.223 0-.615-.006-1.167-.016a18.57 18.57 0 0 1-1.9-.154 23.554 23.554 0 0 1-2.275-.418 11.907 11.907 0 0 1-2.274-.76l6.394-25.15 5.727-.83-2.29 8.924a9.29 9.29 0 0 1 1.477-.483 6.966 6.966 0 0 1 1.589-.176zm-4.804 14.81c.863 0 1.675-.199 2.439-.589a6.321 6.321 0 0 0 1.98-1.573 7.828 7.828 0 0 0 1.31-2.232c.32-.83.482-1.696.482-2.598 0-1.105-.198-1.968-.592-2.593-.393-.621-1.122-.934-2.18-.934-.347 0-.794.062-1.348.173a3.451 3.451 0 0 0-1.5.728l-2.437 9.477c.146.024.277.048.388.07a4.394 4.394 0 0 0 .794.072h.664zM55.604 28.513h-5.47l4.62-18.195h5.507l-4.657 18.195zm2.662-20.412a3.55 3.55 0 0 1-2.07-.638c-.62-.424-.926-1.076-.926-1.955 0-.484.106-.938.314-1.366.21-.427.487-.794.833-1.107.345-.31.746-.558 1.2-.745a3.879 3.879 0 0 1 1.462-.276c.763 0 1.451.213 2.069.64.613.428.922 1.08.922 1.954 0 .486-.104.941-.314 1.368a3.61 3.61 0 0 1-.83 1.108c-.343.31-.747.557-1.2.743a3.83 3.83 0 0 1-1.46.274zM65.054 5.786l5.73-.832-1.408 5.364h6.135l-1.107 4.22h-6.099l-1.625 6.364a6.757 6.757 0 0 0-.257 1.487c-.028.463.035.86.183 1.193.146.336.41.594.794.778.382.185.928.279 1.645.279.59 0 1.164-.053 1.72-.156a13.001 13.001 0 0 0 1.68-.433l.407 3.945c-.739.253-1.54.472-2.402.656-.863.186-1.886.275-3.068.275-1.7 0-3.017-.235-3.955-.705-.937-.475-1.6-1.121-1.996-1.941-.392-.816-.566-1.757-.517-2.817.05-1.062.222-2.18.517-3.357l3.623-14.32zM75.27 21.25c0-1.569.271-3.045.813-4.43a10.79 10.79 0 0 1 2.33-3.634c1.008-1.034 2.234-1.853 3.679-2.455 1.437-.598 3.046-.9 4.82-.9 1.11 0 2.102.098 2.974.295.876.198 1.67.456 2.386.778l-1.887 4.015a18.221 18.221 0 0 0-1.533-.502c-.53-.153-1.176-.226-1.94-.226-1.825 0-3.269.59-4.343 1.764-1.07 1.176-1.609 2.756-1.609 4.74 0 1.176.271 2.127.815 2.856.541.726 1.541 1.087 2.993 1.087.717 0 1.408-.069 2.07-.205a10.828 10.828 0 0 0 1.775-.519l.409 4.115c-.692.252-1.455.478-2.292.678-.838.191-1.837.29-2.994.29-1.529 0-2.822-.208-3.88-.62-1.059-.42-1.933-.975-2.623-1.679a6.24 6.24 0 0 1-1.497-2.476 9.527 9.527 0 0 1-.466-2.972zM99.568 28.997c-1.306 0-2.44-.187-3.401-.556-.96-.367-1.754-.884-2.382-1.555a6.622 6.622 0 0 1-1.423-2.37c-.322-.91-.477-1.919-.477-3.024 0-1.386.237-2.772.717-4.154a11.536 11.536 0 0 1 2.127-3.735c.932-1.107 2.082-2.013 3.434-2.719 1.353-.701 2.908-1.054 4.655-1.054 1.282 0 2.41.186 3.385.556.97.367 1.77.889 2.402 1.556a6.65 6.65 0 0 1 1.42 2.37c.321.91.48 1.92.48 3.025 0 1.383-.235 2.768-.7 4.155a11.727 11.727 0 0 1-2.07 3.734c-.911 1.106-2.05 2.012-3.418 2.715-1.365.704-2.95 1.056-4.749 1.056zm2.734-14.806c-.811 0-1.528.22-2.141.656a5.774 5.774 0 0 0-1.55 1.662 7.9 7.9 0 0 0-.946 2.196 8.883 8.883 0 0 0-.312 2.266c0 1.154.199 2.053.59 2.7.396.643 1.108.967 2.144.967.813 0 1.527-.218 2.144-.658a5.818 5.818 0 0 0 1.55-1.66c.42-.667.734-1.4.946-2.197a9.007 9.007 0 0 0 .312-2.266c0-1.15-.197-2.053-.593-2.699-.394-.643-1.11-.967-2.144-.967zM116.468 28.513h-5.475l4.62-18.195h5.51l-4.655 18.195zm2.657-20.412a3.544 3.544 0 0 1-2.068-.638c-.616-.424-.926-1.076-.926-1.955 0-.484.107-.938.315-1.366a3.61 3.61 0 0 1 .833-1.107 4.09 4.09 0 0 1 1.2-.745c.455-.183.941-.276 1.458-.276.765 0 1.456.213 2.07.64.617.428.927 1.08.927 1.954 0 .486-.11.941-.317 1.368a3.6 3.6 0 0 1-.83 1.108c-.346.31-.744.557-1.2.743a3.837 3.837 0 0 1-1.462.274zM125.063 11.147c.414-.113.879-.25 1.382-.399a21.735 21.735 0 0 1 3.808-.725c.775-.083 1.66-.123 2.64-.123 2.885 0 4.874.786 5.972 2.355 1.096 1.568 1.287 3.714.575 6.434l-2.516 9.824h-5.506l2.438-9.617c.149-.601.265-1.181.351-1.75.088-.561.083-1.056-.02-1.486a1.758 1.758 0 0 0-.681-1.038c-.36-.265-.906-.398-1.645-.398-.713 0-1.44.072-2.18.21l-3.585 14.079h-5.508l4.475-17.366z"></path>
                </g>
                <g fill="#ff9300">
                  <path d="M150.073 18.936h8.726l-1.756 7.622c-1.028.606-2.29 1.119-3.784 1.539s-3.018.63-4.568.63c-2.412 0-4.261-.496-5.547-1.49-1.756-1.357-2.633-3.324-2.633-5.901 0-1.73.377-3.386 1.13-4.97.905-1.906 2.19-3.384 3.857-4.435s3.626-1.576 5.879-1.576c2.252 0 4.059.477 5.42 1.43s2.263 2.343 2.706 4.169l-3.736.388c-.328-1.002-.858-1.757-1.59-2.267-.731-.51-1.651-.763-2.76-.763-1.295 0-2.482.307-3.564.92-1.082.615-1.93 1.565-2.541 2.849-.611 1.284-.918 2.687-.918 4.205 0 1.495.373 2.6 1.117 3.314.746.715 1.836 1.072 3.272 1.072.86 0 1.743-.11 2.647-.333.904-.222 1.684-.486 2.34-.794l.6-2.642h-4.975l.678-2.967zM160.94 23.08c0-2.384.738-4.284 2.215-5.702s3.416-2.127 5.818-2.127c2.084 0 3.71.523 4.88 1.569 1.172 1.047 1.757 2.454 1.757 4.224 0 2.084-.73 3.886-2.194 5.405-1.463 1.519-3.423 2.277-5.878 2.277-1.33 0-2.51-.242-3.54-.727-1.027-.484-1.794-1.172-2.3-2.061s-.758-1.84-.758-2.858zm10.88-2.484c0-.824-.265-1.484-.792-1.981s-1.208-.745-2.041-.745c-.824 0-1.557.232-2.195.696-.638.465-1.135 1.14-1.49 2.024-.353.884-.531 1.698-.531 2.44 0 .922.275 1.653.825 2.194.55.542 1.24.812 2.075.812 1.045 0 1.924-.408 2.633-1.225 1.01-1.153 1.516-2.56 1.516-4.215zM191.172 22.026l4.043.558c-.79 1.995-1.973 3.52-3.552 4.574-1.578 1.055-3.427 1.582-5.546 1.582-2.386 0-4.25-.654-5.594-1.963-1.343-1.31-2.015-3.208-2.015-5.696 0-2.02.45-3.867 1.35-5.544.9-1.677 2.148-2.96 3.745-3.848 1.596-.89 3.334-1.333 5.213-1.333 2.11 0 3.818.515 5.12 1.545 1.305 1.03 2.07 2.434 2.302 4.21l-3.844.34c-.213-1.033-.623-1.783-1.23-2.248-.607-.464-1.416-.697-2.427-.697a5.67 5.67 0 0 0-3.106.92c-.961.615-1.73 1.575-2.307 2.88s-.865 2.607-.865 3.908c0 1.422.375 2.52 1.124 3.296s1.683 1.163 2.8 1.163a4.827 4.827 0 0 0 2.854-.921c.864-.613 1.51-1.522 1.935-2.726zM202.079 19.203l-3.725-.291c.426-1.147 1.168-2.044 2.228-2.69s2.463-.97 4.21-.97c1.817 0 3.16.333 4.029 1s1.305 1.48 1.305 2.44c0 .39-.04.802-.113 1.237-.076.437-.34 1.584-.792 3.442-.372 1.534-.56 2.609-.56 3.223 0 .55.107 1.16.32 1.83h-3.711a6.154 6.154 0 0 1-.28-1.454c-.558.565-1.2 1-1.928 1.303s-1.458.454-2.194.454c-1.17 0-2.137-.35-2.9-1.048-.762-.698-1.143-1.598-1.143-2.696 0-1.228.418-2.21 1.256-2.945.838-.734 2.335-1.18 4.49-1.333 1.816-.137 3.03-.303 3.644-.496.159-.485.239-.873.239-1.164 0-.371-.164-.683-.492-.933-.328-.251-.815-.376-1.463-.376-.683 0-1.222.127-1.615.382a1.886 1.886 0 0 0-.805 1.085zm3.63 3.223c-.23.057-.537.108-.918.157-1.916.21-3.166.517-3.751.92-.417.292-.625.684-.625 1.177 0 .404.159.745.479 1.023.319.279.74.418 1.264.418.576 0 1.119-.127 1.63-.381.51-.255.89-.582 1.144-.982.253-.4.476-1.023.67-1.872l.107-.46zM214.58 15.554h3.565l-.572 2.497c1.33-1.866 2.77-2.8 4.323-2.8.55 0 1.14.126 1.769.376l-1.463 2.848a3.534 3.534 0 0 0-1.104-.17c-.656 0-1.324.227-2.002.679a4.665 4.665 0 0 0-1.59 1.812c-.381.755-.758 1.953-1.131 3.593l-.93 4.035h-3.818l2.954-12.87zM235.489 28.424h-3.617l.318-1.394c-.691.606-1.371 1.04-2.041 1.303s-1.426.394-2.268.394c-1.463 0-2.65-.454-3.56-1.363-.907-.908-1.362-2.252-1.362-4.03 0-2.06.639-3.921 1.916-5.585 1.276-1.665 2.966-2.497 5.067-2.497 1.897 0 3.32.687 4.27 2.06l1.529-6.652h3.817l-4.07 17.764zm-8.82-5.235c0 .92.257 1.64.767 2.157.51.518 1.137.775 1.88.775.693 0 1.339-.216 1.937-.647.6-.433 1.078-1.093 1.438-1.981.358-.89.538-1.741.538-2.558 0-.93-.274-1.68-.825-2.254-.55-.573-1.184-.86-1.901-.86-1.117 0-2.035.565-2.753 1.696a6.712 6.712 0 0 0-1.08 3.672z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="carPayment__confirmation-info-box">
          <div className="carPayment__confirmation-info-heading-box">
            <div className="carPayment__confirmation-info-heading-1-box">
              <p className="carPayment__confirmation-info-heading-1">
                Confirmation
              </p>
            </div>
            <div className="carPayment__confirmation-info-heading-2-inner-box">
              <p className="carPayment__confirmation-info-heading-2">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
              <p className="carPayment__confirmation-info-heading-3">
                Step 4 of 4
              </p>
            </div>
          </div>

          <div className="carPayment__confirmation-checkbox1-heading-wrapper">
            <input
              className="carPayment__confirmation-checkbox1-btn"
              type="checkbox"
              name="check"
            />
            <p className="carPayment__confirmation-checkbox1-para">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </p>
          </div>
          <div className="carPayment__confirmation-checkbox2-heading-wrapper">
            <input
              className="carPayment__confirmation-checkbox2-input-btn"
              type="checkbox"
              name="check"
            />
            <p className="carPayment__confirmation-checkbox2-para">
              I agree with our terms and conditions and privacy policy.
            </p>
          </div>
          <div className="carPayment__confirmation-rentNow-submit-btn-box">
            <button className="carPayment__confirmation-rentNow-submit-btn">
              Rent Now
            </button>
          </div>
        </div>
      </div>
      <div className="carPayment__confirmation-car-summary-side-wrapper">
        <div className="carPayment__confirmation-car-summary-inner-box">
          <div className="carPayment__confirmation-car-inner-box-heading">
            <div className="carPayment__confirmation-car-inner-box-heading-1">
              <h1 className="carPayment__confirmation-car-inner-heading-1">
                {" "}
                Rental Summary
              </h1>
            </div>
            <div className="carPayment__confirmation-car-inner-box-heading-2">
              <h1 className="carPayment__confirmation-car-inner-heading-2">
                {" "}
                Prices may change depending on the length of the rental and the
                price of your rental car.
              </h1>
            </div>
          </div>
          <div className="carPayment__confirmation-car-summary-inner-picture-name-box">
            <div className="carPayment__confirmation-car-summary-picture-box">
              <img
                className="carPayment__confirmation-car-summary-picture"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684624/6l6l"
              />
            </div>
            <div className="carPayment__confirmation-car-summary-name-reviews-box">
              <div className="carPayment__confirmation-car-summary-name-box">
                <h1 className="carPayment__confirmation-car-name">
                  Nissan GT-R
                </h1>
              </div>
              <div className="carPayment__confirmation-car-summary-reviews-box">
                <div className="carPayment__confirmation-car-summary-reviews">
                  {" "}
                  440+ reviewers
                </div>
              </div>
            </div>
          </div>
          <div className="carPayment__confirmation-car-final-price-info-box">
            <div className="carPayment__confirmation-car-subtotal-box">
              <p className="carPayment__confirmation-car-subtotal-heading">
                Subtotal
              </p>
              <div className="carPayment__confirmation-car-subtotal-price">
                $80.00
              </div>
            </div>
            <div className="carPayment__confirmation-car-tax-box">
              <p className="carPayment__confirmation-car-tax-heading">Tax</p>
              <div className="carPayment__confirmation-car-tax">$0.00</div>
            </div>
            <div className="carPayment__confirmation-car-promo-input-box">
              <input
                className="carPayment__confirmation-car-promo-input"
                type="text"
                placeholder="Apply promo here"
              />
              <button className="carPayment__confirmation-car-promo-input-btn">
                Apply Now
              </button>
            </div>
            <div className="carPayment__confirmation-car-price-bottom-box">
              <p className="carPayment__confirmation-car-bottom-total-price-heading">
                Total Rental Price
              </p>
              <div className="carPayment__confirmation-car-total-price">
                $80.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
