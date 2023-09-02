function changeWord(selectedText, changeText, text){
    text = text.split(" ");
    if (text.includes(selectedText)){
        let selectedIndex = text.indexOf(selectedText);
        text[selectedIndex] = changeText;
        return text.join(" ");
    } else{
        return "Kata tidak ditemukan";
    }
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"

console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));