import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { UpdaterService }from '../updater.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	newnote = ''

  constructor(private _http:HttpService,
							private _update:UpdaterService) { }

  ngOnInit() {
  }

	newNote(e){
		console.log({note:this.newnote})
		this._http.create({note:this.newnote})
		.then(data=>{console.log('success')})
		.catch(err=>{console.log(err)})
		this.newnote=''

		this._http.readAll()
		.then(data=>{this._update.updateNotes(data)})
		.catch(err=>{console.log(err)})
	}

}
