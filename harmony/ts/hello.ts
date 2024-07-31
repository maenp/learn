type a = number;
type b = string;
type fun = (a: a, b: b) => void;

const hello: fun = (a, b) => {
  console.log(a, b);
};

hello(1, 'hello');
console.log('hello world');



