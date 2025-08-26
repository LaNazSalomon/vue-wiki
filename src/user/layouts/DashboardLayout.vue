<script setup lang="ts">
import CardListPage from '../pages/CardListPage.vue';
import ChatListPage from '../pages/ChatListPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import PresentationPage from '../pages/PresentationPage.vue';

import TaskListPage from '../pages/TaskListPage.vue';
</script>

<template>
  <q-page class="q-pa-md">
    <CardListPage />

    <!-- Primer bloque de tres columnas -->
    <div class="row q-mt-md" style="display: flex; gap: 16px; flex-wrap: wrap">
      <div style="flex: 1; min-width: 300px">
        <TaskListPage />
      </div>
      <div style="flex: 1; min-width: 300px">
        <ContactPage />
      </div>
      <div style="flex: 1; min-width: 300px">
        <ContactsPage />
      </div>
    </div>

    <!-- Segundo bloque con dos columnas -->
    <div class="row q-mt-md" style="display: flex; gap: 16px; flex-wrap: wrap">
      <div style="flex: 1; min-width: 300px">
        <PresentationPage />
      </div>
      <div style="flex: 2; min-width: 300px">
        <ChatListPage />
      </div>
    </div>
  </q-page>
</template>
