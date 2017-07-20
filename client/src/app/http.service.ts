import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http:Http) { }

	create(newnote){
		return this._http.post('/create', newnote)
		.map(data=>data.json())
		.toPromise();
	}
	readAll(){
		return this._http.get('/readall')
		.map(data=>data.json())
		.toPromise();
	}

}
