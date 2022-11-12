import { Component, OnInit } from '@angular/core';
import { aluno } from '../aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
aluno: aluno = {

  RA:1,
  nome:'pedrinho',
  curso:'analise e desenvolvimento de sistemas',
  email:'coelhopedro203204@gmail.com'
  
};
  constructor() { }

  ngOnInit(): void {
  }

}
