$(document).ready(function () {





now = moment().format('dddd, MMMM Do');
$("#currentDay").append().text(now)



    function renderNotes() {
        var hourBlock = $(".hour");
        var storedNote = JSON.parse(localStorage.getItem('note'));

         const oldNote1 = JSON.parse(localStorage.getItem('note')) || [];
        // console.log(hourBlock)

        hourBlock.each(function () {
            hour1 = $(this).text();
           
            const existingItem1 = oldNote1.find(({time}) => time === hour1);
            
            if (existingItem1) {
                                
                loadText = existingItem1.text;
             
                $(this).next().text(loadText)
                // console.log($(this).next())
                // loadText= hourBox;
            }
            console.log("#########")
        
        })
    }

setCurrentTimeColor()   
function setCurrentTimeColor(){

    var hourBlock = $(".hour");
    now = moment().format('hA');
    console.log(now)
     hourBlock.each(function () {
            hour1 = $(this).text();
            console.log(hour1)
                 
                 if(moment(hour1,'hA').isAfter(moment())){
                    $(this).next().addClass("future")
                 }
                 if (moment(hour1, 'hA').isBefore(moment())) {
                    $(this).next().addClass("past")
                 }
                 if (hour1 === now) {
                     $(this).next().removeClass("past")
                     $(this).next().addClass("present")
                 }
                  // if (moment(hour1, 'hA') = moment('hA')) {
                  //      $(this).next().addClass("present")
                  //  }
})

}


    now = moment().format('hA');

    console.log(moment('1PM', 'hA').isValid());
    console.log(moment('1PM', 'hA').isBefore(moment()));

    $(".saveBtn").on("click", function (event) {
        //save textContent from text area to localstorage here
        event.preventDefault();

        timeHour = $(this).prev().prev().text();
        textArea = $(this).prev().val();
        
        
        storeResult();
        // console.log(textArea);
        console.log(timeHour + " : " + textArea);
        // var savedNote = JSON.parse(localStorage.getItem('note')) || [];
        // appendToStorage(savedNote, textArea)

    })

 renderNotes();

    // function to store text of note and related hour 
    // allows for notes to be edited and saved over existing note.  does not replicate

    function storeResult() {

        const oldNote = JSON.parse(localStorage.getItem('note')) || [];
        const hourToUse = timeHour;
        const existingItem = oldNote.find(({
            time
        }) => time === hourToUse);
        if (existingItem) {
            Object.assign(existingItem, {
                'time': timeHour,
                'text': textArea
            })
        } else {
            const newNote = {
                'time': hourToUse,
                'text': textArea

            };
            oldNote.push(newNote);
        }

        localStorage.setItem('note', JSON.stringify(oldNote));

    }

});