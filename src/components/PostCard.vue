<template>
  <div class="PostCard">
    <div class="ProfileLine">
      <!-- <UserPhoto class="ProfileLine_photo" rounded/> -->
      <div class="ProfileLine__photo UserPhoto">
        <img class="UserPhoto__image" src="https://placekitten.com/64/64" />
      </div>
      <div class="ProfileLine__user-info">
        <div class="ProfileLine__name">{{ postData.user }}</div>
        <div class="ProfileLine__location">{{ postData.location }}</div>
      </div>
    </div>

    <Photo
      v-if="postData.photos.length === 1"
      :src="postData.photos[0]"
      class="MySwiper"
    />
    <swiper v-else class="MySwiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(photo, index) in postData.photos" :key="index">
        <Photo :src="photo" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div class="ActionBox">
      <div class="Action" @click="liked = !liked">
        <font-awesome-icon
          class="Action__icon"
          :class="{ '-liked': liked }"
          :icon="[liked ? 'fas' : 'far', 'heart']"
        />
        <span>{{ postData.counters.likes }}</span>
      </div>

      <div class="Action">
        <font-awesome-icon class="Action__icon" :icon="['far', 'comment']" />
        <span>{{ postData.counters.comments }}</span>
      </div>

      <div class="Action">
        <font-awesome-icon
          class="Action__icon"
          :icon="['far', 'share-square']"
        />
        <span>{{ postData.counters.shares }}</span>
      </div>

      <div class="Action">
        <font-awesome-icon class="Action__icon" :icon="['far', 'bookmark']" />
      </div>
    </div>

    <div
      class="Subtitle"
      @click="truncatedSubtitle = false"
      ref="truncatableSubtitle"
    >
      <div :class="{ '-trucated': truncatedSubtitle }">
        <a :href="postData.user" class="Subtitle__user-nick">{{
          postData.user
        }}</a>
        &nbsp;
        <span class="Subtitle__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam
          quia, soluta debitis magnam blanditiis odit voluptates non nobis rem
          necessitatibus iure! Quam culpa sint temporibus natus consequuntur
          nisi earum.
        </span>
      </div>
      <div class="Subtitle__see-more" v-if="truncatedSubtitle">
        ver mais
      </div>
    </div>
  </div>
</template>

<script>
import Photo from "@/components/Photo";

export default {
  props: ["postData"],
  data() {
    return {
      liked: false,
      photosLoading: 0,
      truncatedSubtitle: false,
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
  mounted() {
    const rem = parseInt(getComputedStyle(document.documentElement).fontSize);
    const $sub = this.$refs.truncatableSubtitle;

    // Two lines as in line-clamp in css (the .5 is for the possible margin)
    if ($sub.offsetHeight > 2.5 * rem) {
      this.truncatedSubtitle = true;
    }
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

    &.-liked {
      transform: scale(1);
      animation: bumpheart 200ms;
      animation-iteration-count: 2;
      animation-direction: alternate;
      animation-timing-function: ease;
      animation-fill-mode: both;
      color: var(--color-primary);
    }
  }
  &:last-child {
    margin-left: auto;
  }

  &:not(:last-child) &__icon {
    margin-right: var(--margin-sm);
  }
}

.Subtitle {
  box-sizing: border-box;
  text-align: left;
  padding: 0 var(--padding-md);
  border-radius: var(--radius-md);
  .-trucated {
    display: -webkit-box;
    overflow-y: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    cursor: pointer;
  }

  &__user-nick {
    text-decoration: none;
    font-weight: bold;
    color: var(--link-color);
  }

  &__see-more {
    color: var(--text-light);
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

@keyframes bumpheart {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
