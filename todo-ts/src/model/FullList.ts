import ListItem from "./ListItem";


interface List {
    list : ListItem[],
    load():void,
    save():void,
    clearList():void,
    addItem(itemObj:ListItem):void,
    removeItem(id: string) : void
}


export default class FullList implements List {

    static instance : FullList = new FullList()
    constructor(private _list :ListItem[]= []){

    }

    get list():ListItem[] {
        return this._list;
    }

    save():void{
        localStorage.setItem('myList', JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = [ ]
        this.save()
    }


    addItem(itemObj : ListItem): void{
        this._list.push(itemObj)
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter(el=>el.id !== id)
        this.save()
    }

    load():void {
        const storedList : string | null = localStorage.getItem('myList');

        if(typeof storedList!== 'string') return;

        const parsedList:{_id : string ,_checked : boolean ,item:string}[] = JSON.parse(storedList);

        parsedList.forEach(el=>
            {
                const newListItem= new ListItem(el._id, el.item, el._checked);
                FullList.instance.addItem(newListItem)
            })
    }

}