<template>
  <div class="home" id="home">
    <a href="#home">
      <div class="arrow-up">
        <img src="../assets/icons/arrow-up.svg" alt="arrow-down">
      </div>
    </a>
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
          <li><a href="#about">A propos</a></li>
          <li><a href="#teams">Teams</a></li>
          <li><a href="#contact">Contact</a></li>
          <router-link to="/login">
            <li>
              <button class="btn__login">Connexion</button>
            </li>
          </router-link>
          <router-link to="/register">
            <li>
              <button class="btn__register">Inscription</button>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>
    <header class="header">
      <div class="header__center">
        <div class="header-left">
          <h1><span>Find A Job</span> vous aide a trouver un emploi.</h1>
          <h2>Trouvez des jobs de votre profil.</h2>
          <router-link to="/login">
            <button>Commencez</button>
          </router-link>
        </div>
        <div class="header-right">
          <img src="../assets/illustrations/illustration-5.png" alt="illustration">
        </div>
        <!--        <a href="#about">-->
        <!--          <div class="scroll-down">-->
        <!--            <img src="../assets/icons/arrow-down.svg" alt="arrow-down">-->
        <!--          </div>-->
        <!--        </a>-->
      </div>
    </header>
    <header id="about" class="about">
      <div class="about__center">
        <div class="about-right">
          <img src="../assets/illustrations/illustration-1.png" alt="illustration">
        </div>
        <div class="about-left">
          <h1>Vous etes a la recherche d' emploi ?</h1>
          <h2>Vous auriez la possibilite de voir toutes les offres d' emploi correspondant a ton profil.</h2>
        </div>
      </div>
    </header>
    <header class="about">
      <div class="about__center">
        <div class="about-left">
          <h1>Vous etes recruteur ?</h1>
          <h2>Vous pourriez publier vos offres d' emploi afin d' avoir de bon employe'.</h2>
        </div>
        <div class="about-right">
          <img src="../assets/illustrations/illustration-4.png" alt="illustration">
        </div>
      </div>
    </header>
    <header class="about">
      <div class="about__center">
        <div class="about-right">
          <img src="../assets/illustrations/illustration-2.png" alt="illustration">
        </div>
        <div class="about-left">
          <h1>Alors viens qu' attends tu ?</h1>
          <h2>Viens t' inscrire et postule a des offres ou publis en !</h2>
          <router-link to="/login">
            <button>Commencez</button>
          </router-link>
        </div>
      </div>
    </header>
    <header class="about">
      <div class="about__center">
        <div class="about-left">
          <h1>Satisfait ou pas ?</h1>
          <h2>Votre avis nous aide beaucoup, donc n' hesitez surtout pas !</h2>
          <a href="mailto:leonelngoya@gmail.com">
            <button>Feedback</button>
          </a>
        </div>
        <div class="about-right">
          <img src="../assets/illustrations/illustration-3.png" alt="illustration">
        </div>
      </div>
    </header>
    <div class="teams" id="teams">
      <div class="teams__center">
        <div class="card">
          <img src="" alt="">
          <div class="card-footer">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/settings.scss";

.home {
  .arrow-up {
    position: fixed;
    right: 10px;
    bottom: 10px;
    border: 2px solid $dark;
    background: $info;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;

    img {
      width: 25px;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    // border-bottom: 2px solid rgba($dark, 1);
    background: $white;

    &__center {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-left {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-weight: 700;
        font-size: 25px;
        margin-left: 10px;

        span {
          font-weight: 700;
          font-size: 25px;
          color: $purple;
          margin: 0;
        }
      }

      img {
        cursor: pointer;
        width: 50px;
        height: auto;
      }
    }

    &-right {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        a {
          padding: 20px;
          margin: 0 5px;
          font-weight: 600;

          &:hover {
            color: $purple;
          }
        }

        button {
          position: relative;
          cursor: pointer;
          padding: 18px;
          margin: 0 5px;
          font-weight: 600;
          background: $primary;
          color: $white;
          border: 2px solid $primary;
        }

        .btn__login {
          background: $ligth;
          border-color: $ligth;
          color: $primary;
        }
      }
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../assets/images/01.png");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;

    &__center {
      position: relative;
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .scroll-down {
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

      img {
        width: 40px;
      }
    }

    &-left {
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

      button {
        cursor: pointer;
        background: linear-gradient(to right, #7F3EF1, #A94DFC);
        color: $white;
        border: 2px solid $purple;
        font-weight: 500;
        border-radius: 30px;
        padding: 10px;
        transition: .3s ease-in-out;

        &:hover {
          background: linear-gradient(to right, #A94DFC, #7F3EF1);
        }
      }
    }

    &-right {
      width: 90%;
      display: flex;

      img {
        width: 100%;
      }
    }
  }

  .about {
    display: flex;
    align-items: center;
    justify-content: center;
    //background: url("../assets/images/02.png");
    //background-size: cover;
    //background-repeat: no-repeat;
    //min-height: 100vh;
    &__center {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-left {
      h1 {
        font-size: 45px;
        font-weight: 900;
        line-height: 78px;
      }

      h2 {
        font-size: 27px;
        font-weight: 500;
        margin: 10px 0;
      }

      button {
        cursor: pointer;
        background: linear-gradient(to right, #7F3EF1, #A94DFC);
        color: $white;
        border: 2px solid $purple;
        font-weight: 500;
        border-radius: 30px;
        padding: 10px;
        transition: .3s ease-in-out;

        &:hover {
          background: linear-gradient(to right, #A94DFC, #7F3EF1);
        }
      }
    }

    &-right {
      width: 500px;
      display: flex;

      img {
        width: 100%;
      }
    }
  }
}
</style>