<template>
  <!-- <h1>{{ this.$route.params.id }}</h1> -->
  <Header />
  <div class="job-body">
    <SideBar />
    <div class="body-content">
      <div class="body-content-card">
        <div class="card-header">
          <img :src="jobInfo[0].picture" alt="picture" class="job-picture" />
          <h1>{{ jobInfo[0].title }}</h1>
          <div>
            <h3>
              <img
                src="./../../assets/icons/location-white.svg"
                alt="location"
              />
              <span>{{ jobInfo[0].location }}</span>
            </h3>
            <h3>
              <img
                src="./../../assets/icons/salary-white.svg"
                alt="salary"
              /><span>{{ jobInfo[0].salary }} / mois</span>
            </h3>
            <h3>
              <img
                src="./../../assets/icons/enterprise-white.svg"
                alt="enterprise"
              /><span>{{ jobInfo[0].enterprise }}</span>
            </h3>
            <h3>
              <img
                src="./../../assets/icons/time-white.svg"
                alt="enterprise"
              /><span
                >Début : {{ new Date(jobInfo[0].init).getDate() }} /
                {{ new Date(jobInfo[0].init).getMonth() + 1 }} /
                {{ new Date(jobInfo[0].init).getFullYear() }}</span
              >
            </h3>
          </div>
          <div>
            <button v-for="statu in jobInfo[0].status">{{ statu }}</button>
          </div>
        </div>
        <div class="card-body">
          <h2>Description</h2>
          <p>{{ jobInfo[0].description }}</p>
          <div>
            <h3>
              <img
                src="./../../assets/icons/enterprise.svg"
                alt="enterprise"
              /><span>{{ jobInfo[0].enterprise }}</span>
            </h3>
            <h4>Vous êtes intéressé ?</h4>
            <button>Postuler</button>
          </div>
        </div>
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
    background: $white;
    .card-header {
      position: relative;
      height: 25rem;
      .job-picture {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &::before {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        content: " ";
        z-index: 2;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      h1 {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 2.8125rem;
        line-height: 1.2;
        text-align: center;
        color: $white;
        z-index: 2;
        @media (max-width: 768px) {
          font-size: 2.125rem;
        }
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.75rem;
        z-index: 2;
        h3 {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          img {
            width: 18px;
          }
          span {
            color: $white;
            margin-left: 5px;
            font-weight: 400;
            font-size: 1rem;
          }
        }
        button {
          padding: 0.25rem 0.75rem;
          font-size: 16px;
          border: 2px solid $white;
          border-radius: 30px;
          font-weight: 500;
          text-transform: uppercase;
          background: rgba($color: $white, $alpha: 0.1);
          color: #fff;
        }
      }
    }

    .card-body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        margin-bottom: 15px;
        font-size: 2rem;
        align-self: flex-start;
      }
      p {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        opacity: 0.8;
        padding: 0.5rem 1rem 2rem 1rem;
        line-height: 1.5rem;
      }
      div {
        width: 400px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 1rem;
        border: 1px solid rgb(229, 229, 229);
        h3 {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 20px;
          }
          span {
            margin-left: 10px;
            font-weight: 600;
            font-size: 1.2rem;
          }
        }
        h4 {
          margin: 10px 0;
          font-weight: 400;
          font-size: 1rem;
        }
        button {
          //width: 100%;
          cursor: pointer;
          padding: 0.5rem 0.75rem;
          font-size: 14px;
          border: none;
          font-weight: 400;
          text-transform: uppercase;
          background: $default;
          color: #fff;
          margin-top: 10px;
          &:hover {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
          }
        }
      }
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
