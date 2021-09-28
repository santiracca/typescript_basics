abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

class ITDepartment extends Department {
  private lastReport: string;
  private static instance: ITDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  static getInstance() {
    if (ITDepartment.instance) {
      return this.instance;
    }
    this.instance = new ITDepartment("d2", ["Santi"], []);
    return this.instance;
  }

  private constructor(
    id: string,
    public admins: string[],
    private reports: string[]
  ) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Santi") {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const it = ITDepartment.getInstance();
it.addEmployee("Santi");
it.addEmployee("Lara");
it.printEmployeeInformation();
