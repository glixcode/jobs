
const data = [
    {id: 1,  value: 10  },
    {id: 2,  value: 1   },
    {id: 4,  value: 5   },
    {id: 7,  value: 2   },
    {id: 8,  value: 4   },
    {id: 9,  value: 11  },
    {id: 10, value: 100 },
    {id: 1,  value: 10  },
    {id: 2,  value: 1   },
    {id: 4,  value: 5   },
    {id: 7,  value: 2   },
    {id: 8,  value: 4   },
    {id: 9,  value: 11  },
    {id: 10, value: 100 },
]

data.length < 1 && process.exit(1);

let sequence = Array();
let currentData = {start: data[0].id,end:0,value:data[0].value};
let push = false

data.forEach((val,index) => {
    push = false
    if(index > 0){
        if(data[index -1].id == val.id -1){
            currentData.value += val.value;
            currentData.end = val.id
        }else
            push = true
    }
    if(data.length -1 == index || push){
        sequence.push(currentData)
        currentData = {start: val.id,end:val.id,value:val.value};
    }
})

// const engineStart = (data) => {
//     let index = 0;
//     if(data){
//         const currentId =  data[index].value > 0 ? data.id : null;
//         let previousVal = data[index -1];

//         if(currentId != null && currentId == previousVal
//         )
//     }
// }

console.log(sequence)
