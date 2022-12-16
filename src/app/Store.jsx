//notre store
import { configureStore } from "@reduxjs/toolkit";
import picturesReducers from "../feature/pictures.slice";
const store = configureStore({
  //liste de toutes les slices/reducers qui seront utilises

  reducer: {
    pictures: picturesReducers,
  },
});
export default store;
