export default function CreateCarFormPage() {
  return (
    <div className="create__car">
      <form>
        <select className="create__car-model-input"> </select>
        <select className="create__car-type-input"> </select>
        <input className="create__car-color-input" type="text" />
        <input className="create__car-seats-input" type="number" />
        <div className="create__car-engine-type-input-container">
          <input className="create__car-engine-type-input-1" type="radio" />
          <input className="create__car-engine-type-input-2" type="radio" />
        </div>
        <input className="create__car-tank-capacity-input" type="number" />
        <input className="create__car-rent-price-input" type="number" />
      </form>
    </div>
  );
}
