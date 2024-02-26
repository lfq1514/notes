type A = 'open' | 'opena';
type B = 'aa';

type C = A|B;

function callJsb<T extends C>(params: T) {
}

type IConfig = {
  [key in B]?: any;
}

let config: IConfig = {
  'aa'(){}
}

function call<T extends B>(params: T ) {
  if(config[params as B]){

  }else{
    callJsb(params, );
  }
}