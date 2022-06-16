<template>
  <router-link to="/Job/uid" custom v-slot="{ navigate }">
    <div class="job" @click="navigate">
      <div class="job-image">
        <img
          src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8am9iJTIwc2VhcmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="picture"
        />
      </div>
      <div class="job-body">
        <h1 class="job-title">FrontEnd Developer</h1>
        <h2 class="job-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          nihil! Ullam quod quo eum. Similique laudantium corrupti cupiditate in
          delectus?
        </h2>
        <h3 class="job-location">Remote</h3>
        <h3 class="job-salary">250.000 FCFA</h3>
        <button>Postuler</button>
        <h3>Depuis 1h</h3>
      </div>
      <div class="job-footer">
        <div class="job-footer__tags">
          <button>HTML</button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
// the firestore instance
import db from "./../main.js";

export default {
  name: "JobCard",
  created() {
    this.createUser();
  },
  methods: {
    async createUser() {
      // 'users' collection reference
      const colRef = collection(db, "users");
      // data to send
      const dataObj = {
        name: "John",
        email: "Doe",
        jobApplied: [],
        jobCreated: [],
      };

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj);

      // access auto-generated ID with '.id'
      console.log("Document was created with ID:", docRef.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/settings.scss";
.job {
  cursor: pointer;
  background: $white;
}
</style>
