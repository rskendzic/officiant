import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const removeFireAuthUser = functions.database.ref('/users/{uid}').onDelete(async (snapshot, context) => {
	const userId = context.params.uid;
	console.log({ userId });
});

export const addDatabaseUser = functions.auth.user().onCreate((user) => {
	return admin
		.firestore()
		.collection('users')
		.doc(user.uid)
		.set({ ...user, email: user.email });
});
