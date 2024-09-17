import "./categoryCarRent.scss";

export default function CategoryCarRent() {
  return (
    <div className="categoryCarRent">
      <div className="categoryCarRent__filter-sidebar">
        <div className="categoryCarRent__all-filter-wrapper">
          <div className="categoryCarRent__type-filter-box">
            <div className="categoryCarRent__type-filter-heading-box">
              <p className="categoryCarRent__type-filter-heading">TYPE</p>
            </div>
            <div className="categoryCarRent__check1-box">
              <input
                type="checkbox"
                className="categoryCarRent__type-filter-check1"
              />
              <p className="categoryCarRent__type-filter1">Sport</p>
            </div>
            <div className="categoryCarRent__check2-box">
              <input
                type="checkbox"
                className="categoryCarRent__type-filter-check2"
              />
              <p className="categoryCarRent__type-filter2">SUV</p>
            </div>
            <div className="categoryCarRent__check3-box">
              <input
                type="checkbox"
                className="categoryCarRent__type-filter-check3"
              />
              <p className="categoryCarRent__type-filter3">MPV</p>
            </div>
            <div className="categoryCarRent__check4-box">
              <input
                type="checkbox"
                className="categoryCarRent__type-filter-check4"
              />
              <p className="categoryCarRent__type-filter4">Sedan</p>
            </div>
            <div className="categoryCarRent__check5-box">
              <input
                type="checkbox"
                className="categoryCarRent__type-filter-check5"
              />
              <p className="categoryCarRent__type-filter5">Coupe</p>
            </div>
            <div className="categoryCarRent__check6-box">
              <input
                type="checkbox"
                className="categoryCarRent__type-filter-check6"
              />
              <p className="categoryCarRent__type-filter6">Hatchback</p>
            </div>
          </div>

          <div className="categoryCarRent__seats-filter-box">
            <div className="categoryCarRent__seats-filter-heading-box">
              <p className="categoryCarRent__seats-filter-heading">CAPACITY</p>
            </div>
            <div className="categoryCarRent__seats-check1-box">
              <input
                type="checkbox"
                className="categoryCarRent__seats-filter-check1"
              />
              <p className="categoryCarRent__seats-filter1">2/Person</p>
            </div>
            <div className="categoryCarRent__seats-check2-box">
              <input
                type="checkbox"
                className="categoryCarRent__seats-type-filter-check2"
              />
              <p className="categoryCarRent__seats-filter2">4/Person</p>
            </div>
            <div className="categoryCarRent__seats-check3-box">
              <input
                type="checkbox"
                className="categoryCarRent__seats-filter-check3"
              />
              <p className="categoryCarRent__seats-filter3">4/Person</p>
            </div>
            <div className="categoryCarRent__seats-check4-box">
              <input
                type="checkbox"
                className="categoryCarRent__seats-filter-check4"
              />
              <p className="categoryCarRent__seats-filter4">8/More</p>
            </div>
          </div>
          <div className="categoryCarRent__price-slider-box">
            <p className="categoryCarRent__price-slider-heading">Price</p>
            <input
              className="categoryCarRent__price-slider-input"
              type="range"
              min="0"
              max="500"
              step="1"
            />
          </div>
        </div>
      </div>

      <div className="categoryCarRent__cards-side-wrapper">
        <div className="categoryCarRent__pick-drop-container">
          <div className="categoryCarRent__pickup-container">
            <div className="categoryCarRent__pickup-heading-box">
              <p className="categoryCarRent__pickup-heading">Pick-Up</p>
            </div>
            <div className="categoryCarRent__pickup-selection-container">
              <div className="categoryCarRent__pickup-locations-box">
                <p className="categoryCarRent__pickup-locations-heading">
                  Location
                </p>
                <select
                  className="categoryCarRent__pickup-locations"
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
              <div className="categoryCarRent__pickup-date-box">
                <p className="categoryCarRent__pickup-date-heading">Date</p>
                <input
                  className="categoryCarRent__pickup-date"
                  placeholder="Select"
                  type="date"
                />
              </div>
              <div className="categoryCarRent__pickup-time-box">
                <p className="categoryCarRent__pickup-time-heading">Time</p>
                <input
                  className="categoryCarRent__pickup-time"
                  placeholder="Select"
                  type="time"
                />
              </div>
            </div>
          </div>

          <button className="categoryCarRent__swap-btn">SWAP</button>

          <div className="categoryCarRent__dropoff-container">
            <div className="categoryCarRent__dropoff-heading-box">
              <p className="categoryCarRent__dropoff-heading">Drop-Off</p>
            </div>
            <div className="categoryCarRent__dropoff-selection-container">
              <div className="categoryCarRent__dropoff-locations-box">
                <p className="categoryCarRent__dropoff-locations-heading">
                  Location
                </p>
                <select
                  className="categoryCarRent__dropoff-locations"
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
              <div className="categoryCarRent__pickup-date-box">
                <p className="categoryCarRent__pickup-date-heading">Date</p>
                <input
                  className="categoryCarRent__pickup-date"
                  placeholder="Select"
                  type="date"
                />
              </div>
              <div className="categoryCarRent__pickup-time-box">
                <p className="categoryCarRent__pickup-time-heading">Time</p>
                <input
                  className="categoryCarRent__pickup-time"
                  placeholder="Select"
                  type="time"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="categoryCarRent__recommendation-heading-box">
          <p className="categoryCarRent__recommendation-heading">
            Recommendation Car
          </p>
        </div> */}
        <div className="categoryCarRent__car_cards-wrapper">
          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>

          <div className="categoryCarRent__inventory-car-card1">
            <div className="categoryCarRent__car-navbar">
              <div className="categoryCarRent__car-model-info-box">
                <div className="categoryCarRent__car-model-box">CR-V</div>
                <div className="categoryCarRent__car-type-box">SUV</div>
              </div>
              <div className="categoryCarRent__car-like-btn">❤️</div>
            </div>
            <div className="categoryCarRent__car-image-box">
              <img
                className="categoryCarRent__car-image"
                src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
              />
            </div>
            <div className="categoryCarRent__car-specifications-bar">
              <div className="categoryCarRent__car-tank-capacity-box">
                <svg
                  className="categoryCarRent__tank-fuel-icon"
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
                <p className="categoryCarRent__tank-litres">70L</p>
              </div>
              <div className="categoryCarRent__car-gear-shift-box">
                <svg
                  className="categoryCarRent__car-gear-icon"
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
                <p className="categoryCarRent__gear-type">Manual</p>
              </div>
              <div className="categoryCarRent__car-seats-box">
                <svg
                  className="categoryCarRent__car-seats-icon"
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
                <p className="categoryCarRent__seats-numbers">6/Seats</p>
              </div>
            </div>
            <div className="categoryCarRent__car-rent-and-btn-container">
              <div className="categoryCarRent__car-rent-per-day">
                $90.00/day
              </div>
              <button className="categoryCarRent__car-rent-btn">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
