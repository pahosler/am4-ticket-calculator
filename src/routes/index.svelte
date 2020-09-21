<script>
  import Form from "./_form.svelte";
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }

  :global(body) {
    background-color: antiquewhite;
    color: black;
    transition: background-color 0.3s;
  }

  :global(body.dark-mode) {
    background-color: #141815;
    color: antiquewhite;
  }
</style>

<main>
  <h1>AM4 Tools Ticket Prices</h1>
  <Form />
</main>