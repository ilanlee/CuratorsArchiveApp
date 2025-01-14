<script>
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { auth } from '$lib/utils/firebase';
  
    async function handleLogin(event) {
      event.preventDefault();
  
      const email = event.target.email.value;
      const password = event.target.password.value;
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User logged in:', user);
        // TODO: Redirect to a protected page or update UI
      } catch (error) {
        console.error('Error logging in:', error);
        // TODO: Display error message to the user
      }
    }
  </script>
  
  <form on:submit={handleLogin} class="p-4">
    <input type="email" name="email" placeholder="Email" class="border p-2 mb-2" />
    <input type="password" name="password" placeholder="Password" class="border p-2 mb-2" />
    <button type="submit" class="bg-blue-500 text-white p-2 rounded">Log in</button>
  </form>