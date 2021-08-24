  let count = 0
  let words = []
$('#form-submit').on('click',async function(evt){
  evt.preventDefault();
  let guess = $('#form-guess').val()
  
 const response = await axios.get('/check-word',{params: {"guess":guess}})
  console.log(response)
 if (response.data.results === 'ok'){
  
    
    
    if(words.indexOf(guess) === -1){
      words.push(guess)
      count += guess.length
      $('#results').text('SCORE')
      console.log(words)
    }
    else{
      $('#results').text('POINTS ALREADY GIVEN')
    }
       
 }
 if(response.data.results=== 'not-word'){
  $('#results').text("THATS NOT A WORD")
 }
 if(response.data.results === 'not-on-board'){
  $('#results').text("NOT ON BOARD")
 }
  $('#score').text(`${count}`)
  // Theres got to be a better way to set a timer. I created a timer by deleting the form after 60secs
  setTimeout(() => {
    alert(`GAMEOVER! Your Score was : ${count}`)
    $('#form-data').remove()
    window.location.reload()
  }, 60000);
})

