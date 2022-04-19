import { Component } from '@angular/core';
import { ApiOctaveServiceService } from './service/api-octave-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OctaveAngularMangOh';
  Name :String;
  NumeroSerie :String ;
  temperature :String ;
  pression :String ;
  humidity :String ;
  battryPercent :String ;
  battryValue : String ;

  constructor(private DataService: ApiOctaveServiceService) {
    this.DataService.getData().subscribe(data=>{
      //this.temperature =data['body']["summary"]['/environment/value']['s']["temperature"]
      //this.pression =data['body']["summary"]['/environment/value']['s']["pressure"]
      //this.humidity =data['body']["summary"]['/environment/value']['s']["humidity"]
      //console.log(data['body']["summary"]['/environment/value']['s']) 
    })
  }
  ngOnInit(): void {
    this.DataService.getData().subscribe(data=>{
      this.Name=data['body']["name"]
      console.log(data["body"]["name"])
      this.NumeroSerie=data['body']['hardware']["fsn"]
      this.temperature =JSON.parse(data['body']["summary"]['/environment/value']['s'])["temperature"]
      this.pression =JSON.parse(data['body']["summary"]['/environment/value']['s'])['pressure']
      this.humidity =JSON.parse(data['body']["summary"]['/environment/value']['s'])["humidity"]
      this.battryValue=JSON.parse(data['body']["summary"]["/battery/value"]['s'])['V']
      this.battryPercent=JSON.parse(data['body']["summary"]["/battery/value"]['s'])['percent']
      console.log(JSON.parse(data['body']["summary"]['/environment/value']['s'])) 
      //console.log(this.pression)
    })
  }
}
