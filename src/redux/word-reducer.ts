import { ADD_WORD } from "./actions";

export let addWord = (state = "", action: any) => {
  switch (action.type) {
    case ADD_WORD:
      return {};
    default:
      return state;
  }
};
