<script>
  import viewport from "./useViewPortAction";

  export let title = "";
  export let tags;
  export let link;
  export let src;
  export let order;
</script>

<div
  use:viewport
  on:enterViewPort={(e) => {
    e.target.classList.add("show-work");
  }}
  on:exitViewPort={(e) => {
    e.target.classList.remove("show-work");
  }}
  style="--delay: {order * 0.2}s;"
  class="work-card hide"
>
  <a href={link} target="_blank"><img {src} alt="portfolio" /></a>

  <div class="info">
    <div class="info-text">
      <h3>{title}</h3>
      <span class="tags">{tags}</span>
    </div>
    <a href={link} target="_blank">
      <i
        ><svg
          width="17"
          height="11"
          viewBox="0 0 17 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 4.75C1.08579 4.75 0.75 5.08579 0.75 5.5C0.75 5.91421 1.08579 6.25 1.5 6.25L1.5 4.75ZM15.5 6.25C15.9142 6.25 16.25 5.91421 16.25 5.5C16.25 5.08579 15.9142 4.75 15.5 4.75L15.5 6.25ZM12.528 0.592309C12.2338 0.300726 11.7589 0.302844 11.4673 0.597041C11.1757 0.891238 11.1778 1.36611 11.472 1.65769L12.528 0.592309ZM13.5426 2.65389L13.0146 3.18659L13.0146 3.18659L13.5426 2.65389ZM13.5426 8.3461L14.0706 8.8788L14.0706 8.8788L13.5426 8.3461ZM11.472 9.34231C11.1778 9.63389 11.1757 10.1088 11.4673 10.403C11.7589 10.6972 12.2338 10.6993 12.528 10.4077L11.472 9.34231ZM15.4826 5.22583L16.2266 5.131L16.2266 5.131L15.4826 5.22583ZM15.4826 5.77417L16.2266 5.869L16.2266 5.869L15.4826 5.77417ZM1.5 6.25L15.5 6.25L15.5 4.75L1.5 4.75L1.5 6.25ZM11.472 1.65769L13.0146 3.18659L14.0706 2.1212L12.528 0.592309L11.472 1.65769ZM13.0146 7.81341L11.472 9.34231L12.528 10.4077L14.0706 8.8788L13.0146 7.81341ZM13.0146 3.18659C13.6423 3.80863 14.0672 4.23136 14.3536 4.58807C14.6306 4.93295 14.7159 5.14266 14.7386 5.32066L16.2266 5.131C16.1546 4.56597 15.885 4.09934 15.5232 3.64882C15.1709 3.21015 14.6731 2.71842 14.0706 2.1212L13.0146 3.18659ZM14.0706 8.8788C14.6731 8.28158 15.1709 7.78985 15.5232 7.35118C15.885 6.90066 16.1546 6.43403 16.2266 5.869L14.7386 5.67934C14.7159 5.85734 14.6306 6.06705 14.3536 6.41193C14.0672 6.76864 13.6423 7.19137 13.0146 7.81341L14.0706 8.8788ZM14.7386 5.32066C14.7538 5.43975 14.7538 5.56025 14.7386 5.67934L16.2266 5.869C16.2578 5.62398 16.2578 5.37602 16.2266 5.131L14.7386 5.32066Z"
            fill="#C5C5C5"
          />
        </svg>
      </i>
    </a>
  </div>
</div>

<style lang="scss">
  .info {
    a {
      i {
        display: flex;
      }
      background-color: #1b1b1b;
      padding: 10px 20px;
      border-radius: 100px;
      margin-right: 16px;
      transition: filter 0.5s ease-out;

      &:hover {
        filter: brightness(0.7);
      }
    }
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 16px;
    transition: filter 0.5s ease-out;
    &:hover {
      filter: brightness(0.7);
    }
  }

  .hide {
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }

  :global(.show-work) {
    opacity: 1 !important;
    transition: opacity 0.7s ease-in !important;
  }

  @media only screen and (min-width: 844px) {
    :global(.show-work) {
      transition-delay: var(--delay) !important;
    }
  }
</style>
