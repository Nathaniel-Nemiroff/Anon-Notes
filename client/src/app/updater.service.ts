import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UpdaterService {

  constructor() { }

	observedNotes = new BehaviorSubject(null);
	updateNotes(notes){
		this.observedNotes.next(notes);
	}

}
