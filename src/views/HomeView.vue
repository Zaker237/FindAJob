<template>
  <div class="home">
    <nav class="navigation">
      <div class="navigation__center">
        <div class="navigation-left">
          <img src="../assets/logo/logo.svg" alt="logo">
        </div>
        <div class="navigation-right">
          <a href="#"></a>
          <a href="#">Teams</a>
          <router-link to="/login"><button>Connexion</button></router-link>
          <router-link to="/register"><button>Inscription</button></router-link>
        </div>
      </div>
    </nav>
    <header class="header">
      <div class="header__center">
        <div class="header-left">
          <h1><span>Find A Job</span> vous aide a trouver un emploi.</h1>
          <h2>Trouvez des jobs de votre profil.</h2>
          <router-link to="/login"><button>Commencez</button></router-link>
        </div>
        <div class="header-right">
          <img src="../assets/illustrations/illustration-5.png" alt="illustration">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/settings.scss";
.home {
  .navigation{
    display: flex;
    align-items: center;
    justify-content: center;
    &__center{
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-left{
      img{
        cursor: pointer;
        width: 50px;
        height: auto;
      }
    }
    &-right{

    }
  }
  .header{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../assets/images/01.png");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    &__center{
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-left{
        span {
          font-weight: 900;
          background: linear-gradient(to right, #7F3EF1, #A94DFC);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
        h1 {
          font-size: 56px;
          font-weight: 900;
          line-height: 78px;
        }
        h2 {
          font-size: 30px;
          font-weight: 600;
          margin: 10px 0;
        }
      button{
        cursor: pointer;
        background: linear-gradient(to right, #7F3EF1, #A94DFC);
        color: $white;
        border: 2px solid $purple;
        font-weight: 500;
        border-radius: 30px;
        padding: 10px;
        transition: .3s ease-in-out;
        &:hover{
          background: linear-gradient(to right, #A94DFC, #7F3EF1);
        }
      }
    }
    &-right{
      width: 90%;
      display: flex;
      img{
        width: 100%;
      }
    }
  }
}
</style>
