<script>
	import Login from '$lib/components/Login.svelte';
	import { goto } from '$app/navigation';
  
	async function handleLogin({ email, password }) {
	  const response = await fetch('/login', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	  });
  
	  if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Login failed');
	  }
  
	  // Navigate to a new page or handle post-login actions
	  goto('/dashboard');
	}
  </script>
  
  <Login onSubmit={handleLogin} />
  