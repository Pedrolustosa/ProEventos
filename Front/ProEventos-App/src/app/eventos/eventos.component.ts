import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  private FilterList = '';
  public eventos: any = [];
  filteredEvents: any = [];
  showImage = true;
  widthImage = 12;
  marginImage = .8;

  public get filterList(): string{
    return this.FilterList;
  }

  public set filterList(value: string){
    this.FilterList = value;
    this.filteredEvents = this.filterList ? this.filterEvents(this.filterList) : this.eventos;
  }

  filterEvents(filterFor: string): any{
    filterFor = filterFor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filterFor) !== -1
    );
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  StatusImage(): void {
    this.showImage = !this.showImage;
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => {
        this.eventos = response;
        this.filteredEvents = this.eventos;
      },
      error => console.log(error)
    );
  }
}
