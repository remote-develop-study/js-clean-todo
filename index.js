import App from "./src/components/App.js";

import { $ } from "./src/utils/selector.js";

const store = {
  todoField: "",
  todos: [
    {
      id: 1,
      name: "과제하기",
      mode: "completed",
    },
    {
      id: 2,
      name: "과제하기",
      mode: "view",
    },
    {
      id: 3,
      name: "과제하기",
      mode: "view",
    },
  ],
};

new App({ $app: $(".todoapp"), initialState: store });
