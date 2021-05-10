import { ADD_WORD } from "./actions";

let initialState = {
  chips: [
    { key: 0, label: "Hi" },
    { key: 1, label: "my" },
    { key: 2, label: "I am" },
    { key: 3, label: "name" },
    { key: 4, label: "is" },
    { key: 5, label: "the" },
    { key: 6, label: "to" },
    { key: 7, label: "Ivan" },
  ],
  answers: Array<string>(),
  question: Array<string>(),
  arrWord: Array<string>(),
  sentence: "",
  stateValue: "stateValue",
};

export let addWord = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_WORD:
      return state.stateValue;
    default:
      return state;
  }
};
