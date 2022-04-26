<template>
  <div class="home">
    <nav class="navigation">
      <div class="navigation__center">
        <div class="navigation-left">
          <img src="../assets/logo/logo.svg" alt="logo">
          <span>
            <span> F</span>ind
            <span> A </span>
            <span> J</span>ob
          </span>
        </div>
        <ul class="navigation-right">
          <li><a href="#">A propos</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Contact</a></li>
          <router-link to="/login"><li><button class="btn__login">Connexion</button></li></router-link>
          <router-link to="/register"><li><button class="btn__register">Inscription</button></li></router-link>
        </ul>
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
        <a href="#about">
          <div class="scroll-down">
            <img src="../assets/icons/arrow-down.svg" alt="arrow-down">
          </div>
        </a>
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
    // border-bottom: 2px solid rgba($dark, 1);
    background: $white;
    &__center{
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-left{
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-weight: 700;
        font-size: 25px;
        margin-left: 10px;
        span{
          font-weight: 700;
          font-size: 25px;
          color: $purple;
          margin: 0;
        }
      }
      img{
        cursor: pointer;
        width: 50px;
        height: auto;
      }
    }
    &-right{
      display: flex;
      align-items: center;
      justify-content: center;
      li{
        a{
          padding: 20px;
          margin: 0 5px;
          font-weight: 600;
          &:hover{
            color: $purple;
          }
        }
        button{
          cursor: pointer;
          padding: 18px;
          margin: 0 5px;
          font-weight: 600;
          background: $primary;
          color: $white;
          border: 2px solid $primary;
        }
        .btn__login{
          background: $ligth;
          border-color: $ligth;
          color: $primary;
        }
      }
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
      position: relative;
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .scroll-down{
      position: absolute;
      left: 50%;
      bottom: 10px;
      border: 3px solid $dark;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      img{
        width: 40px;
      }
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
