<script lang="ts" setup>
import { chatMessages } from 'src/assets/helpers/list-chats';
// No se necesita lógica en este caso, ya que es solo visual
</script>
<template>
  <q-card class="q-pa-md full-width">
    <q-card-section class="text-h6 text-primary"> Chat </q-card-section>

    <q-separator />

    <q-chat-message
      v-for="(msg, index) in chatMessages"
      :key="index"
      :text="msg.message"
      :sent="msg.isSent"
      :avatar="msg.avatar"
      :name="msg.name"
    />
  </q-card>
</template>
