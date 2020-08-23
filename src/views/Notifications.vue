<template>
  <div>
    <header-bar>
      <template v-slot:left>
        <nav-button tag="router-link" to="/" class="BackButton">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </nav-button>
      </template>

      <div class="HeaderTitle">
        Notificações
      </div>
    </header-bar>

    <div class="flex flex-col px-2 py-2 space-y-4">
      <notification-balloon
        v-for="(notification, index) in notifications"
        :key="index"
        v-bind="notification"
        :variant="notification.type"
      />
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import NavButton from "@/components/buttons/NavButton";
import NotificationBalloon from "@/components/NotificationBalloon";
import { readableRelativeDate } from "@/utils/date";

export default {
  mounted() {
    fetch("/data/notifications.json")
      .then(res => res.json())
      .then(notifications => {
        this.notifications = notifications.map(notification => ({
          ...notification,
          date: readableRelativeDate(notification.date)
        }));
      });
  },
  data() {
    return {
      notifications: []
    };
  },

  components: { HeaderBar, NavButton, NotificationBalloon }
};
</script>
