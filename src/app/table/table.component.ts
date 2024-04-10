import { Component } from '@angular/core';
//import { Table } from 'primeng/table';
//import { Customer, Representative } from '../../domain/customer';
//import { CustomerService } from '../../service/customerservice';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'] // Assurez-vous que le nom de la propriété est 'styleUrls'
})

export class TableComponent {
  //customers!: Customer[];

  //representatives!: Representative[];

  //statuses!: any[];

  //loading: boolean = true;

  //activityValues: number[] = [0, 100];

 // constructor()/*private customerService: CustomerService)*/ {}

  /*ngOnInit() {
      this.customerService.getCustomersLarge().then((customers) => {
          this.customers = customers;
          this.loading = false;

          this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
      });*/

    /*this.representatives = [
      { code: '001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: '002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: '003', name: 'Product 3', category: 'Category 3', quantity: 20 },
      { code: '004', name: 'Product 4', category: 'Category 4', quantity: 20 },
      { code: '005', name: 'Product 5', category: 'Category 5', quantity: 20 },
      { code: '006', name: 'Product 6', category: 'Category 6', quantity: 20 },
      { code: '007', name: 'Product 7', category: 'Category 7', quantity: 20 },
      { code: '008', name: 'Product 8', category: 'Category 8', quantity: 20 },
      { code: '009', name: 'Product 9', category: 'Category 9', quantity: 20 },
      { code: '010', name: 'Product 10', category: 'Category 10', quantity: 20 },
      { code: '011', name: 'Product 11', category: 'Category 11', quantity: 20 },
      { code: '012', name: 'Product 12', category: 'Category 12', quantity: 20 },
      { code: '013', name: 'Product 13', category: 'Category 13', quantity: 20 },
      { code: '014', name: 'Product 14', category: 'Category 14', quantity: 20 },
      { code: '015', name: 'Product 15', category: 'Category 15', quantity: 20 },
      { code: '016', name: 'Product 16', category: 'Category 16', quantity: 20 },
      { code: '017', name: 'Product 17', category: 'Category 17', quantity: 20 },
      { code: '018', name: 'Product 18', category: 'Category 18', quantity: 20 },
      { code: '019', name: 'Product 19', category: 'Category 19', quantity: 20 },
      { code: '020', name: 'Product 20', category: 'Category 20', quantity: 20 },
      { code: '021', name: 'Product 21', category: 'Category 21', quantity: 20 },
      { code: '022', name: 'Product 22', category: 'Category 22', quantity: 20 },
      { code: '023', name: 'Product 23', category: 'Category 23', quantity: 20 },
      { code: '024', name: 'Product 24', category: 'Category 24', quantity: 20 },
      { code: '025', name: 'Product 25', category: 'Category 25', quantity: 20 },
      { code: '026', name: 'Product 26', category: 'Category 26', quantity: 20 },
      { code: '027', name: 'Product 27', category: 'Category 27', quantity: 20 },
      { code: '028', name: 'Product 28', category: 'Category 28', quantity: 20 },
      { code: '029', name: 'Product 29', category: 'Category 29', quantity: 20 },
      { code: '030', name: 'Product 30', category: 'Category 30', quantity: 20 },
      { code: '031', name: 'Product 31', category: 'Category 31', quantity: 20 },
    ];*/

    /*this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];*/
  }

  /*clear(table: Table) {
    table.clear();
  }*/

  /*getSeverity(status: string) {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
  }*/
//}