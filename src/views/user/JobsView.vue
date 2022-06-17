<template>
  <Header />
  <div class="jobs-body">
    <SideBar />
    <div class="body-content">
      <div class="content-cards">
        <div
          v-for="job in allJobs.filter((job) => job.author !== id)"
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
import { getAuth } from "firebase/auth";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import { query, collection, getDocs } from "firebase/firestore";
import db from "./../../main.js";

export default {
  components: { JobCard, Header, SideBar },
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
.jobs-body {
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

.content-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
}

@media screen and (max-width: 1100px) {
  .body-content {
    grid-area: 1 / 4 / 2 / 13;
  }
}

@media screen and (max-width: 700px) {
  .body-content {
    grid-area: 1 / 1 / 2 / 13;
    min-height: 100vh;
    margin: 0 5px 90px 5px;
  }
}
</style>
