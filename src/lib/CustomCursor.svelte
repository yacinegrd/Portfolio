<script>
  import { onMount } from "svelte";

  onMount(() => {
    const body = document.querySelector("body");
    const cursor = document.querySelector("#costum-cursor");

    body.addEventListener("mousemove", (e) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    });
  });
</script>

<div id="costum-cursor"></div>

<style>
  #costum-cursor {
    visibility: hidden;
  }
  @media only screen and (min-width: 844px) {
    #costum-cursor {
      visibility: visible;
      --size: 10px;
      pointer-events: none;
      width: var(--size);
      height: var(--size);
      background-color: #ffffff;
      mix-blend-mode: difference;
      border-radius: 300px;
      position: fixed;
      transform: translate(calc(var(--size) / -2), calc(var(--size) / -2));
      transition: transform 0.2s ease-out;
      z-index: 1000;
    }
  }
</style>
