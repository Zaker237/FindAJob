<template>
  <!-- <h1>{{ this.$route.params.id }}</h1> -->
  <Header />
  <div class="job-body">
    <SideBar />
    <div class="body-content">
      <div class="body-content-card">
        <img :src="jobInfo[0].picture" alt="picture" />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { doc, getDoc } from "firebase/firestore";
import db from "./../../main.js";
export default {
  components: { Header, SideBar },
  data() {
    return {
      jobInfo: [], // jobInfo[0]
    };
  },
  created() {
    this.getJob();
  },
  methods: {
    async getJob() {
      const docSnap = await getDoc(doc(db, "jobs", this.$route.params.id));
      if (docSnap.exists()) {
        // console.log(docSnap.data());
        this.jobInfo.push(docSnap.data());
      } else {
        console.log("Document does not exist");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/settings.scss";
.job-body {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  // grid-column-gap: 10px;
  grid-row-gap: 0px;
  background: $ligth;
  background-size: 42px 42px;
}
.body-content {
  grid-area: 1 / 3 / 2 / 13;
  padding-top: 56px;
  // margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &-card {
    width: 100%;
    height: 25rem;
    background: $white;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
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
