import { environment } from '../../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { TestBed, inject } from '@angular/core/testing';

import { AngularFireModule } from 'angularfire2';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
			providers: [AuthenticationService],
			imports: [
				AngularFireModule.initializeApp(environment.firebase),
				AngularFireDatabaseModule,
				AngularFirestoreModule,
				AngularFireAuthModule,
			]
    });
  });

	it('should be created', inject([AuthenticationService, AngularFireAuth, AngularFirestore],
		(service: AuthenticationService, afAuth: AngularFireAuth, afs: AngularFirestore) => {
    expect(service).toBeTruthy();
  }));
});
