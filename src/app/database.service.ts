import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public users: any = [
    {
      userid: '01',
      email: 'example@gmail.com',
      password: 'exampleg123',
    },
    {
      userid: '02',
      email: 'example@yahoo.com',
      password: 'example234',
    },
    {
      userid: '03',
      email: 'example@edu.com',
      password: 'example345',
    },
  ];
  constructor() {}
}
