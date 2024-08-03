import { ID, databases } from "../lib/appwrite";

const Admin = () => {
  const createModelOnSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_CAR_MODELS_COLLECTION_ID,
        ID.unique(),
        {
          modelId: ID.unique(),
          modelName: event.target.model.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
    event.target.model.value = "";
  };
  return (
    <div>
      <form onSubmit={createModelOnSubmitHandler}>
        <input
          className="input_1"
          placeholder="Enter"
          type="text"
          name="model"
        />
        <button className="btn#1">Create Model</button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Function called for Type Created");
          console.log(event.target.type.value);
          const promise = databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_CAR_TYPES_COLLECTION_ID,
            ID.unique(),
            {
              typeId: ID.unique(),
              typeName: event.target.type.value,
            }
          );

          promise.then(
            function (response) {
              console.log(response);
            },
            function (error) {
              console.log(error);
            }
          );
        }}
      >
        <input
          className="input_2"
          placeholder="Enter"
          type="text"
          name="type"
        />
        <button className="btn#2">Create Type</button>
      </form>
    </div>
  );
};

export default Admin;
