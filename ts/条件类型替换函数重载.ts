interface IdLabel { id: number }
interface NameLabel { name: string }

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    if (typeof idOrName === 'string') {
        const nameLabel = {name: '111'};
        return nameLabel as  NameOrId<T>;
    }
    const idLabel = {id: 111};
    return idLabel as  NameOrId<T>;
  }

let a = createLabel("typescript");

// let a: NameLabel

let b = createLabel(2.8);
// let b: IdLabel

let c = createLabel(Math.random() ? "hello" : 42);
// let c: NameLabel | IdLabel