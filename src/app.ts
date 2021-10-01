function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText == `Got ${element.length} elements.`;
  }

  return [element, descriptionText];
}

console.log(countAndPrint("Hi there"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item, 1));
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Santi");
textStorage.removeItem("Santi");

const objStorage = new DataStorage<object>();

objStorage.addItem({ name: "Santi" });
objStorage.removeItem({ name: "Santi" });
