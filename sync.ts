export class Sync<T> {
    cbs: ((d: T)=>void)[];
    constructor(private data: T) {
        this.cbs = [] as any;
    }
    onChange(cb: ((d: T)=>void)) {
        if (!cb) return; 
        let index = this.cbs.indexOf(cb);
        if (index < 0) this.cbs.push(cb);
    }
    offChange(cb: (d: T)=>void) {
        if (cb) this.cbs = this.cbs.filter(icb=>icb !== cb);
    }
    setValue(obj: T) {
        if (!obj) return;
        let changed = false;
        for(let key in obj) {
            if(this.data[key] !== obj[key]) {
                changed = true;
                this.data[key] =obj[key];
            }
        }
        if (changed) this.notify()
    }
    getValue(key: string) {
        return this.data[key];
    }
    getData() {
        return this.data;
    }
    notify() {
        Promise.resolve().then(()=> this.cbs.forEach(cb => cb && cb(this.data)));
    }
}