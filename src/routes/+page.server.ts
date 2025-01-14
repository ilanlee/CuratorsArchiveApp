import type { RequestHandler } from './$types';
import { auth } from '$lib/utils/firebase.js'; // Ensure you have initialized Firebase Admin SDK
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const { email, password } = await request.json();

    try {
      // Verify the user with Firebase
      const userRecord = await auth().getUserByEmail(email);

      // Authenticate the user (example: verify password - handled on the client)
      // In production, use a Firebase custom token for enhanced security
      const token = await auth().createCustomToken(userRecord.uid);

      // Set token in cookies or session securely
      return {
        status: 200,
        body: { message: 'Login successful', token },
      };
    } catch (error) {
      return fail(401, { message: 'Invalid email or password' });
    }
  },
};
