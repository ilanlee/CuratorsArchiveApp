<script>
  import { writable } from 'svelte/store';

  let email = '';
  let password = '';
  export let onSubmit = async () => {}; // Function passed as a prop
  export let errorMessage = writable('');
  
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await onSubmit({ email, password });
    } catch (error) {
      errorMessage.set(error.message || 'An error occurred');
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="email">Email</label>
  <input id="email" type="email" bind:value={email} required />

  <label for="password">Password</label>
  <input id="password" type="password" bind:value={password} required />

  <button type="submit">Login</button>
  {#if $errorMessage}
    <p style="color: red;">{$errorMessage}</p>
  {/if}
</form>

<style>
  /* Add your styles here */
</style>
