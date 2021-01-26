$(document).ready(function () {


function renderNotes (){
    var hourBlock = $("div.hour");
    var storedNote = JSON.parse(localStorage.getItem('note'));
    var existingNote = storedNote.find(({time}) => time === hourBlock);
    
    if(existingNote) {
        console.log("Yes");        
    }

}






   $(".saveBtn").on("click", function () {
       //save textContent from text area to localstorage here
       var $curr = $("saveBtn");

        // console.log($(this).prev().val()); 

        textArea = $(this).prev().val();

        timeHour = $(this).prevAll().text();
        
        storeResult();
        // console.log(textArea);
        console.log(timeHour + " : " + textArea);
        // var savedNote = JSON.parse(localStorage.getItem('note')) || [];
        // appendToStorage(savedNote, textArea)

   })

       
      
 // function to store text of note and related hour 
 // allows for notes to be edited and saved over existing note.  does not replicate
    
   function storeResult(){

   const oldNote = JSON.parse(localStorage.getItem('note')) || [];
   const hourToUse = timeHour;
   const existingItem = oldNote.find(({time}) => time === hourToUse);
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








//    function storeResult(){

//     var savedNote = JSON.parse(localStorage.getItem('note')) || [];
//     localStorage.setItem('note', JSON.stringify(savedNote));
//     savedNote = 
//    // function storeResult(){
        




//         // localStorage.setItem("note", JSON.stringify(oldItems));

//         // var newItem = {
//         //      time: timeHour,
//         //      text: textArea
//         //  };
//         // var oldItems = JSON.parse(localStorage.getItem("note")) || [];

           

//         // oldItems.push(newItem);

//         // localStorage.setItem("note", JSON.stringify(oldItems));
//         // }


// var yesArray = [];
// localStorage.setItem('yesArray', JSON.stringify(yesArray));
// yesArray = JSON.parse(localStorage.getItem('yesArray'));
// yesArray.push('yes');
// localStorage.setItem('yesArray', JSON.stringify(yesArray));
// JSON.parse(localStorage.getItem('yesArray')); // Returns ["yes"]


//    function storeResult(){
             
//     var savedNote = JSON.parse(localStorage.getItem('note')) || [];
//                 savedNote.push({
//                 time: timeHour,
//                 text: textArea
//             });

//             savedNote.
//     localStorage.setItem('note', JSON.stringify(savedNote));
//    }

  function appendToStorage(note, data) {
      var old = localStorage.getItem(note.time);
      if (old === null) old = "";
      localStorage.setItem(note, old + data);
  }

//   appendToStorage('oldData', $i("textbox").value);

   function postNotes () {




   }

});
