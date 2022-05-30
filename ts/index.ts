// type Clothes<source, types> = {
//     [K in keyof source]: source[K] extends types ? source[K] : never;
// }[keyof source];

type _returnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer P
    ? P
    : any;

type _Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type _Parameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any
    ? P
    : never;

type _Partial<T> = {
    [K in keyof T]?: T[K];
};

type _Required<T> = {
    [K in keyof T]-?: T[K];
};

type _ReadOnly<T> = {
    readonly [K in keyof T]?: T[K];
};

type _Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface interTest {
    test: string;
    name: string;
    value: number;
}

type k = keyof interTest;

let a: "test" | "name" | "value" = "value";

interface Inter1 {
    name: string;
    age: number;
}

interface Inter2 extends Inter1 {
    test: number;
}

type deepReadOnly<T>={
    readonly[P in keyof T]:
    T[P] extends object?
        keyof T[P] extends never?
        T[P]
        :
        deepReadOnly<T[P]>
    :
    T[P]
}




