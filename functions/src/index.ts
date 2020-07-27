import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const removeFireAuthUser = functions.database.ref('/users/{uid}').onDelete(async (snapshot, context) => {
	console.log({ context });
	const userId = context.params.uid;
	return admin.auth().deleteUser(userId);
});

export const addDatabaseUser = functions.auth.user().onCreate((user) => {
	return admin
		.firestore()
		.collection('users')
		.doc(user.uid)
		.set({ ...user, email: user.email });
});
