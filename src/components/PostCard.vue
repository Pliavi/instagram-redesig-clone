<template>
  <div class="PostCard">
    <div class="ProfileLine">
      <!-- <UserPhoto class="ProfileLine_photo" rounded/> -->
      <div class="ProfileLine__photo UserPhoto">
        <img class="UserPhoto__image" src="https://placekitten.com/64/64" />
      </div>
      <div class="ProfileLine__user-info">
        <div class="ProfileLine__name">{{ metadata.user }}</div>
        <div class="ProfileLine__location">{{ metadata.location }}</div>
      </div>
    </div>

    <Photo v-if="photos.length === 1" :src="photos[0]" />
    <swiper v-else class="MySwiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(photo, index) in photos" :key="index">
        <Photo :src="photo" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div class="ActionBox">
      <div class="Action">
        <font-awesome-icon class="Action__icon" :icon="['far', 'heart']" />
        <span>{{ metadata.counters.likes }}</span>
      </div>

      <div class="Action">
        <font-awesome-icon class="Action__icon" :icon="['far', 'comment']" />
        <span>{{ metadata.counters.comments }}</span>
      </div>

      <div class="Action">
        <font-awesome-icon
          class="Action__icon"
          :icon="['far', 'share-square']"
        />
        <span>{{ metadata.counters.shares }}</span>
      </div>

      <div class="Action">
        <font-awesome-icon class="Action__icon" :icon="['far', 'bookmark']" />
      </div>
    </div>

    <div
      class="Subtitle"
      :class="{ '-trucated': truncatedSubtitle }"
      @click="truncatedSubtitle = false"
    >
      <a :href="metadata.user" class="Subtitle__user-nick">{{
        metadata.user
      }}</a>
      &nbsp;
      <span class="Subtitle__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam
        quia, soluta debitis magnam blanditiis odit voluptates non nobis rem
        necessitatibus iure! Quam culpa sint temporibus natus consequuntur nisi
        earum.
      </span>
    </div>
  </div>
</template>

<script>
import Photo from "@/components/Photo";

export default {
  props: ["metadata", "photos"],
  data() {
    return {
      truncatedSubtitle: true,
      swiperOptions: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: { Photo }
};
</script>

<style lang="scss" scoped>
.PostCard {
  padding: var(--padding-md);
  overflow: hidden;
}
.ProfileLine {
  display: flex;
  margin-bottom: var(--margin-sm);
  &__user-info {
    font-size: 1rem;
    text-align: left;
    margin-left: var(--margin-sm);
  }
  &__name {
    font-weight: 600;
  }
  &__location {
    font-weight: 500;
    color: gray;
  }
}

.UserPhoto {
  &__image {
    width: 42px;
    height: 42px;
    border-radius: var(--radius-full);
  }
}

.ActionBox {
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: var(--margin-md) 0;
}

.Action {
  margin: 0 var(--margin-sm);
  &__icon {
    width: 20px;
    height: 20px;
  }
  &:last-child {
    margin-left: auto;
  }

  &:not(:last-child) &__icon {
    margin-right: var(--margin-sm);
  }
}

.Subtitle {
  display: -webkit-box;
  box-sizing: border-box;
  text-align: left;
  padding: 0 var(--padding-md);
  border-radius: var(--radius-md);
  &.-trucated {
    overflow-y: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__user-nick {
    text-decoration: none;
    font-weight: bold;
    color: var(--link-color);
  }

  &:active {
    background-color: #f1f1f1;
  }
}

.MySwiper {
  overflow: visible;
  .swiper-pagination {
    position: relative;
    bottom: 0;
    z-index: 10;
  }
}
</style>
