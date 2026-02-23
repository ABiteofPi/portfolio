<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const email = 'abiteofpi@duck.com'
const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const closeModal = () => {
  emit('close')
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}, { immediate: true })
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-btn" @click="closeModal">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="modal-header">
        <h2>Get in Touch</h2>
      </div>

      <div class="modal-body">
        <p class="contact-description">Have a question or feedback? I'd love to hear from you!</p>

        <div class="email-container">
          <p class="email-label">Email</p>
          <div class="email-box">
            <span class="email-text">{{ email }}</span>
            <button class="copy-btn" @click="copyEmail" :class="{ copied: copied }">
              <svg v-if="!copied" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </div>
          <p v-if="copied" class="copy-feedback">Email copied to clipboard!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-content {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  padding: 40px;
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: slideIn 0.3s ease-out;

  @media (max-width: 600px) {
    padding: 30px 20px;
    width: 95%;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: #151515;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: #4d4d4d;
  }
}

.modal-header {
  margin-bottom: 30px;

  h2 {
    margin: 0;
    color: #151515;
    font-size: 28px;
    font-weight: 700;

    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-description {
  color: #4a4a4a;
  font-size: 16px;
  margin: 0;
  line-height: 1.6;
}

.email-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.email-label {
  font-size: 14px;
  font-weight: 600;
  color: #151515;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.email-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f5f5f5;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px 20px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #4d4d4d;
    background-color: #fafafa;
  }
}

.email-text {
  flex: 1;
  color: #151515;
  font-size: 16px;
  word-break: break-all;
  font-family: 'IBM Plex Sans', monospace;
}

.copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #9a9a9a;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: #4d4d4d;
  }

  &.copied {
    color: #4caf50;
  }
}

.copy-feedback {
  font-size: 12px;
  color: #4caf50;
  margin: 0;
  font-weight: 500;
}
</style>
