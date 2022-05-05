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
          <li>
            <router-link to="/login">
              <button class="btn__login">Connexion</button>
            </router-link>
          </li>
          <li>
            <router-link to="/register">
              <button class="btn__register">Inscription</button>
            </router-link>
          </li>
        </ul>
        <img @click="toggleBurger" src="../assets/icons/burger.svg" alt="burger" class="navigation-burger">
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
      </div>
    </header>
    <div class="about" id="about">
    </div>
    <div class="teams" id="teams">
      <div class="teams__center">
        <div class="card">
          <img src="" alt="">
          <div class="card-footer">

          </div>
        </div>
      </div>
    </div>
    <div class="contact" id="contact">
      <form
          action="https://formspree.io/f/xzboklab"
          method="POST"
      >
        <div>
          <label for="email"></label>
          <input type="email" name="email" id="email" placeholder="Entrez votre mail" required>
        </div>
        <div>
          <label for="message"></label>
          <textarea name="message" id="message" placeholder="Entrez votre message" maxlength="1000" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    <p class="copy">&copy; Tout droits réservés - Find A Job - 2022</p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    toggleBurger() {
      const burger = document.querySelector(".navigation-burger");
      const menu = document.querySelector(".navigation-right");
      burger.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }
  }
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
        a:is(:not(a[href="/login"], a[href="/register"])) {
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

    &-burger {
      display: none;
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
        @media screen and (max-width: 1200px) {
          font-size: 40px;
        }
      }

      h2 {
        font-size: 30px;
        font-weight: 600;
        margin: 10px 0;
        @media screen and (max-width: 1200px) {
          font-size: 25px;
        }
      }

      button {
        cursor: pointer;
        background: linear-gradient(to right, #7F3EF1, #A94DFC);
        color: $white;
        border: 2px solid $purple;
        font-weight: 600;
        border-radius: 30px;
        padding: 13px;
        font-size: 16px;
        transition: .3s ease-in-out;

        &:hover {
          background: linear-gradient(to right, #A94DFC, #7F3EF1);
        }
      }
    }

    &-right {
      width: 90%;
      display: flex;
      @media screen and (max-width: 970px) {
        display: none;
      }

      img {
        width: 100%;
      }
    }
  }

  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    form {
      background: $dark;
      width: clamp(40%, 400px, 95%);
      padding: 10px;
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 20px 0;

        label {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 5px;
        }

        input, textarea {
          width: 100%;
          border: 1px solid #E5E7EB;
          border-radius: 4px;
          padding: 10px;
          outline: none;
          resize: none;

          &:focus {
            border-color: #bcbec3;
          }
        }
      }

      button {
        background: $dark;
        border: 1px solid $dark;
        border-radius: 4px;
        padding: 10px;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        color: $ligth;
        margin-top: 20px;
        cursor: pointer;
        transition: box-shadow 0.2s ease-in-out;

        &:hover {
          box-shadow: 2px 2px 10px #dfdfdf;
        }
      }
    }
  }

  .copy {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 600;
    background: $white;
  }
}

@media only screen and (max-width: 990px) {
  .home {
    .navigation {
      &-left {
        span {
          display: none;
        }
      }
    }
  }
}

@media only screen and (max-width: 820px) {
  .home {
    .navigation {
      padding: 10px 0;
      position: relative;

      &-burger {
        display: block;
        cursor: pointer;
        width: 35px;
      }

      &-right {
        position: absolute;
        left: 0;
        width: 70%;
        height: calc(100vh - 70px);
        background: $ligth;
        top: 70px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding-top: 50px;
        z-index: 3;
        transform: translateX(-100%);

        li {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          a:is(:not(a[href="/login"], a[href="/register"])) {
            width: 100%;
            padding: 20px 0;
            margin: 0;
            text-align: center;
          }

          a:is(a[href="/login"], a[href="/register"]) {
            width: 100%;
            margin: 7px 0;
          }

          button {
            width: 100%;
            margin: 0;
          }

          .btn__login {
            background: $white;
          }
        }
      }

      &-right.active {
        transform: translateX(0);
      }
    }
  }
}
</style>