<template>
  <div class="h-screen">
    <header-bar>
      <template v-slot:left>
        <nav-button tag="router-link" to="/">
          <font-awesome-icon
            class="Action__icon"
            :icon="['fas', 'chevron-left']"
          />
        </nav-button>
      </template>
      <div class="mr-auto">
        Notificações
      </div>
    </header-bar>

    <div class="text-center">
      <div class="mb-4 text-4xl">
        Página não encontrada
      </div>
      <strike class="text-lg">Provavelmente eu não fiz mesmo 😉</strike>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import NavButton from "@/components/buttons/NavButton";

export default {
  components: {
    NavButton,
    HeaderBar
  }
};
</script>
