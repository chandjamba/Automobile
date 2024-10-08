import { useEffect } from "react";
import { ID, databases } from "../lib/appwrite";
import { Query } from "appwrite";

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

  const createTypeOnSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_CAR_TYPES_COLLECTION_ID,
        ID.unique(),
        {
          typeId: ID.unique(),
          typeName: event.target.type.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
    event.target.type.value = "";
  };

  const createMakeOnSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_CAR_MAKE_COLLECTION_ID,
        ID.unique(),
        {
          makeId: ID.unique(),
          makeCompanyName: event.target.make.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
    event.target.make.value = "";
  };

  const createColorOnSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_CAR_COLOR_COLLECTION_ID,
        ID.unique(),
        {
          colorId: ID.unique(),
          colorName: event.target.color.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
    event.target.color.value = "";
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
          .then((resp) => console.log(resp));
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
          .then((resp) => console.log(resp));
      } catch (error) {
        console.log(error);
      }
    }
    getTypes();
  }, []);

  useEffect(() => {
    function getMake() {
      try {
        databases
          .listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_CAR_MAKE_COLLECTION_ID,
            []
          )
          .then((resp) => console.log(resp));
      } catch (error) {
        console.log(error);
      }
    }
    getMake();
  }, []);

  useEffect(() => {
    function getColor() {
      try {
        databases
          .listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_CAR_COLOR_COLLECTION_ID,
            []
          )
          .then((resp) => console.log(resp));
      } catch (error) {
        console.log(error);
      }
    }
    getColor();
  }, []);

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
      <form onSubmit={createTypeOnSubmitHandler}>
        <input
          className="input_2"
          placeholder="Enter"
          type="text"
          name="type"
        />
        <button className="btn#2">Create Type</button>
      </form>
      <form onSubmit={createMakeOnSubmitHandler}>
        <input
          className="input_3"
          placeholder="Enter"
          type="text"
          name="make"
        />
        <button className="btn#3">Create Make</button>
      </form>
      <form onSubmit={createColorOnSubmitHandler}>
        <input
          className="input_4"
          placeholder="Enter"
          type="text"
          name="color"
        />
        <button className="btn#4">Create Color</button>
      </form>
    </div>
  );
};

export default Admin;
