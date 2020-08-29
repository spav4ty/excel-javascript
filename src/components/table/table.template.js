const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
    <div class="cell" contenteditable></div>
    `
}

function createCol(coll) {
    return `
    <div class="column">
        ${coll}
    </div>
    `
}

function createRow(index,content) {
    index = index ? index : ''
    return `
    <div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">${content}</div>
    </div>
    `
}

export function createTable(rowsCount = 15) {
const colsCount = CODES.Z - CODES.A + 1
const rows = []

const cols = new Array(colsCount).fill('')
.map((el,index) => {return String.fromCharCode(CODES.A + index)})
.map(el => {return createCol(el)}).join('')
//console.log(cols)


rows.push(createRow(null, cols))

for(let i = 0; i < rowsCount; i++) {
    const cells = Array(colsCount).fill('').map(toCell).join('')
    
    rows.push(createRow(i + 1, cells))
}
    return rows.join('')
 
}
      
//     
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>
//       <div class="column">
//         A
//       </div>
//       <div class="column">
//         B
//       </div>
//       <div class="column">
//         C
//       </div>

//     </div>

//   </div>

//   <div class="row">
//     <div class="row-info">
//       1
//     </div>

//     <div class="row-data">
//       <div class="cell selected" contenteditable="">A1</div>
//       <div class="cell" contenteditable="">B2</div>
//       <div class="cell" contenteditable="">C3</div>
//     </div>
//   </div>

//   <div class="row">
//     <div class="row-info">
//       2
//     </div>

//     <div class="row-data">
//       <div class="cell">A1</div>
//       <div class="cell">B2</div>
//       <div class="cell">C3</div>
//     </div>
//   </div>
