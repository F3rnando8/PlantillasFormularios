import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-template',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {
  
  usuario = { nombre : 'Fernando', apellido: 'Lopez',
    correo: 'FernandoLopez@gmail.com', pais: 'BOLIVIA', genero: 'M'
    
}
  
  paises: any[] = [];
pais: any;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    console.log('Impresion');
    this.paisService.getPaises()
      .subscribe(paises => {
        this.paises = paises;
        console.log('Impresion');
        console.log(this.paises);
      });
  }

  guardar(forma: NgForm) {
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched(); 
      });
    }

    console.log(forma.value);
  }

}

