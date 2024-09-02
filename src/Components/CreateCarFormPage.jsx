import { useEffect, useState } from "react";
import "./createCarFormPage.scss";
import { databases } from "../lib/appwrite";

export default function CreateCarFormPage() {
  const [carModels, setCarModels] = useState();
  const [selectedCarModel, setSelectedCarModel] = useState();
  const [carMakes, setCarMakes] = useState();
  const [selectedCarMake, setSelectedCarMake] = useState();
  const [selectedCarColor, setSelectedCarColor] = useState();
  const [carTypes, setCarTypes] = useState();
  const [selectedCarType, setSelectedCarType] = useState();
  const [selectedCarEngineType, setSelectedCarEngineType] = useState();

  useEffect(() => {
    function getModels() {
      try {
        databases
          .listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_CAR_MODELS_COLLECTION_ID,
            []
          )
          .then((resp) => {
            setCarModels(resp.documents);
            console.log(resp.documents);
          });
      } catch (error) {
        console.log(error);
      }
    }
    getModels();
  }, []);

  useEffect(() => {
    function getTypes() {
      try {
        databases
          .listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_CAR_TYPES_COLLECTION_ID,
            []
          )
          .then((resp) => {
            setCarTypes(resp.documents);
            console.log(resp.documents);
          });
      } catch (error) {
        console.log(error);
      }
    }
    getTypes();
  }, []);

  useEffect(() => {
    function getMakes() {
      try {
        databases
          .listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_CAR_MAKE_COLLECTION_ID,
            []
          )
          .then((resp) => {
            setCarMakes(resp.documents);
            console.log(resp.documents);
          });
      } catch (error) {
        console.log(error);
      }
    }
    getMakes();
  }, []);

  return (
    <div className="create__car">
      <form className="create__car-form">
        <div className="create__car-form-main-heading">
          Vehicle Registration Form
        </div>
        <div className="create__car-appearance-box">
          <p className="create__car-model-input-heading">Model</p>
          <select
            className="create__car-model-input"
            name="carModel"
            value={selectedCarModel?.carModel}
            onChange={(event) => {
              console.log(event.target.value);
              setSelectedCarModel(event.target.value);
            }}
          >
            {carModels?.map((carModel) => {
              return <option key={carModel?.$id}>{carModel?.modelName}</option>;
            })}
          </select>
          <p className="create__car-make-input-heading">Make</p>

          <select
            className="create__car-make-input"
            name="carMake"
            value={selectedCarMake?.carMake}
            onChange={(event) => {
              console.log(event.target.value);
              setSelectedCarMake(event.target.value);
            }}
          >
            {carMakes?.map((carMake) => {
              return (
                <option key={carMake.$id}>{carMake?.makeCompanyName}</option>
              );
            })}
          </select>
          <p className="create__car-color-input-heading">Color</p>

          <input
            className="create__car-color-input"
            type="text"
            placeholder="Enter here..."
            name="carColor"
            value={selectedCarColor?.colorName}
            onChange={(event) => {
              console.log(event.target.value);
              setSelectedCarColor(event.target.value);
            }}
          />
          <p className="create__car-seats-input-heading">Seats</p>

          <input className="create__car-seats-input" type="number" />
        </div>
        <p className="create__car-type-input-headings">Select Type</p>
        <select
          className="create__car-type-input"
          name="carType"
          value={selectedCarType?.carType}
          onChange={(event) => {
            console.log(event.target.value);
            setSelectedCarType(event.target.value);
          }}
        >
          {carTypes?.map((carType) => {
            return <option key={carType.$id}>{carType?.typeName}</option>;
          })}
        </select>
        <p className="create__car-engine-type-input-headings">
          {" "}
          Gear Transmission
        </p>
        <div className="create__car-engine-type-input-container">
          <input
            className="create__car-engine-type-input-1"
            type="radio"
            name="Automatic"
            value={"automatic"}
            checked={event.target.value === "automatic"}
            onChange={(event) => {
              console.log(event.target.value);
              setSelectedCarEngineType(event.target.value);
            }}
          />
          <label className="create__car-engine-type-input-1-heading">
            Automatic
          </label>
          <input
            className="create__car-engine-type-input-2"
            type="radio"
            name="Manual"
            value={"manual"}
            checked={event.target.value === "manual"}
            onChange={(event) => {
              console.log(event.target.value);
              setSelectedCarEngineType(event.target.value);
            }}
          />
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
