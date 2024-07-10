import "./homepage.scss";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__rental-car-cards-container">
        <div className="homepage__rental-car-card1">CARD-1</div>
        <div className="homepage__rental-car-card2">CARD-2</div>
      </div>

      <div className="homepage__pick-drop-container">
        <div className="homepage__pickup-container">
          <div className="homepage__pickup-heading-box">
            <p className="homepage__pickup-heading">Pick-Up</p>
          </div>
          <div className="homepage__pickup-selection-container">
            <div className="homepage__pickup-locations-box">
              <p className="homepage__pickup-locations-heading">Location</p>
              <select
                className="homepage__pickup-locations"
                placeholder="Select"
              >
                <option>Batala</option>
                <option>Qadian</option>
                <option>Amritsar</option>
                <option>Gurdaspur</option>
                <option>Ludhiana</option>
                <option>Jalandhar</option>
              </select>
            </div>
            <div className="homepage__pickup-date-box">
              <p className="homepage__pickup-date-heading">Date</p>
              <input
                className="homepage__pickup-date"
                placeholder="Select"
                type="date"
              />
            </div>
            <div className="homepage__pickup-time-box">
              <p className="homepage__pickup-time-heading">Time</p>
              <input
                className="homepage__pickup-time"
                placeholder="Select"
                type="time"
              />
            </div>
          </div>
        </div>

        <button className="homepage__swap-btn">SWAP</button>

        <div className="homepage__dropoff-container">
          <div className="homepage__dropoff-heading-box">
            <p className="homepage__dropoff-heading">Drop-Off</p>
          </div>
          <div className="homepage__dropoff-selection-container">
            <div className="homepage__dropoff-locations-box">
              <p className="homepage__dropoff-locations-heading">Location</p>
              <select
                className="homepage__dropoff-locations"
                placeholder="Select"
              >
                <option>Batala</option>
                <option>Qadian</option>
                <option>Amritsar</option>
                <option>Gurdaspur</option>
                <option>Ludhiana</option>
                <option>Jalandhar</option>
              </select>
            </div>
            <div className="homepage__pickup-date-box">
              <p className="homepage__pickup-date-heading">Date</p>
              <input
                className="homepage__pickup-date"
                placeholder="Select"
                type="date"
              />
            </div>
            <div className="homepage__pickup-time-box">
              <p className="homepage__pickup-time-heading">Time</p>
              <input
                className="homepage__pickup-time"
                placeholder="Select"
                type="time"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__recommendation-heading-box">
        <p className="homepage__recommendation-heading">Recommendation Car</p>
      </div>
      <div className="homepage__inventory-car-card1">
        <div className="homepage__car-navbar">
          <div className="homepage__car-model-info-box">
            <div className="homepage__car-model-box">CR-V</div>
            <div className="homepage__car-type-box">SUV</div>
          </div>
          <div className="homepage__car-like-btn">❤️</div>
        </div>
        <div className="homepage__car-image-box">
          <img
            className="homepage__car-image"
            src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
          />
        </div>
        <div className="homepage__car-specifications-bar">
          <div className="homepage__car-tank-capacity-box">
            <svg
              className="homepage__tank-fuel-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <line x1="3" x2="15" y1="22" y2="22" />
              <line x1="4" x2="14" y1="9" y2="9" />
              <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
              <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
            </svg>
            <p className="homepage__tank-litres">70L</p>
          </div>
          <div className="homepage__car-gear-shift-box">
            <svg
              className="homepage__car-gear-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="M12 2v2" />
              <path d="M12 22v-2" />
              <path d="m17 20.66-1-1.73" />
              <path d="M11 10.27 7 3.34" />
              <path d="m20.66 17-1.73-1" />
              <path d="m3.34 7 1.73 1" />
              <path d="M14 12h8" />
              <path d="M2 12h2" />
              <path d="m20.66 7-1.73 1" />
              <path d="m3.34 17 1.73-1" />
              <path d="m17 3.34-1 1.73" />
              <path d="m11 13.73-4 6.93" />
            </svg>
            <p className="homepage__gear-type">Manual</p>
          </div>
          <div className="homepage__car-seats-box">
            <svg
              className="homepage__car-seats-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <p className="homepage__seats-numbers">6/Seats</p>
          </div>
        </div>
        <div className="homepage__car-rent-and-btn-container">
          <div className="homepage__car-rent-per-day">$90.00/day</div>
          <button className="homepage__car-rent-btn">Rent Now</button>
        </div>
      </div>
    </div>
  );
}
