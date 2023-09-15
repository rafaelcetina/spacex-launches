<script>
  let count = 0;

  function decrement() {
    count -= 1;
  }

  function increment() {
    count += 1;
  }
</script>

<div>
  <button class="border px-4 py-2 text-xl text-white" on:click={decrement}>
    <span> - </span>
  </button>
  <span class="text-yellow-300 text-xl mx-4"> {count} </span>
  <button class="border px-4 py-2 text-xl text-white" on:click={increment}>
    <span> + </span>
  </button>
</div>
