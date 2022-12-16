//creer les slices
import { createSlice } from "@reduxjs/toolkit";
export const picturesSlice = createSlice({
  name: "pictures", // nom du slice
  initialState: {
    // valeurs initiales du state
    pictures: null,
  },
  reducers: {
    // liste des actions get post put etc en relation avec la bd
    setPicturesData: (state, action) => {
      //nom de laction a executer
      state.pictures = action.payload;
    },
    addPictureData: (state, { payload }) => {
      state.pictures.push(payload);
      //ou state.pictures=[...state.pictures,payload]
    },
    editPictureData: (state, { payload }) => {
      state.pictures = state.pictures.map((pic) => {
        if (pic.id === payload[1]) {
          return {
            ...pic,
            artist: payload[0],
          };
        } else return pic;
      });
    },
    deletePicture: (state, { payload }) => {
      state.pictures = state.pictures.filter((pic) => pic.id !== payload);
    },
  },
});
//exporter toutes les fonctions crees  (setPictureData,...)
// exporter par default la slice
export const {
  setPicturesData,
  addPictureData,
  editPictureData,
  deletePicture,
} = picturesSlice.actions;
export default picturesSlice.reducer;
