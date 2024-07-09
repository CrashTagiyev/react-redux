import { connect } from "react-redux";
import { json } from "react-router-dom";

export let initialState = {
  array: [],
  myBag: [],
  obj: null,
  index: null,
  showModal: false,
};

export function getArray() {
  return function (dispatch) {
    fetch("http://127.0.0.1:5000/goods")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET", payload: data });
      });
  };
}
export function getMyBag() {
  return function (dispatch) {
    fetch("http://127.0.0.1:5000/my-bag")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET MYBAG", payload: data });
      });
  };
}
export function delGood(id) {
  return async function (dispatch) {
    await fetch(`http://127.0.0.1:5000/delete-admin/${id}`, {
      method: `DELETE`,
    });
    dispatch({ type: "DELETE", payload: id });
  };
}
export function delMyBag(id) {
  return async function (dispatch) {
    await fetch(`http://127.0.0.1:5000/delete-mybag/${id}`, {
      method: `DELETE`,
    });
    dispatch({ type: "DELETE MYBAG", payload: id });
  };
}
export function addMyBag(good) {
  return async function (dispatch) {
    await fetch(`http://127.0.0.1:5000/add-mybag`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(good),
    });
    dispatch({ type: "ADD MYBAG", payload: good });
  };
}

export function reducer(state = initialState, action) {
  if (action.type === "ADD") {
    let id;
    if (state.array.length !== 0) {
      id = state.array.at(-1).id + 1;
    } else {
      id = 1;
    }
    let obj = {
      name: action.payload.inputName,
      email: action.payload.inputMail,
      id: id,
    };
    let newArr = [...state.array, obj];
    return { ...state, array: newArr };
  } else if (action.then === "ADD MYBAG") {
    return { ...state.myBag, payload };
  } else if (action.type === "DELETE") {
    let newArr = state.array.filter((item) => item.id !== action.payload);
    return { ...state, array: newArr };
  } else if (action.type === "DELETE MYBAG") {
    let newArr = state.myBag.filter((item) => item.id !== action.payload);
    return { ...state, myBag: newArr };
  } else if (action.type === "CHANGE") {
    let selectedObjIndex = state.array.findIndex(
      (item) => item.id === action.payload.index
    );
    let newArr = [...state.array];
    newArr[selectedObjIndex].name = action.payload.changeInputName;
    newArr[selectedObjIndex].email = action.payload.changeInputMail;
    return { ...state, array: newArr };
  } else if (action.type === "GET") {
    return { ...state, array: action.payload };
  } else if (action.type === "GET MYBAG") {
    return { ...state, myBag: action.payload };
  } else if (action.type === "GET OBJ") {
    return { ...state, obj: action.payload };
  }

  return state;
}
