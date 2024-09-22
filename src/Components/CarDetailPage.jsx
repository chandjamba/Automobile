import "./carDetailPage.scss";

export default function CarDetailPage() {
  return (
    <div className="carDetail">
      <div className="carDetail__main-container">
        <div className="carDetail__filter-sidebar">
          <div className="carDetail__all-filter-wrapper">
            <div className="carDetail__type-filter-box">
              <div className="carDetail__type-filter-heading-box">
                <p className="carDetail__type-filter-heading">TYPE</p>
              </div>
              <div className="carDetail__check1-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check1"
                />
                <p className="carDetail__type-filter1">Sport</p>
              </div>
              <div className="carDetail__check2-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check2"
                />
                <p className="carDetail__type-filter2">SUV</p>
              </div>
              <div className="carDetail__check3-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check3"
                />
                <p className="carDetail__type-filter3">MPV</p>
              </div>
              <div className="carDetail__check4-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check4"
                />
                <p className="carDetail__type-filter4">Sedan</p>
              </div>
              <div className="carDetail__check5-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check5"
                />
                <p className="carDetail__type-filter5">Coupe</p>
              </div>
              <div className="carDetail__check6-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check6"
                />
                <p className="carDetail__type-filter6">Hatchback</p>
              </div>
            </div>

            <div className="carDetail__seats-filter-box">
              <div className="carDetail__seats-filter-heading-box">
                <p className="carDetail__seats-filter-heading">CAPACITY</p>
              </div>
              <div className="carDetail__seats-check1-box">
                <input
                  type="checkbox"
                  className="carDetail__seats-filter-check1"
                />
                <p className="carDetail__seats-filter1">2/Person</p>
              </div>
              <div className="carDetail__seats-check2-box">
                <input
                  type="checkbox"
                  className="carDetail__seats-type-filter-check2"
                />
                <p className="carDetail__seats-filter2">4/Person</p>
              </div>
              <div className="carDetail__seats-check3-box">
                <input
                  type="checkbox"
                  className="carDetail__seats-filter-check3"
                />
                <p className="carDetail__seats-filter3">4/Person</p>
              </div>
              <div className="carDetail__seats-check4-box">
                <input
                  type="checkbox"
                  className="carDetail__seats-filter-check4"
                />
                <p className="carDetail__seats-filter4">8/More</p>
              </div>
            </div>

            <div className="carDetail__price-slider-box">
              <p className="carDetail__price-slider-heading">Price</p>
              <input
                className="carDetail__price-slider-input"
                type="range"
                min="0"
                max="500"
                step="1"
              />
            </div>
          </div>
        </div>

        <div className="carDetail__car-description-wrapper">
          <div className="carDetail__car-content-box">
            <div className="carDetail__car-content-inner-box">
              <div className="carDetail__car-image-box">
                <img
                  className="carDetail__image"
                  src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684624/6l6l"
                />
              </div>
              <div className="carDetail__car-images-container">
                <div className="carDetail__car-image-1">Image 1</div>
                <div className="carDetail__car-image-2">Image 2</div>
                <div className="carDetail__car-image-3">Image 3</div>
              </div>
            </div>
            <div className="carDetail__car-description-box">
              <p>This is description box</p>
            </div>
          </div>
          <div className="carDetail__car-reviews-wrapper">
            <div className="carDetail__car-reviews">
              <h1> Customer Reviews Box</h1>
            </div>
          </div>
          <div className="carDetail__recommended-cars-heading-container">
            <h1 className="carDetail__recommended-cars-heading">
              Recommended Cars
            </h1>
            <button className="carDetail__show-more-btn">Show All</button>
          </div>
          <div className="carDetail__recommend-cars-cards-wrapper">
            <div className="carDetail__car-card1">
              <div className="carDetail__car-navbar">
                <div className="carDetail__car-model-info-box">
                  <div className="carDetail__car-model-box">CR-V</div>
                  <div className="carDetail__car-type-box">SUV</div>
                </div>
                <div className="carDetail__car-like-btn">❤️</div>
              </div>
              <div className="carDetail__car-card-image-box">
                <img
                  className="carDetail__car-card-image"
                  src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
                />
              </div>
              <div className="carDetail__car-specifications-bar">
                <div className="carDetail__car-tank-capacity-box">
                  <svg
                    className="carDetail__tank-fuel-icon"
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
                  <p className="carDetail__tank-litres">70L</p>
                </div>
                <div className="carDetail__car-gear-shift-box">
                  <svg
                    className="carDetail__car-gear-icon"
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
                  <p className="carDetail__gear-type">Manual</p>
                </div>
                <div className="carDetail__car-seats-box">
                  <svg
                    className="carDetail__car-seats-icon"
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
                  <p className="carDetail__seats-numbers">6/Seats</p>
                </div>
              </div>
              <div className="carDetail__car-rent-and-btn-container">
                <div className="carDetail__car-rent-per-day">$90.00/day</div>
                <button className="carDetail__car-rent-btn">Rent Now</button>
              </div>
            </div>
            <div className="carDetail__car-card1">
              <div className="carDetail__car-navbar">
                <div className="carDetail__car-model-info-box">
                  <div className="carDetail__car-model-box">CR-V</div>
                  <div className="carDetail__car-type-box">SUV</div>
                </div>
                <div className="carDetail__car-like-btn">❤️</div>
              </div>
              <div className="carDetail__car-card-image-box">
                <img
                  className="carDetail__car-card-image"
                  src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
                />
              </div>
              <div className="carDetail__car-specifications-bar">
                <div className="carDetail__car-tank-capacity-box">
                  <svg
                    className="carDetail__tank-fuel-icon"
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
                  <p className="carDetail__tank-litres">70L</p>
                </div>
                <div className="carDetail__car-gear-shift-box">
                  <svg
                    className="carDetail__car-gear-icon"
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
                  <p className="carDetail__gear-type">Manual</p>
                </div>
                <div className="carDetail__car-seats-box">
                  <svg
                    className="carDetail__car-seats-icon"
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
                  <p className="carDetail__seats-numbers">6/Seats</p>
                </div>
              </div>
              <div className="carDetail__car-rent-and-btn-container">
                <div className="carDetail__car-rent-per-day">$90.00/day</div>
                <button className="carDetail__car-rent-btn">Rent Now</button>
              </div>
            </div>
            <div className="carDetail__car-card1">
              <div className="carDetail__car-navbar">
                <div className="carDetail__car-model-info-box">
                  <div className="carDetail__car-model-box">CR-V</div>
                  <div className="carDetail__car-type-box">SUV</div>
                </div>
                <div className="carDetail__car-like-btn">❤️</div>
              </div>
              <div className="carDetail__car-card-image-box">
                <img
                  className="carDetail__car-card-image"
                  src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
                />
              </div>
              <div className="carDetail__car-specifications-bar">
                <div className="carDetail__car-tank-capacity-box">
                  <svg
                    className="carDetail__tank-fuel-icon"
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
                  <p className="carDetail__tank-litres">70L</p>
                </div>
                <div className="carDetail__car-gear-shift-box">
                  <svg
                    className="carDetail__car-gear-icon"
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
                  <p className="carDetail__gear-type">Manual</p>
                </div>
                <div className="carDetail__car-seats-box">
                  <svg
                    className="carDetail__car-seats-icon"
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
                  <p className="carDetail__seats-numbers">6/Seats</p>
                </div>
              </div>
              <div className="carDetail__car-rent-and-btn-container">
                <div className="carDetail__car-rent-per-day">$90.00/day</div>
                <button className="carDetail__car-rent-btn">Rent Now</button>
              </div>
            </div>
            <div className="carDetail__car-card1">
              <div className="carDetail__car-navbar">
                <div className="carDetail__car-model-info-box">
                  <div className="carDetail__car-model-box">CR-V</div>
                  <div className="carDetail__car-type-box">SUV</div>
                </div>
                <div className="carDetail__car-like-btn">❤️</div>
              </div>
              <div className="carDetail__car-card-image-box">
                <img
                  className="carDetail__car-card-image"
                  src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
                />
              </div>
              <div className="carDetail__car-specifications-bar">
                <div className="carDetail__car-tank-capacity-box">
                  <svg
                    className="carDetail__tank-fuel-icon"
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
                  <p className="carDetail__tank-litres">70L</p>
                </div>
                <div className="carDetail__car-gear-shift-box">
                  <svg
                    className="carDetail__car-gear-icon"
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
                  <p className="carDetail__gear-type">Manual</p>
                </div>
                <div className="carDetail__car-seats-box">
                  <svg
                    className="carDetail__car-seats-icon"
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
                  <p className="carDetail__seats-numbers">6/Seats</p>
                </div>
              </div>
              <div className="carDetail__car-rent-and-btn-container">
                <div className="carDetail__car-rent-per-day">$90.00/day</div>
                <button className="carDetail__car-rent-btn">Rent Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
