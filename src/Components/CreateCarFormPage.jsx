import { useEffect, useState } from "react";
import "./createCarFormPage.scss";
import { databases, ID } from "../lib/appwrite";

export default function CreateCarFormPage() {
  const [carModels, setCarModels] = useState();
  const [carMakes, setCarMakes] = useState();
  const [selectedCarColor, setSelectedCarColor] = useState();
  const [carTypes, setCarTypes] = useState();

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_ALL_CARS_COLLECTION_ID,
        ID.unique(),
        {
          carId: ID.unique(),
          carModels: event.target.carModel.value,
          carMake: event.target.carMake.value,
          carColor: event.target.carColor.value,
          carSeats: parseInt(event.target.seats.value),
          carTypes: event.target.carType.value,
          carEngineType: event.target.engineType.value,
          carFuelTankCapacity: event.target.fuelTank.value,
          carRentPrice: parseFloat(event.target.carRent.value),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

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
      <form className="create__car-form" onSubmit={submitButtonHandler}>
        <div className="create__car-form-main-heading">
          Vehicle Registration Form
        </div>
        <div className="create__car-appearance-box">
          <p className="create__car-model-input-heading">Model</p>
          <select className="create__car-model-input" name="carModel">
            {carModels?.map((carModel) => {
              return (
                <option key={carModel?.$id} value={carModel?.$id}>
                  {carModel?.modelName}
                </option>
              );
            })}
          </select>
          <p className="create__car-make-input-heading">Make</p>

          <select className="create__car-make-input" name="carMake">
            {carMakes?.map((carMake) => {
              return (
                <option key={carMake.$id} value={carMake.$id}>
                  {carMake?.makeCompanyName}
                </option>
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

          <input
            className="create__car-seats-input"
            type="number"
            name="seats"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
        </div>
        <p className="create__car-type-input-headings">Select Type</p>
        <select className="create__car-type-input" name="carType">
          {carTypes?.map((carType) => {
            return (
              <option key={carType.$id} value={carType.$id}>
                {carType?.typeName}
              </option>
            );
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
            name="engineType"
            value={"Automatic"}
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
          <label className="create__car-engine-type-input-1-heading">
            Automatic
          </label>
          <input
            className="create__car-engine-type-input-2"
            type="radio"
            name="engineType"
            value={"Manual"}
            onChange={(event) => {
              console.log(event.target.value);
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
          name="fuelTank"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <label className="create__car-rent-price-input-heading">
          Rent Price
        </label>
        <input
          className="create__car-rent-price-input"
          type="number"
          step={"0.1"}
          placeholder="$"
          name="carRent"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <div className="create__car-form-btns">
          <button className="create__car-form-submit-btn" type="submit">
            Submit
          </button>
          <button className="create__car-form-cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
