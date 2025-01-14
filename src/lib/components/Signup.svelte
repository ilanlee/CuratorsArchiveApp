<script>
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { auth } from '$lib/utils/firebase';
  
    async function handleSignup(event) {
      event.preventDefault(); // Prevent default form submission
  
      const email = event.target.email.value;
      const password = event.target.password.value;
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User created:', user);
        // TODO: Redirect to a success page or update UI
      } catch (error) {
        console.error('Error creating user:', error);
        // TODO: Display error message to the user
      }
    }
  </script>
  
  <form on:submit={handleSignup} class="p-4">
    <input type="email" name="email" placeholder="Email" class="border p-2 mb-2" />
    <input type="password" name="password" placeholder="Password" class="border p-2 mb-2" />
    <button type="submit" class="bg-blue-500 text-white p-2 rounded">Sign up</button>
  </form>