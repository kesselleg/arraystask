// a) add task to tasklist,   d) sort task as alphabetical. e) display number of incomplete task




 const arr = [];

const array=(item)=>{
   return arr.push(item);
};

const remove=(index)=>{

    return arr.splice(index,1)
}


const markedTask=(mark)=>{
   arr(mark).completed=true
}


array("kesselle");
array("nesselle");
array("aesselle");
array("iesselle");
array("zesselle");
console.log(arr);

remove(1)
console.log(arr)
