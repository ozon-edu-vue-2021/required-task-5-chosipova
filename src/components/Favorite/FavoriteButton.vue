<template>
  <button>
    <svg
      v-if="!active"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#fff"
      class="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#dc3545"
      class="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
svg {
  width: 40px;
  height: auto;
  transition: 0.2s ease;
}
svg:hover {
  fill: #dc3545;
}
</style>
