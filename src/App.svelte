<script>
  import viewport from "./lib/useViewPortAction";
  import docSVG from "/doc.on.doc.svg";
  import emailSVG from "/email-icon.svg";
  import GRDlogo from "/GRD.svg";
  import CustomCursor from "./lib/CustomCursor.svelte";
  import WorkCard from "./lib/WorkCard.svelte";

  // handeling events
  const copytoclipboard = (e) => {
    const email = e.target.innerText;
    const tooltip = document.querySelector(".copied");

    navigator.clipboard.writeText(email);

    tooltip.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], {
      duration: 1500,
      fill: "forwards",
      easing: "linear(0, 0.5, 0.5, 0.5, 0.5, 1)",
    });
  };
</script>

<CustomCursor />
<header id="top">
  <section>
    <img src={GRDlogo} alt="logo GRD" class="logo" />
    <button on:click={copytoclipboard} class="email">
      <span class="copied">Copied to clipboard</span>
      <i
        ><img src={emailSVG} alt="email svg" class="email-svg" />
        <img src={docSVG} alt="email svg" class="doc-svg" /></i
      >
      <span>yacine.grd1@gmail.com</span>
    </button>
  </section>
</header>
<main>
  <section class="hero">
    <div class="hero-text">
      <h1 data-text="Wesite Developer & Designer" class="">
        Wesite Developer & Designer
      </h1>
      <p class="">
        Crafting digital experiences that captivate, innovate, and inspire.
        Welcome to my portfolio, where pixels meet passion and code brings
        creativity to life.
      </p>
      <a href="https://wa.link/1j0s2p" target="_blank" class="hero-button"
        ><span>Contact</span></a
      >
    </div>
    <div class="hero-img">
      <img src="/my-image.png" alt="yacine guerandi" />
    </div>
  </section>
  <section class="work">
    <div class="row-1">
      <WorkCard
        title="Idklair Agency"
        src="/work/idklair.png"
        link="https://idklair.com"
        order={0}
      />

      <WorkCard
        title="Quartier D'affaires"
        src="/work/qa.png"
        link="https://development.idklair.com/"
        order={1}
      />
    </div>
    <div class="row-2">
      <WorkCard
        title="L'escale"
        src="/work/escale.png"
        link="https://l-escale.netlify.app/"
        order={0}
      />
      <WorkCard
        title="Green Flow Tech"
        src="/work/gft.png"
        link="https://green-flow-tech.netlify.app/"
        order={1}
      />
      <WorkCard
        title="Pro Pure Parfums"
        src="/work/ppp.png"
        link="https://www.pro-pure-parfums.dz"
        order={2}
      />
    </div>
  </section>
  <section class="about-contact">
    <div
      use:viewport
      on:enterViewPort={(e) => {
        e.target.classList.add("show");
      }}
      on:exitViewPort={(e) => {
        e.target.classList.remove("show");
      }}
      class="about hide"
    >
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
    <div
      use:viewport
      on:enterViewPort={(e) => {
        e.target.classList.add("show");
      }}
      on:exitViewPort={(e) => {
        e.target.classList.remove("show");
      }}
      class="contact hide"
    >
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
    <h2
      use:viewport
      on:enterViewPort={(e) => {
        e.target.classList.add("show");
      }}
      on:exitViewPort={(e) => {
        e.target.classList.remove("show");
      }}
      class="hide"
    >
      Thanks for viewing stay in touch ;)
    </h2>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      use:viewport
      on:click={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      on:enterViewPort={(e) => {
        e.target.classList.add("show");
      }}
      on:exitViewPort={(e) => {
        e.target.classList.remove("show");
      }}
      class="scroll hide"
    >
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
  //-------------------------------------------------------------------------------------------------

  header section {
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    .email {
      position: relative;
      &:hover {
        .email-svg {
          opacity: 0;
          transform: translate(-50%, calc(-50% - 10px));
        }
        .doc-svg {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
      }
      i {
        position: relative;
        height: 100%;
        width: 17px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .email-svg {
          transition: all 0.2s ease-out;
        }
        .doc-svg {
          transition: all 0.2s ease-out;

          opacity: 0;
          transform: translate(-50%, calc(-50% + 10px));
        }
      }
      .copied {
        pointer-events: none;
        opacity: 0;
        position: absolute;
        top: 35px;
        left: 22px;
        background-color: #1b1b1b;
        padding: 5px 20px;
        border-radius: 100px;
        color: #c5c5c5;
        transition: opacity 0.2s ease-in;
      }
      span {
        font-family: "Stara";
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
    flex-direction: column;
    gap: 32px;
    .row-1,
    .row-2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;
    }
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 80px auto 120px auto;
    img {
      opacity: 0;
      animation: fadein 1s ease-out 0.5s forwards;
      width: 450px;
    }
    h1 {
      position: relative;
      font-size: 64px;
      line-height: 100%;
      max-width: 563px;
      color: #00000000;
      &::after {
        content: attr(data-text);
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        animation: hero-text-animation 1s cubic-bezier(0.67, 0.31, 0.52, 0.63)
          0.2s;

        @keyframes hero-text-animation {
          0% {
            clip-path: xywh(0% 100% 100% 100%);
          }
          100% {
            clip-path: xywh(0% 0% 100% 100%);
          }
        }
      }
    }
    p {
      animation: fadein 1s ease-out 0.7s forwards;
      color: #c5c5c5;
      margin-top: 18px;
      margin-bottom: 42px;
      max-width: 500px;
      opacity: 0;
    }
    a {
      animation: fadein 1s ease-out 1s forwards;
      opacity: 0;

      background-color: white;
      color: #0e0e0e;
      border-radius: 50px;
      padding: 8px 55px;
      font-weight: 700;
      transition: background-color 0.5s ease-out;
    }
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
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
      transition: opacity 0.8s ease-in;
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
      .row-1,
      .row-2 {
        flex-direction: column;
      }
    }
    .about-contact {
      flex-direction: column;
      gap: 60px;
    }
  }

  @media only screen and (max-width: 500px) {
    header section {
      .logo {
        width: 30%;
      }
      align-items: center;
      gap: 8px;
      .email {
        width: min-content;
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
  }

  @media only screen and (min-width: 844px) {
    .contact {
      transition-delay: 0.2s !important;
    }

    .hero-button:hover span {
      display: inline-block;
      animation: button-animaiton 0.5s ease-out;
      animation-fill-mode: forwards;
    }
  }

  .hide {
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }

  :global(.show) {
    opacity: 1 !important;
    transition: opacity 1s ease-in !important;
  }
  // cursor hover effects
  :global(body:has(.hero-button:hover) #costum-cursor) {
    transform: scale(6);
  }
  :global(body:has(.email:hover, .work-card a:hover) #costum-cursor) {
    transform: scale(4);
  }
  :global(body:has(ul li a:hover) #costum-cursor) {
    transform: scale(3);
  }
  :global(body:has(.scroll:hover, .logo:hover) #costum-cursor) {
    transform: scale(5);
  }

  @keyframes button-animaiton {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    30% {
      transform: translateY(-20px);
      opacity: 0;
    }
    50% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
