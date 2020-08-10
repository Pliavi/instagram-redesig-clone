<template>
  <div class="PostCard">
    <div class="ProfileLine">
      <!-- <UserPhoto class="ProfileLine_photo" rounded/> -->
      <div class="ProfileLine__photo UserPhoto">
        <img class="UserPhoto__image" src="https://placekitten.com/64/64" />
      </div>
      <div class="ProfileLine__user-info">
        <div class="ProfileLine__name">Vitor Silvério</div>
        <div class="ProfileLine__location">Caraguatatuba</div>
      </div>
    </div>

    <div class="ShowCase">
      <Photo :src="photos.pop()" />
      <div v-if="photos.length > 2" class="ShowCase__more-photos">
        <Photo v-for="(photo, index) in photos" :src="photo" :key="index" />
      </div>
    </div>

    <div class="Actions">
      <div>
        <font-awesome-icon icon="far fa-heart"></font-awesome-icon>
      </div>
      <div>
        <font-awesome-icon icon="far fa-comment"></font-awesome-icon>
      </div>
      <div>
        <font-awesome-icon icon="far fa-share-square"></font-awesome-icon>
      </div>
      <div>
        <font-awesome-icon icon="far fa-bookmark"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from "@/components/Photo";

export default {
  props: ["photos"],
  components: { Photo }
};
</script>

<style lang="scss" scoped>
.PostCard {
  padding: var(--padding-md);
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
</style>