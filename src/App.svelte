<script>
  import GRDlogo from "/GRD.svg";
  import WorkCard from "./lib/WorkCard.svelte";

  const copytoclipboard = (e) => {
    navigator.clipboard.writeText("yacine.grd@gmail.com");
    document.querySelector(".copied").style.opacity = 1;
    setTimeout(function () {
      document.querySelector(".copied").style.opacity = 0;
    }, 1000);
  };
</script>

<header id="top">
  <section>
    <img src={GRDlogo} alt="logo GRD" />
    <button on:click={copytoclipboard} class="email">
      <span class="copied">Copied to clipboard</span>
      <i
        ><svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.84733 3.00084C1.41663 3.91283 1.41663 5.21495 1.41663 7.5C1.41663 10.1561 1.41663 11.4841 2.09302 12.4151C2.31147 12.7157 2.57588 12.9802 2.87655 13.1986C3.80754 13.875 5.13557 13.875 7.79163 13.875H9.20829C11.8644 13.875 13.1924 13.875 14.1234 13.1986C14.424 12.9802 14.6884 12.7157 14.9069 12.4151C15.5833 11.4841 15.5833 10.1561 15.5833 7.5C15.5833 5.1988 15.5833 3.89448 15.1434 2.98156M1.84733 3.00084C1.91726 2.85276 1.99854 2.71497 2.09302 2.58493C2.31147 2.28426 2.57588 2.01985 2.87655 1.8014C3.80754 1.125 5.13557 1.125 7.79163 1.125H9.20829C11.8644 1.125 13.1924 1.125 14.1234 1.8014C14.424 2.01985 14.6884 2.28426 14.9069 2.58493C14.9973 2.70931 15.0756 2.84078 15.1434 2.98156M1.84733 3.00084L2.12496 3.25L3.49129 4.61633C5.8524 6.97744 7.03295 8.15799 8.49996 8.15799C9.96697 8.15799 11.1475 6.97744 13.5086 4.61633L14.875 3.25L15.1434 2.98156"
            stroke="#FAFAFA"
            stroke-width="1.5"
          />
        </svg>
      </i>
      <span>yacine.grd1@gmail.com</span>
    </button>
  </section>
</header>
<main>
  <section class="hero">
    <div class="hero-text">
      <h1>Wesite Developer & Designer</h1>
      <p>
        Crafting digital experiences that captivate, innovate, and inspire.
        Welcome to my portfolio, where pixels meet passion and code brings
        creativity to life.
      </p>
      <a href="https://wa.link/1j0s2p" target="_blank">Contact</a>
    </div>
    <div class="hero-img">
      <img src="/my-image.png" alt="yacine guerandi" />
    </div>
  </section>
  <section class="work">
    <WorkCard
      title="Idklair Agency"
      tags="WordPress, JavaScript"
      src="/Frame 11.png"
      link="https://idklair.com"
    />
    <WorkCard
      title="L'escale"
      tags="VueJs, Figma"
      src="/Frame 13.png"
      link="https://l-escale.netlify.app/"
    />
    <WorkCard
      title="Dubai Elite Estate"
      tags="WordPress"
      src="/Frame 15.png"
      link="https://dubaieliteestate.com/"
    />
  </section>
  <section class="about-contact">
    <div class="about">
      <h2>About <span></span></h2>
      <p>
        Hi there! I'm <strong>Yacine Guerandi</strong>, a passionate web
        developer and designer with a flair for crafting unforgettable digital
        experiences. With a keen eye for detail and a love for innovation, I
        thrive on turning ideas into interactive realities that leave a lasting
        impact.
        <br /><br />

        When I'm not coding or designing, you can find me seeking inspiration in
        nature, savoring a good cup of coffee, or diving into the latest tech
        trends.
        <br /><br />

        <strong>Let's connect</strong> and bring your digital vision to life!
      </p>
    </div>
    <div class="contact">
      <h2>Contact <span></span></h2>
      <p style="margin-bottom: 6px;">
        You can contact me using one of the methods below.
      </p>
      <p><strong>Email : yacine.grd1@gmai.com</strong></p>
      <p><strong>Phone : +213 791 78 64 01</strong></p>
      <p style="margin: 20px 0 6px 0;">Or you can follow me on social media.</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/yacinegrd/" target="_blank"
            >Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yacine-guerandi-3b3642202/"
            target="_blank">LinkedIn</a
          >
        </li>
        <li>
          <a href="https://www.behance.net/grdycn" target="_blank">Behance</a>
        </li>
      </ul>
    </div>
  </section>
