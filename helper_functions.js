
//var jsPsych = initJsPsych();
// creates a random audio id based on the username + date + random number
// pushes the audio data to server then overwrites audio data from the jsPsych data file
function purgeAudio(subject, item, data){
    // create a random id for the specific audio file.
    audio_id = subject.concat('_').concat(item).concat('_').concat(Date.now().toString())
       console.log(audio_id);
       // call the php script
       $.ajax ({
            url: "save_audio.php",
            type: "POST",
            data: {audio_base64: data.response, identifier: audio_id, sub: subject},
            dataType: 'text'});
      // replace the base64 in the jsP data with the audio_id
     data.response = audio_id;
 }


// saves all jsPsych data to server at end of test
function saveData(name, data){
    $.ajax({
        url: 'write_data.php',
        type: 'POST',
        data: {full_data: data, subject: name},
        dataType: 'text'})
    }

// saves subsets of data marked by different filenames. 
function saveTrialData(name, data, folder){
    $.ajax({
        url: 'write_trials.php',
        type: 'POST',
        data: {full_data: data, subject: name, subject_folder: folder},
        dataType: 'text'})}
  
// var dct_image_paths = []

// for(var i = 1;  i <= 6; i++){
//   for(var ii = 1; i <= 9; i++ ){
//     dct_image_paths.push('image/DCT/dct_'.concat(i).concat('_').concat(ii).concat('.png'))
//   }
// };



