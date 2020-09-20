<script>
  let tix = "pax";
  let real = "realism";
  let km = 100;
  let promise = Promise.resolve();
  const calculate = async () => {
    const res = await fetch(
      `https://am4ticketcalc.netlify.app/.netlify/functions/tickets?type=${tix}&distance=${km}`
    );
    let response = res.json
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(`ERROR ERROR ERROR!!! ${res}`);
    }
  };

  const handleClick = async () => {
    promise = await calculate();
  };
</script>

<style>
  .real {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    text-align: left;
  }
</style>

<div class="real">
  <div>
    <label>
      <input type=radio bind:group={real} value={"realism"}>
      REALISM
    </label>
    <br />
    <label>
      <input type=radio bind:group={real} value={"easy"}>
      EASY
    </label>
  </div>
</div>

<label>
  <input type=radio bind:group={tix} value={"pax"}>
  PAX
</label>
<label>
  <input type=radio bind:group={tix} value={"cargo"}>
  CARGO
</label>

<h3>{real.toUpperCase()}-{tix.toUpperCase()}</h3>
<label>
  Enter Kilometers
  <input type=number bind:value={km} min=100 max=35000>
</label>


<button on:click={handleClick} disabled={km < 100}>CALCULATE</button>

{#await promise}
  <p>Calculating...</p>
{:then data}
{#if data===undefined}
  <p>waiting for input...</p>
{:else}
  <div class="real">
    {#if tix === "pax"}
      <p>ECONOMIC: {real==="realism" ? data.realism.economic : data.easy.economic}</p>
      <p>BUSINESS: {real==="realism" ? data.realism.business : data.easy.business}</p>
      <p>FIRST CLASS: {real==="realism" ? data.realism.firstClass : data.easy.firstClass}</p>
    {:else}
      <p>LARGE: {real==="realism" ? data.realism.large : data.easy.large}</p>
      <p>HEAVY: {real==="realism" ? data.realism.heavy : data.easy.heavy}</p>
    {/if}
  </div>
{/if}
{:catch error}
  <p>Whoops! {error}</p>
{/await}