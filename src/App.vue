<template>
  <div id="app">
    <div id="first" class="input">
      {{ keyboardValue || "点击虚拟键盘输入内容" }}
    </div>
    <SimpleKeyboard
      @onChange="onChange"
      @onKeyPress="onKeyPress"
      :input="keyboardValue"
      :layout="layout"
      :display="display"
    />
  </div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard";
import { layout, display } from './keyboard-config'

export default {
  name: "App",
  components: {
    SimpleKeyboard,
  },
  data: () => ({
    keyboardValue: "",
    layout,
    display
  }),
  methods: {
    onChange(input) {
      this.keyboardValue = input;
    },
    onKeyPress(button) {
      console.log("button", button);
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.input {
  width: 100%;
  height: 100px;
  padding: 20px;
  font-size: 20px;
  border: none;
  box-sizing: border-box;
}

[class^="keyboard"] {
  margin-bottom: 8px;
}

.keyboard-first {
  width: 400px;
}
.keyboard-second {
  width: 200px;
}
.myTheme {
  border: 3px solid #1e88e5;
}
.bg-red {
  background-color: red !important;
  color: #fff !important;
}
</style>
