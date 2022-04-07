Function.prototype.apply = function (context, ...args) {
    // context = context | window;

    let ctx = Object(context);

    ctx.fn = this;

    const res = ctx.fn();

    delete ctx.fn;

    return res;
};

Function.prototype.call = function (context, ...data) {
    // context = context | window;
    context = Object(context);

    context.fn = this;

    const res = context.fn(...data);

    delete context.fn;
    return res;
};

Function.prototype.bind = function (context, ...args) {
    // context = context | window;
    context = Object(context);

    return (...arg2) => {
        context.fn = this;

        const res = context.fn(...args, ...arg2);

        delete context.fn;

        return res;
    };
};
