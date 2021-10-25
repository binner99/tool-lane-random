import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: `./hello.component.html`,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  icon: string =
    'data:image/png;base64,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';
  listMatch: any = [];
  team1: any = [
    { id: '1-1', name: '' },
    { id: '1-2', name: '' },
    { id: '1-3', name: '' },
    { id: '1-4', name: '' },
    { id: '1-5', name: '' }
  ];
  team2: any = [
    { id: '2-1', name: '' },
    { id: '2-2', name: '' },
    { id: '2-3', name: '' },
    { id: '2-4', name: '' },
    { id: '2-5', name: '' }
  ];
  onClickAdd(num: number, count?: number) {
    if (!count) this.genRandom();
    else {
      for (let index = 0; index < 5; index++) {
        this.genRandom();
      }
    }
  }

  onClickDelete(id?: any) {
    console.log(id);
    if (id == null) this.listMatch = [];
    else {
      this.listMatch = this.listMatch.filter(x => x.id !== id);
    }
  }
  genRandom() {
    let result = {
      id: this.listMatch.length,
      name: 'Trận ' + (this.listMatch.length + 1),
      team01: {
        name: 'Team 1',
        listChar: [
          { name: this.team1[0].name, no: null, lo: '', id: this.team1[0].id },
          { name: this.team1[1].name, no: null, lo: '', id: this.team1[1].id },
          { name: this.team1[2].name, no: null, lo: '', id: this.team1[2].id },
          { name: this.team1[3].name, no: null, lo: '', id: this.team1[3].id },
          { name: this.team1[4].name, no: null, lo: '', id: this.team1[4].id }
        ]
      },
      team02: {
        name: 'Team 2',
        listChar: [
          { name: this.team2[0].name, no: null, lo: '', id: this.team2[0].id },
          { name: this.team2[1].name, no: null, lo: '', id: this.team2[1].id },
          { name: this.team2[2].name, no: null, lo: '', id: this.team2[2].id },
          { name: this.team2[3].name, no: null, lo: '', id: this.team2[3].id },
          { name: this.team2[4].name, no: null, lo: '', id: this.team2[4].id }
        ]
      }
    };
    for (let index = 0; index < 5; index++) {
      let newNum1 = Math.floor(Math.random() * 5);
      let newNum2 = Math.floor(Math.random() * 5);
      while (result.team01.listChar.find(x => x.no === newNum1)) {
        newNum1 = Math.floor(Math.random() * 5);
      }
      while (result.team02.listChar.find(x => x.no === newNum2)) {
        newNum2 = Math.floor(Math.random() * 5);
      }
      result.team01.listChar[index].no = newNum1;
      result.team02.listChar[index].no = newNum2;
    }
    result.team01.listChar.sort((a, b) => a.no - b.no);
    result.team02.listChar.sort((a, b) => a.no - b.no);
    this.listMatch.push(result);
    console.log(result);
  }
}
