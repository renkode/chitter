<script setup>
import { ref, defineProps, watch } from "vue";
// https://javascript.plainenglish.io/vue-js-tip-1-use-v-model-on-custom-components-be56401727e0
const props = defineProps({
  inputValue: String,
  type: String,
  name: String,
  label: String,
  placeholder: String,
  validation: Array, // [ { hasError: Boolean, errorText: String } ] HAVE TO PUT VALIDATION LOGIC IN PARENT
  isTextArea: Boolean,
  startsBlank: Boolean,
  minLength: [String, Number],
  maxLength: [String, Number],
  rows: String,
});
const wrapperRef = ref(null);
const inputRef = ref(null);
const didNotType = ref(props.startsBlank ? true : false);

const setFocus = (e) => {
  if (
    !e.currentTarget.nextElementSibling
      .querySelector("label")
      .classList.contains("red-text")
  ) {
    e.currentTarget.nextElementSibling
      .querySelector("label")
      .classList.toggle("gray-text");
    e.currentTarget.nextElementSibling
      .querySelector("label")
      .classList.toggle("blue-text");
    e.currentTarget.closest(".input-wrapper").classList.toggle("blue-border");
  }
  if (props.maxLength)
    e.currentTarget.nextElementSibling
      .querySelector(".text-limit")
      .classList.toggle("show");
};

watch(
  () => props.inputValue,
  () => {
    if (props.validation && props.validation.length === 0) {
      return;
    }
    if (didNotType.value) didNotType.value = false;
    if (props.validation.some((v) => v.hasError === true)) {
      wrapperRef.value.className = "input-wrapper red-border";
      wrapperRef.value.querySelector("label").className = "red-text";
    } else {
      wrapperRef.value.className = "input-wrapper blue-border";
      wrapperRef.value.querySelector("label").className = "blue-text";
    }
  }
);
</script>

<template>
  <div class="validation-wrapper">
    <div class="input-wrapper" ref="wrapperRef">
      <textarea
        v-if="isTextArea"
        :id="props.name"
        type="text"
        :value="inputValue"
        :placeholder="props.placeholder"
        @input="$emit('update:inputValue', $event.target.value)"
        @focusin="setFocus"
        @focusout="setFocus"
        :minLength="props.minLength"
        :maxlength="props.maxLength"
        :rows="props.rows"
        :ref="inputRef"
      ></textarea>
      <input
        v-else
        :id="props.name"
        :type="!props.type ? 'text' : props.type"
        :value="inputValue"
        :placeholder="props.placeholder"
        @input="$emit('update:inputValue', $event.target.value)"
        @focusin="setFocus"
        @focusout="setFocus"
        :minLength="props.minLength"
        :maxlength="props.maxLength"
        :ref="inputRef"
      />
      <span class="label-wrapper"
        ><label class="gray-text" :for="props.name">{{ props.label }}</label
        ><span class="text-limit gray-text" v-if="props.maxLength"
          >{{ inputValue.length }} / {{ props.maxLength }}</span
        ></span
      >
    </div>
    <template v-for="(v, index) in validation">
      <span
        v-if="v.hasError && !didNotType"
        :key="index"
        class="error-input red-text"
        >{{ v.errorText }}</span
      >
    </template>
  </div>
</template>

<style scoped>
.validation-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.input-wrapper {
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-radius: 6px;
  padding: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-flow: column-reverse;
  height: fit-content;
  width: 100%;
}

.input-wrapper input,
.input-wrapper textarea {
  flex: 1;
  background-color: #262a2e;
  height: 3rem;
  color: white;
  border: 0;
  width: 100%;
}

.input-wrapper textarea {
  height: fit-content;
  word-wrap: break-word;
  word-break: break-all;
  resize: none;
}

.input-wrapper:focus {
  border: #1d9bf0 1px solid;
  outline: 0;
}

.input-wrapper:focus label {
  color: #1d9bf0;
  width: 100%;
}

.input-wrapper.blue-border {
  border: #1d9bf0 1px solid;
}

.input-wrapper.red-border {
  border: 1px solid #f4212e;
}

input:focus,
textarea:focus {
  outline: 0;
}

.input-wrapper label {
  font-size: 0.85rem;
  gap: 6px;
}

.label-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
}

label {
  flex: 1;
  align-self: stretch;
}

.error-input {
  margin-top: 4px;
  font-size: 0.85rem;
}

.text-limit {
  display: none;
  font-size: 0.85rem;
}

.text-limit.show {
  display: inline-block;
}
</style>
