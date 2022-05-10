<template>
  <Header />
  <div class="dashboard-body">
    <SideBar/>
    <div class="body-content">
      <h1>DASHBOARD</h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet asperiores commodi consectetur, eius eos illo, labore magni maiores necessitatibus nemo nobis nostrum nulla officia perferendis porro possimus quas, qui reprehenderit sed suscipit ut vel veniam voluptatibus voluptatum. Consectetur corporis doloremque exercitationem, fugit illo, illum ipsum, iure natus perspiciatis suscipit tenetur unde ut veritatis! Animi architecto culpa dolore doloremque illum itaque laboriosam magnam, minima nulla numquam officia perferendis repudiandae suscipit totam voluptas. Animi asperiores aspernatur atque autem consequatur cum debitis dolore dolorem dolorum eligendi facere minima natus nesciunt nostrum, nulla officiis placeat quam quos, recusandae rem repellat repudiandae sed sit tenetur ullam vel vitae voluptatum! Accusamus ad aliquid aspernatur assumenda aut autem cumque deserunt, enim eum eveniet iste iure libero mollitia nam natus neque officiis omnis perferendis provident quas quis quos recusandae velit vero voluptatum? Consectetur, debitis fugiat in iste perspiciatis sequi? Ab accusantium dolore est et magni molestias praesentium quisquam tenetur! Accusantium amet aspernatur at delectus deserunt dicta distinctio, molestiae perferendis possimus praesentium quis repellat unde. Architecto deserunt, exercitationem molestiae nemo quae suscipit ut! Accusamus aliquid at beatae ea id ipsam nisi placeat quisquam recusandae, voluptatibus! Ab ad adipisci alias aliquid consequatur culpa eligendi est hic in ipsum, labore maxime minima molestiae natus nisi placeat provident, recusandae repellendus sed sint tenetur vero voluptas, voluptate! A alias aliquam aliquid aperiam at blanditiis consequatur corporis cupiditate debitis eos, esse est eum harum ipsum iste iure iusto magni minus mollitia nam necessitatibus nobis numquam odio perspiciatis porro quasi qui quidem quo recusandae, sed sint sunt suscipit totam veritatis voluptas voluptate voluptatum? A aperiam aspernatur assumenda commodi corporis culpa debitis dolore dolores doloribus ea eaque error et nemo nihil, non odit officia quam quasi saepe unde veniam veritatis vitae voluptatibus! At consectetur consequuntur dicta doloribus dolorum eius error, excepturi illo incidunt inventore ipsum laborum, laudantium magni necessitatibus nisi odit omnis pariatur perspiciatis quos sapiente soluta totam veritatis! A alias autem debitis ipsa nisi. A ipsa iste nesciunt ullam voluptatibus! Ad aspernatur at aut blanditiis commodi consectetur cum deleniti dolor dolorum, ducimus eligendi eos est expedita ipsa libero mollitia neque non nulla numquam officiis pariatur possimus qui quis ratione repellat saepe sequi, temporibus vero vitae voluptate. Atque consequuntur distinctio itaque minus nam nostrum perferendis quia ullam voluptates voluptatibus? Assumenda consequuntur debitis distinctio doloremque suscipit! Aut deserunt ea esse et exercitationem fuga id impedit inventore ipsam itaque iusto maxime nisi quaerat, qui reprehenderit, tempora tenetur!
    </div>
    <div class="body-options">

    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";

export default {
  components: {Header, SideBar},
  data() {
    return {
      auth: getAuth(),
      currentUser : getAuth().currentUser,
      isEmailVerified : getAuth().currentUser.emailVerified,
      displayName : getAuth().currentUser.displayName,
      photoURL : getAuth().currentUser.photoURL,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/settings.scss";
.dashboard-body{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  background: $gray;
  padding-top: 80px;
}
.body-content{
  grid-area: 1 / 4 / 2 / 10;
  margin: 10px;
  padding: 10px;
  border: 2px solid #E5E4E1;
  border-radius: 10px;
}
.body-options{
  grid-area: 1 / 10 / 2 / 13;
  margin: 10px;
  padding: 10px;
  border: 2px solid #E5E4E1;
  border-radius: 10px;
}
</style>