</main>
<footer>
  <section>
    <h2>Thanks for viewing stay in touch ;)</h2>
    <a href="#top" class="scroll">
      <i
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 20C11.25 20.4142 11.5858 20.75 12 20.75C12.4142 20.75 12.75 20.4142 12.75 20H11.25ZM12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM6.46731 7.47204C6.17573 7.76624 6.17784 8.24111 6.47204 8.53269C6.76624 8.82427 7.24111 8.82216 7.53269 8.52796L6.46731 7.47204ZM8.74731 6.23703L8.21462 5.70907L8.74731 6.23703ZM15.2527 6.23703L14.72 6.76499L15.2527 6.23703ZM16.4673 8.52796C16.7589 8.82216 17.2338 8.82428 17.528 8.53269C17.8222 8.24111 17.8243 7.76624 17.5327 7.47204L16.4673 8.52796ZM11.6867 4.01989L11.5918 3.27591L11.5918 3.27591L11.6867 4.01989ZM12.3133 4.01989L12.4082 3.27591L12.4082 3.27591L12.3133 4.01989ZM12.75 20L12.75 4L11.25 4L11.25 20H12.75ZM7.53269 8.52796L9.28 6.76499L8.21462 5.70907L6.46731 7.47204L7.53269 8.52796ZM14.72 6.76499L16.4673 8.52796L17.5327 7.47204L15.7854 5.70907L14.72 6.76499ZM9.28 6.76499C9.98914 6.0495 10.4772 5.55869 10.8907 5.22659C11.2924 4.904 11.5504 4.79332 11.7815 4.76387L11.5918 3.27591C10.9737 3.35469 10.4588 3.64963 9.95146 4.05706C9.45597 4.45498 8.89892 5.01863 8.21462 5.70907L9.28 6.76499ZM15.7854 5.70907C15.1011 5.01863 14.544 4.45498 14.0485 4.05706C13.5412 3.64963 13.0263 3.3547 12.4082 3.27591L12.2185 4.76387C12.4496 4.79332 12.7076 4.904 13.1093 5.22659C13.5228 5.55869 14.0109 6.0495 14.72 6.76499L15.7854 5.70907ZM11.7815 4.76387C11.9266 4.74538 12.0734 4.74538 12.2185 4.76387L12.4082 3.27591C12.1371 3.24136 11.8629 3.24136 11.5918 3.27591L11.7815 4.76387Z"
            fill="#FAFAFA"
          />
        </svg>
      </i>
      <span>Scroll Up</span>
    </a>
    <p class="credits">© Guerandi Yacine, 2024</p>
  </section>
</footer>

<style lang="scss">
  header section {
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    .email {
      position: relative;
      .copied {
        opacity: 0;
        position: absolute;
        top: 35px;
        left: 30px;
        background-color: #1b1b1b;
        padding: 5px 20px;
        border-radius: 100px;
        color: #c5c5c5;
        transition: opacity 0.2s ease-in;
      }
      .tooltip span {
        transform: translateY(-2px);
      }
      background-color: #1b1b1b;
      border-radius: 100px;
      padding: 4px 16px;
      display: flex;
      align-items: center;
      line-height: 1;
      gap: 8px;
    }
  }
  .work {
    margin-top: 100px;
    display: flex;
    gap: 20px;
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 450px;
    }
    h1 {
      font-size: 64px;
      line-height: 100%;
      max-width: 563px;
    }
    p {
      color: #c5c5c5;
      margin-top: 18px;
      margin-bottom: 42px;
      max-width: 500px;
    }
    a {
      background-color: white;
      color: #0e0e0e;
      border-radius: 50px;
      padding: 8px 55px;
      font-weight: 700;
      &:hover {
        background-color: rgb(191, 191, 191);
      }
    }
  }

  .about-contact {
    display: flex;
    margin-top: 100px;

    h2 {
      font-size: 36px;
      span {
        display: inline-block;
        width: calc(100% - 230px);
        margin-left: 50px;
        height: 2px;
        background-color: white;
      }
    }
    p {
      color: #c5c5c5;
      margin-right: 70px;
    }
    .about {
      flex: 1 1 0px;
    }
    .contact {
      flex: 1 1 0px;
      ul {
        display: flex;
        gap: 22px;
        a {
          color: rgb(190, 198, 255);
        }
      }
    }
  }

  footer section {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2 {
      font-size: 48px;
      max-width: 483px;
      line-height: 1;
    }
    .scroll {
      margin-top: 50px;
      margin-bottom: 100px;
      font-family: "Stara";
      color: #fff;
      display: flex;
      flex-direction: column;
    }
    .credits {
      font-family: "Stara";
      color: #666666;
    }
  }

  @media only screen and (max-width: 844px) {
    .hero {
      flex-direction: column-reverse;
    }
    .work {
      flex-direction: column;
    }
    .about-contact {
      flex-direction: column;
      gap: 60px;
    }
  }

  @media only screen and (max-width: 500px) {
    header section {
      img {
        width: 30%;
      }
      flex-direction: column;
      gap: 8px;
      .email {
        width: min-content;
        span {
          transform: translateY(-2px);
        }
      }
    }
    .hero {
      h1 {
        font-size: 36px;
      }
      img {
        width: 100%;
      }
    }
  }

  .about-contact {
    h2 {
      span {
        margin-left: 0;
        width: calc(100% - 150px);
      }
    }
    p {
      margin-right: 0;
    }
  }
</style>
