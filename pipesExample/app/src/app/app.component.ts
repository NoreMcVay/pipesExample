import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  filteredStatus = '';

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date('2015-11-28')
    },
    {
      instanceType: 'large',
      name: 'User Server',
      status: 'stable',
      started: Date.now()
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date('2018-12-15')
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: Date.now()
    }
  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'extra large',
      name: 'Nores Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}
