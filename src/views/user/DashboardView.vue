<template>
  <div v-if="isOpen" class="container-alert">
    <div class="card">
      <span>Votre profile a bien ete mis a jour :)</span>
      <button @click="closeModal">Compris !</button>
    </div>
  </div>
  <Header />
  <div class="dashboard-body">
    <SideBar />
    <div class="body-content">
      <div class="content-header">
        <h1>Salut, {{ id }} ici tu pourras consulter toutes tes offres.</h1>
      </div>
      <div class="content-cards">
        <div
          v-for="job in allJobs.filter((job) => job.author === id)"
          :key="job.id"
        >
          <JobCard
            :title="job.title"
            :description="job.description"
            :salary="job.salary"
            :location="job.location"
            :enterprise="job.enterprise"
            :picture="job.picture"
            :status="job.status"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, updateProfile } from "firebase/auth";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import { query, collection, getDocs } from "firebase/firestore";
import db from "./../../main.js";

export default {
  components: { JobCard, Header, SideBar },
  setup() {
    const isOpen = ref(false);
    const auth = getAuth();
    const currentUser = getAuth().currentUser;
    const isEmailVerified = ref(currentUser.emailVerified);
    const displayName = ref(currentUser.displayName);
    const id = ref(currentUser.uid);
    const photoURL = ref(currentUser.photoURL);

    const closeModal = () => {
      isOpen.value = false;
    };
    const updateProfileFunc = () => {
      updateProfile(currentUser, {
        displayName: "",
        photoURL: "",
      })
        .then(() => {
          isOpen.value = true;
        })
        .catch((error) => {
          console.log("Error updating profile: ", error);
        });
    };

    return {
      isOpen,
      auth,
      isEmailVerified,
      displayName,
      photoURL,
      closeModal,
      updateProfileFunc,
      id,
    };
  },
  data() {
    return {
      allJobs: [],
    };
  },
  created() {
    this.getJobs();
  },
  methods: {
    async getJobs() {
      const querySnap = await getDocs(query(collection(db, "jobs")));

      querySnap.forEach((doc) => {
        this.allJobs.push(doc.data());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/settings.scss";

.dashboard-body {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  background: $ligth;
}

.body-content {
  grid-area: 1 / 3 / 2 / 13;
  padding-top: 70px;
  margin-right: 10px;
}

.content-header {
  width: 100%;
  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 24px;
  }
}

.content-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding-top: 20px;
  grid-gap: 10px;
}

@media screen and (max-width: 1100px) {
  .body-content {
    grid-area: 1 / 4 / 2 / 13;
  }
}

@media screen and (max-width: 700px) {
  .body-content {
    margin-right: 0;
    padding: 65px 5px 85px 5px;
    grid-area: 1 / 1 / 2 / 13;
    min-height: 100vh;
  }
}

.container-alert {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;

  .card {
    width: clamp(40%, 400px, 95%);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: $white;

    span {
      color: $dark;
      text-align: left;
      padding: 5px;
      font-weight: 500;

      span {
        font-weight: 600;
        text-decoration: underline;
        padding: 0;
      }
    }

    button {
      background: $success;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px;
      color: $white;
      font-weight: 500;
      align-self: flex-end;
    }
  }
}
</style>
