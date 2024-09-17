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
      </div>
    </div>
  );
}
