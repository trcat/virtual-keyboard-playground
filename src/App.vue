<template>
  <div id="app">
    <div class="input">
      {{ keyboardValue || '点击虚拟键盘输入内容' }}
    </div>
    <SimpleKeyboard
      @onChange="onChange"
      @onKeyPress="onKeyPress"
      :input="input"
    />
  </div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard";

export default {
  name: "App",
  components: {
    SimpleKeyboard,
  },
  data: () => ({
    keyboardValue: "",
  }),
  methods: {
    onChange(input) {
      this.input = input;
      this.keyboardValue = "";
    },
    onKeyPress(button) {
      console.log("button", button);
    },
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

.simple-keyboard {
  max-width: 850px;
}
</style>
