var myQuestions = [
    {

    },

function changeImageToRandomImage() {
    images = ['İmages/img0.jpg', 'İmages/img01.jpg','İmages/img02.jpg'];

    var random = images[Math.floor(Math.random()*images.length)];
    document.getElementById('alanId').src= random;

},
function nextButton() {
    if(index < iconquiz.length-1 ){
        index++;
    }
},


function prevButton() {
    if(index > 0){
        index--;
    }
},
const getAnswerTag = (prefix, answer, isCorrect) => {
    let onclick;
    if(isCorrect){
        onclick = "alert('Kazandınız'); newQuiz();"
    } else {
        onclick = "alert('Tekrar Deneyin');"
    }

    const html = "<div class ='answer' onclick = \""+onclick+"\">"+prefix+answer+"</div>"
    return html;
}