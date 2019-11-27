var names = [["Ali","Ahmed","Shan","Zia","Sana","Khan"],["Ali","Ahmed","Shan","Zia","Sana","Khan"],["Ali","Ahmed","Shan","Zia","Sana","Khan"],["Ali","Ahmed","Shan","Zia","Sana","Khan"]];
var oldName = prompt("Enter change name")
var newName = prompt("Enter new name")

function changeName (oldName, newName){
    for(var i=0; i<names.length; i++){
        for(var j=0; j<names[i].length; j++){
            if(names[i][j] == oldName){
                names[i][j] = newName
            }
        }
    }
    return names;
}

console.log(changeName(oldName, newName))