import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title:string = 'ShopOnlineapp';
  img_link:string = 'https://i.stack.imgur.com/nD8rl.png';
  content: string = '<b>Hello</b> Chào mừng bạn đến với Angular 16';
  isActive: boolean = true;
  errorCode: number = 403; // 404 | 403 | 405

  students: Array<any> = [
    {name:'Đào Anh Tú', age: 32, img:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'},
    {name:'Lê Thị Ngọc Tiền', age: 32, img:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'},
    {name:'Nguyễn Văn A', age: 32, img:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'},
    {name:'Nguyễn Văn B', age: 32, img:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'},
    {name:'Nguyễn Văn C', age: 32, img:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'},
    {name:'Nguyễn Văn D', age: 32, img:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'}
  ]

  products: Array<any> = [
    {name:'Áo sơ mi', price: 500000},
    {name:'Áo sơ mi', price: 500000},
    {name:'Áo sơ mi', price: 500000},
    {name:'Áo sơ mi', price: 500000},
    {name:'Áo sơ mi', price: 500000},
    {name:'Áo sơ mi', price: 500000}
  ]

  sayHello(){
    this.isActive = !this.isActive
  }
}
