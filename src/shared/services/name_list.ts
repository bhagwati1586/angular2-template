export class NameList {
  names = ['Bhagwati', 'Jatin', 'Apoorv', 'Rehan'];

  emp = {'employees':[
    {'firstName':'Bhagwati', 'age':'30'},
    {'firstName':'Jatin', 'age':'31'},
    {'firstName':'Apoorv', 'age':'45'}
  ]};

  get(): string[] {
    return this.names;
  }
  add(value: string): void {
    this.names.push(value);
  }
  delete(value: number): void {
    this.names.splice(value,1);
  }

  addEmp(firstName: string, age : string): void {
    this.emp.employees.push({'firstName':firstName, 'age':age});
  }
  deleteEmp(value: number): void {
    this.emp.employees.splice(value,1);
  }
  updateEmp(value: number, firstName: string, age : string): void {

    this.emp.employees[value].firstName = firstName;
    this.emp.employees[value].age = age;
  }

  getEmp() {
    return this.emp.employees;
  }

}
