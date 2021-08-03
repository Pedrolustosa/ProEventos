import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/Evento';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventosFiltrados: Evento[] = [];
  public eventos: any = [];
  private filtroListado = '';
  showImage = true;
  widthImage = 12;
  marginImage = .8;

  public get filtroLista(): string {
    return this.filtroListado;
  }

  public set filtroLista(value: string) {
    this.filtroListado = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
  }

  StatusImage(): void {
    this.showImage = !this.showImage;
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
    error => console.log(error)
    );
  }
}
