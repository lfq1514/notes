var number = 5;
var obj = {
    number: 3,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        };
    })(),
};

var fn1 = obj.fn1;

fn1.call(null);

obj.fn1();
console.log(window.number);

var scope = "global scope";

//

var name = "World";
(function () {
    if (typeof name === "undefined") {
        var name = "HuaMu";
        console.info("Goodbye " + name);
    } else {
        console.info("Hello " + name);
    }
})();
