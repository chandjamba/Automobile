import "./createCarFormPage.scss";

export default function CreateCarFormPage() {
  return (
    <div className="create__car">
      <form className="create__car-form">
        <div className="create__car-form-main-heading">
          Vehicle Registration Form
        </div>
        <div className="create__car-appearance-box">
          <p className="create__car-model-input-heading">Model</p>
          <input className="create__car-model-input" type="text" />
          <p className="create__car-make-input-heading">Make</p>

          <input className="create__car-make-input" type="text" />
          <p className="create__car-color-input-heading">Color</p>

          <input className="create__car-color-input" type="text" />
          <p className="create__car-seats-input-heading">Seats</p>

          <input className="create__car-seats-input" type="number" />
        </div>
        <p className="create__car-type-input-headings">Select Type</p>
        <div className="create__car-type-input">
          <input
            className="create__car-type-input-1"
            type="radio"
            name="coupe"
          />
          <label className="create__car-type-input-1-heading">Coupe</label>
          <input
            className="create__car-type-input-2"
            type="radio"
            name="sedan"
          />
          <label className="create__car-type-input-2-heading">Sedan</label>
          <input className="create__car-type-input-3" type="radio" name="SUV" />
          <label className="create__car-type-input-3-heading">SUV</label>
          <input
            className="create__car-type-input-4"
            type="radio"
            name="sport "
          />
          <label className="create__car-type-input-4-heading">Sport</label>
        </div>
        <p className="create__car-engine-type-input-headings">
          {" "}
          Gear Transmission
        </p>
        <div className="create__car-engine-type-input-container">
          <input className="create__car-engine-type-input-1" type="radio" />
          <label className="create__car-engine-type-input-1-heading">
            Automatic
          </label>
          <input className="create__car-engine-type-input-2" type="radio" />
          <label className="create__car-engine-type-input-2-heading">
            Manual
          </label>
        </div>
        <label className="create__car-fuel-tank-capacity-input-heading">
          Fuel Tank Capacity
        </label>
        <input
          className="create__car-fuel-tank-capacity-input"
          type="number"
          placeholder="litres"
        />
        <label className="create__car-rent-price-input-heading">
          Rent Price
        </label>
        <input
          className="create__car-rent-price-input"
          type="number"
          placeholder="$"
        />
        <div className="create__car-form-btns">
          <button className="create__car-form-submit-btn">Submit</button>
          <button className="create__car-form-cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
