const Store = {
  state: {
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
    stateValue: "",
  },

  getState() {
    return this.state;
  },

  rerenderState(state: any) {},

  sendAnswer() {
    if (this.state.stateValue.length === 0) return;
    this.state.answers.push(this.state.stateValue);
    // Start rerender
    this.rerenderState(this.state);
    this.state.stateValue = "";
  },
  storeAddWord(word: string) {
    this.state.arrWord.push(word);
    // Start rerender
    this.rerenderState(this.state);
  },
  enterTxt(txt: string) {
    this.state.stateValue = txt;
    this.rerenderState(this.state);
  },
  subscribe(observer: any) {
    this.rerenderState = observer;
  },
};

export default Store;
