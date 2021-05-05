import { rerenderState } from "../rerenderState";

const state = {
  dialogs: {
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
  },
  answers: Array<string>(),
  question: Array<string>(),
  arrWord: Array<string>(),
  sentence: "",
};

export let sendAnswer = (messageTxt: string) => {
  state.answers.push(messageTxt);
  // Start rerender
  rerenderState(state);
};

export let storeAddWord = (word: string) => {
  state.arrWord.push(word);
  // Start rerender
  rerenderState(state);
};
export default state;
