
function autoSave() {
    save();
    setTimeout(autoSave, 60000);
}

var isSaving = false;

function save() {
	isSaving = true;
    var saveString = JSON.stringify(game);
    var saveGame = JSON.parse(saveString);
	isSaving = false;
  //delete anything from game that doesnt need to be saved to save space
  
  
  //compress whats left to save more space
  saveString = LZString.compressToBase64(JSON.stringify(saveGame));
  
  	try
    {
		  localStorage.setItem("WOTN",saveString);
		  if (localStorage.getItem("WOTN") == saveString)
      {
			//Game Saved
		  }
		  else 
      {
			//bad save attempt
		  }
	 }
	catch(e)
  {
		if(e.name == "NS_ERROR_FILE_CORRUPTED") 
    {
        //need to clear browser cache
		}
		else
		//not saving for some other reason
  }
} //end save
  
  function load()
  {
    var savedata;
    try 
    {
      
      var loadsave = localStorage.getItem("WOTN");
    }
    catch(e) {}
    
    if (loadsave !== null) savedata = JSON.parse(LZString.decompressFromBase64(loadsave));
    
    //update game with loaded values
  }
  
  
  var game = 
    {
    cookies: 3,
    cursors: 7,
    prestige: 5
    }
