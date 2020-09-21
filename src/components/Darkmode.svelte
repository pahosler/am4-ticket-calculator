<script>
  let darkmode
  function dark() {
    window.document.body.classList.toggle('dark-mode');
  }
</script>

<style>
  .placement {
    position: absolute;
    top: 15px;
    right: 10px;
  }

  .switch {
    display: inline-block;
    height: 24px;
    position: relative;
    width: 40px;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 16px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 16px;

  }

  input:checked+.slider {
    background-color: #323b34;
  }

  input:checked+.slider:before {
    transform: translateX(16px);
  }

  .slider.round {
    border-radius: 14px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
<div class="placement">
  <label class="switch" for="checkbox">
    <input id="checkbox" type="checkbox" bind:checked={darkmode} on:change={dark} />
    <div class="slider round"></div>
  </label>
  <!-- <button class="" on:click={dark}>dark</button> -->
</div>