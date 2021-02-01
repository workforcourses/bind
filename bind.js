function Bind(func, context, ...args) {

     return function (...arguments) {

          return func.apply(context, args.concat(arguments))

     }
};


function foo(args) {
     console.log(this.a, args)
}

a = 'ooops'

const obj = {
     a: 42,
};
const bar = Bind(foo, obj, 10)

const obj1 = {
     a: 100,
     bar,
};

bar();
obj1.bar();

foo();





