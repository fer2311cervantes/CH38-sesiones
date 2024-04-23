const pri = (word,index) => {
    let answer = [];
    let arry = word.split("");
    for(let i = 0 ; i <= index ; i++){
        answer.push(arry[i]);
    }
    return answer.join("");
};

//console.log(pri("hola mundo",5),5);
//console.log(` iguales frase: "${ pri(sentence,i + j)}" ${(i+j)} palabra: "${pri(word,j)}" ${j} cuenta: ${count}`);

/*
*  Buscar una palabra dentro de una frase, 
*  mostrar en consola: "Palabra encontrada" o "Palabra no encontra"
*  
*  ej. Frase: "Pepe Pecas Pica Papas"
*      Palabra: "pecas"
*      Respuesta: "Palabra encontrada"
*      
*  ej. Frase: "Pepe Pecas Pica Papas"
*      Palabra: "mimir"
*      Respuesta: "Palabra no encontrada"  
*/
const search = (sentence , word) => {
    let count = 0;
    const mySentence = sentence.toLowerCase();
    const myWord = word.toLowerCase();
    for(let i = 0; i <= mySentence.length - myWord.length ; i++){
        count = 0;
        for(let j = 0; j < myWord.length ; j++){
            if(myWord[j] === mySentence[i + j] ){ //(mySentence[i + j] ? mySentence[i + j] : " ")
                count++;
            }else break;
        } 
        if(count === word.length) break;  
    }
    return (count === word.length);
}
let word = "papas";
let sentence = "Pepe Pecas Pica Papas";

//console.log(sentence);
//console.log(search(sentence , word) ? "se encontro la palabra: " : "no se encontro la palabra: ");
//console.log(word);
