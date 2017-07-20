import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UpdaterService } from '../updater.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	list=[{_id:0,note:'hello world!'}, {_id:1, note:'A note...'}, {_id:2, note:'See and believe!'}]
	sub: Subscription;
	List = []

  constructor(private _http:HttpService,
							private _update:UpdaterService) {
		this.sub = _update.observedNotes.subscribe(
			(updatednotes) => {this.List = updatednotes;},
			(err)=>{},()=>{})
	}
	onDestroy(){this.sub.unsubscribe();}
	
	getNotes(){
		
	}
	fetchList(){
		this._http.readAll()
		.then(data=>{this.List=data})
		.catch(err=>{console.log(err)})
	}

	updateNotes(){
		this._update.updateNotes(this.List);	
	}

  ngOnInit() {
		this.fetchList();
  }

}
