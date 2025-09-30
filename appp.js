const sentence = "The red cat sat on the mat. Why are you so sad cat? Don't ask that."
function lang(sentence) {
    let t = 0;
    let s = 0;
    for (let i = 0; i < sentence.length; i++){
        if (sentence[i] === "S" || sentence [i] === "s") {
            s++
        } else if (sentence[i] === "T" || sentence [i] === "t") {
            t++
        }
    }
    if (t>s){
    console.log ("english");
    } else {
        console.log ("Parle Vu Francaise")
    }
}
lang (sentence)