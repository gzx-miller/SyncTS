import { Sync } from "./sync";

export class Photo {
    constructor(
        public name?: string,
        public url?: string,
        public path?: string
    ) {}
}

export class SyncPhoto extends Sync<Photo> {
}
let s1 = new SyncPhoto({name : "p1", url: "", path: ""});

const sData = s1.getData();
s1.setValue({name: "p2"});

s1.onChange(onDataChange);

function onDataChange(data: Photo) {
}

// s1.offChange(onDataChange);

let name = s1.getValue("name");

 
