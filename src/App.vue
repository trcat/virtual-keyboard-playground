<template>
  <div id="app">
    <div class="input">
      {{ keyboardValue || '点击虚拟键盘输入内容' }}
    </div>
    <SimpleKeyboard
      @onChange="onChange"
      @onKeyPress="onKeyPress"
      :input="keyboardValue"
      :layout="firstLayout"
      :buttonTheme="firstButtonTheme"
      keyboard-class="keyboard-first"
      theme="hg-theme-default myTheme"
    />
    <SimpleKeyboard
      @onChange="onChange"
      @onKeyPress="onKeyPress"
      :input="keyboardValue"
      :layout="secondLayout"
      keyboard-class="keyboard-second"
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
    firstLayout: {
      default: [
        'q w e r t y u i o p',
        'a s d f g h j k l',
        'z x c v b n m'
      ]
    },
    firstButtonTheme: [ 
        {
          class: "bg-red",
          buttons: "Q W E R q w e r",
        },
      ],
    secondLayout: {
      default: [
        '1 2 3',
        '4 5 6',
        '7 8 9',
        '0'
      ]
    }
  }),
  methods: {
    onChange(input) {
      this.keyboardValue = input;
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
  border: 3px solid #1E88E5;
}
.bg-red {
  background-color: red !important;
  color: #fff !important;
}
</style>
