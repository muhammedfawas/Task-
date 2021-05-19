import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  url="https://api.imgflip.com/get_memes";
  data:any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(result=>{
      this.data=result;
  console.log(result);
  console.log(this.data.data.memes)

    })
  }

}
