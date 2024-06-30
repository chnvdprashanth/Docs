export const getDataFromLocalStorage = ()=>{
    const notes = []
    for(let i=0;i<localStorage.length;i++){
        const key = localStorage.key(i)
        const value = JSON.parse(localStorage.getItem(key))
        notes.push(value)
    }

    return notes;
}