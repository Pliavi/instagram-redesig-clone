<template>
  <div>
    <HeaderBar>
      <template v-slot:left>
        <RoundedButton tag="router-link" to="/" class="BackButton">
          <font-awesome-icon
            class="Action__icon"
            :icon="['fas', 'chevron-left']"
          />
        </RoundedButton>
      </template>
      <div class="HeaderTitle">
        Notificações
      </div>
    </HeaderBar>
    <div class="Notifications">
      <div
        v-for="(notification, index) in notifications"
        :key="index"
        class="Notification"
      >
        <div class="Notification__user-photo UserPhoto">
          <img src="https://placekitten.com/48/48" />
        </div>

        <div v-if="notification.type === 'comment'" class="Notification__info">
          <div class="Notification__user-name">
            {{ notification.commented_by }}
          </div>
          <div class="Notification__legend">Comentou no seu post</div>
          <p class="Notification__comment">"{{ notification.comment }}"</p>
          <div class="Notification__date">
            {{ notification.date | readableRelativeDate }}
          </div>
        </div>

        <div v-if="notification.type === 'like'" class="Notification__info">
          <div class="Notification__legend">
            {{ notification.liked_by | notificationWhoLikedLegend }}
          </div>
          <div class="Notification__date">
            {{ notification.date | readableRelativeDate }}
          </div>
        </div>

        <div class="Notification__thumb">
          <img :src="notification.thumb" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import RoundedButton from "@/components/buttons/RoundedButton";
import { readableRelativeDate } from "@/utils/date";

export default {
  name: "Notifications",
  components: { HeaderBar, RoundedButton },
  data() {
    return {
      notifications: [
        {
          type: "comment",
          commented_by: "pliavi",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia suscipit laboriosam modi non, facilis accusantium.",
          date: "2020-08-13T15:49:26+00:00",
          thumb: "https://placekitten.com/48/48"
        },
        {
          type: "like",
          liked_by: ["pliavi", "jhon_doe"],
          date: "2020-08-13T15:49:26+00:00",
          thumb: "https://placekitten.com/48/48"
        },
        {
          type: "like",
          liked_by: ["jhon_doe"],
          date: "2020-08-13T15:49:26+00:00",
          thumb: "https://placekitten.com/48/48"
        }
      ]
    };
  },
  filters: {
    readableRelativeDate,
    notificationWhoLikedLegend(likedBy) {
      const firstWhoLiked = likedBy[0];

      return likedBy.length > 1
        ? `${firstWhoLiked} e outras pessoas curtiram sua publicação`
        : `${firstWhoLiked} curtiu sua publicação`;
    }
  }
};
</script>

<style lang="scss" scoped>
.BackButton {
  height: 32px;
  width: 32px;
}

.HeaderTitle {
  font-weight: bold;
}

.Notifications {
  padding: var(--padding-xs) 0;
}

// Notification component
.Notification {
  display: flex;
  margin: var(--margin-md);
  padding: var(--padding-md);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-xs);

  &__user-photo {
    border-radius: var(--radius-full);
    overflow: hidden;
    width: 48px;
    height: 48px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 var(--margin-md);
  }
  &__user-name {
    font-size: var(--text-lg);
    font-weight: bold;
  }
  &__legend {
    color: var(--text-light);
    font-size: var(--text-sm);
  }
  &__comment {
    display: -webkit-box;
    overflow-y: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: var(--text-sm);
    margin: var(--margin-sm) 0;
  }
  &__date {
    font-size: var(--text-xs);
    font-weight: bold;
    color: var(--text-lighter);
    margin-top: auto;
  }
  &__thumb {
    width: 48px;
    height: 48px;
  }
}
</style>
