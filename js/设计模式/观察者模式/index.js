//被观察者
class Subject {
    constructor(name, height) {
        this.observes = []
        this.state = "我今天很开心"
        this.name = name
        this.height = height
    }
    //接收所有的观察者（订阅）
    attach(ob) {
        this.observes.push(ob)
    }
    //自身状态更改，通知观察者（发布）
    setState(newHeight) {
        this.observes.forEach((o) => { o.update(this.height, newHeight) })
    }
}
//观察者
class Observe {
    //被观察者状态更新时，触发
    update(age, newAge) {
        if (newAge > age) {
            console.log('我家孩子长高了')
        } else {
            console.log('我家孩子怎么变矮了')
        }
    }
}
let baby = new Subject('baby', 155)
let ob1 = new Observe()
let ob2 = new Observe()
baby.attach(ob1)
baby.attach(ob2)

baby.setState(154)