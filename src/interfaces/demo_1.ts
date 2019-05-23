interface LabelledValue {
  label: string;
  width?: number;
}

function printLabel(labelledObj: LabelledValue) {}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
