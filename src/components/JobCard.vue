<template>
  <router-link to="/Job/uid" custom v-slot="{ navigate }">
    <div
      :class="['job', { applied: this.postulations.includes(id) }]"
      @click="navigate"
    >
      <div class="job-image">
        <img :src="picture" alt="picture" />
      </div>
      <div class="job-body">
        <h1 class="job-title">{{ title }}</h1>
        <h2 class="job-description">
          {{ description }}
        </h2>
        <h3 class="job-location">
          <img src="./../assets/icons/location.svg" alt="location" />
          <span>{{ location }}</span>
        </h3>
        <h3 class="job-salary">
          <img src="./../assets/icons/salary.svg" alt="salary" /><span
            >{{ salary }} / mois</span
          >
        </h3>
        <h3 class="job-enterprise">
          <img src="./../assets/icons/enterprise.svg" alt="enterprise" /><span
            >{{ enterprise }}</span
          >
        </h3>
        <!-- <button>Postuler</button> -->
      </div>
      <div class="job-footer">
        <!-- <h3>
          <img src="./../assets/icons/time.svg" alt="time" /><span
            >Depuis 1h</span
          >
        </h3> -->
        <div class="job-footer__tags">
          <button v-for="statu in status">{{ statu }}</button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { ref } from "vue";
import { getAuth } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
// import { query, collection, getDocs } from "firebase/firestore"
// the firestore instance
import db from "./../main.js";

export default {
  name: "JobCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    enterprise: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    status: {
      type: Array,
      required: true,
    },
    postulations: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const auth = getAuth();
    const currentUser = getAuth().currentUser;
    const id = ref(currentUser.uid);
    return {
      auth,
      id,
    };
  },
  data() {
    return {
      //
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      const docSnap = await getDoc(doc(db, "users", this.id));
      if (docSnap.exists()) {
        //
      } else {
        console.log("Document does not exist");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/settings.scss";
* {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  color: #202121;
}
.job {
  cursor: pointer;
  background: $white;
  transition: 0.3s ease-out;
  border: 1px solid #e6eaea;
  &.applied {
    background: #F5FBFB;
  }
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  &-image {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-body {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    .job-title {
      font-size: 18px;
      font-weight: 700;
    }
    .job-description {
      font-size: 15px;
      // font-style: italic;
      font-weight: 300;
      margin: 5px 0;
    }
    h3 {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 15px;
      }
      span {
        margin-left: 5px;
        font-size: 14px;
      }
    }
    button {
      width: 100%;
      align-self: flex-end;
      cursor: pointer;
      padding: 0.5rem 0.75rem;
      font-size: 14px;
      border: none;
      font-weight: 400;
      text-transform: uppercase;
      background: $default;
      color: #fff;
      margin-top: 10px;
    }
  }
  &-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0.5rem;
    padding: 0.5rem;
    padding-top: 10px;
    border-top: 1px solid #e6eaea;
    h3 {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 15px;
      }
      span {
        margin-left: 5px;
        font-style: italic;
        font-size: 14px;
      }
    }
    &__tags {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;
      button {
        padding: 0.25rem 0.5rem;
        border-radius: 30px;
        font-size: 12px;
        border: none;
        font-weight: 400;
        text-transform: uppercase;
        color: #fff;
      }
      button:nth-child(n) {
        background: #ff4e4e;
      }
      button:nth-child(2n) {
        background: #8154ef;
      }
      button:nth-child(3n) {
        background: #f9a825;
      }
    }
  }
}
</style>
