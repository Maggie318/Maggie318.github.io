function loadXMLDoc(filename)
{
	if (window.XMLHttpRequest)
	{
		xhttp=new XMLHttpRequest();
	}
	else
	{
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",filename,false);
	xhttp.send();
	return xhttp.responseXML;
}

function getData()
{
	//defaults
	var data = {
		leftHandWords: "I",
		insideCircleWords: "Love",
		rightHandWords: "You",
		bottomSentence:  "My sweet Magdalena",
		
		songTitle: "Shine On Your Crazy Diamond",
		songTitleUrl: "http://google.com",
		songPerformer: "Pink Floyd",
		songPerformerUrl: "http://google.com",
		songNote: "It's just a pure orgasm for the ears!",
		
		artTitle: "The Starry Night Over The Rhone",
		artUrl: "http://google.com",
		artistName: "Van Gogh",
		artistUrl: "http://google.com",
		artNote: "It doesn't get better than this!"
	};

	try{
		var xmlDoc = loadXMLDoc("data.xml");

		var today = new Date();
		var dd = today.getDate() + 1;
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10){
			dd='0'+dd
		} 
		if(mm<10){
			mm='0'+mm
		}

		var currentId = dd + "/" + mm + "/" + yyyy;

		data.leftHandWords = xmlDoc.getElementById(currentId).getElementsByTagName("Text")[0].getElementsByTagName("Left")[0].childNodes[0].nodeValue;
		data.insideCircleWords = xmlDoc.getElementById(currentId).getElementsByTagName("Text")[0].getElementsByTagName("Center")[0].childNodes[0].nodeValue;
		data.rightHandWords = xmlDoc.getElementById(currentId).getElementsByTagName("Text")[0].getElementsByTagName("Right")[0].childNodes[0].nodeValue;
		data.bottomSentence = xmlDoc.getElementById(currentId).getElementsByTagName("Text")[0].getElementsByTagName("Bottom")[0].childNodes[0].nodeValue;

		data.songTitle = xmlDoc.getElementById(currentId).getElementsByTagName("Song")[0].getElementsByTagName("Title")[0].childNodes[0].nodeValue;
		data.songTitleUrl = xmlDoc.getElementById(currentId).getElementsByTagName("Song")[0].getElementsByTagName("Url")[0].childNodes[0].nodeValue;
		data.songPerformer = xmlDoc.getElementById(currentId).getElementsByTagName("Song")[0].getElementsByTagName("Artist")[0].childNodes[0].nodeValue;
		data.songPerformerUrl = xmlDoc.getElementById(currentId).getElementsByTagName("Song")[0].getElementsByTagName("ArtistUrl")[0].childNodes[0].nodeValue;
		data.songNote = xmlDoc.getElementById(currentId).getElementsByTagName("Song")[0].getElementsByTagName("Note")[0].childNodes[0].nodeValue;
		
		data.artTitle = xmlDoc.getElementById(currentId).getElementsByTagName("Art")[0].getElementsByTagName("Title")[0].childNodes[0].nodeValue;
		data.artTitleUrl = xmlDoc.getElementById(currentId).getElementsByTagName("Art")[0].getElementsByTagName("Url")[0].childNodes[0].nodeValue;
		data.artPerformer = xmlDoc.getElementById(currentId).getElementsByTagName("Art")[0].getElementsByTagName("Artist")[0].childNodes[0].nodeValue;
		data.artPerformerUrl = xmlDoc.getElementById(currentId).getElementsByTagName("Art")[0].getElementsByTagName("ArtistUrl")[0].childNodes[0].nodeValue;
		data.artNote = xmlDoc.getElementById(currentId).getElementsByTagName("Art")[0].getElementsByTagName("Note")[0].childNodes[0].nodeValue;
	}
	catch(err)
	{
		data.bottomSentence = "There's been an error sweetie, please inform me.";
	}
	
	return data;
}

function AppViewModel()
{
	this.data = getData();
	
	this.leftHandWords = this.data.leftHandWords;
	this.insideCircleWords = this.data.insideCircleWords;
	this.rightHandWords = this.data.rightHandWords;
	this.bottomSentence = this.data.bottomSentence;
	
	this.songTitle = this.data.songTitle;
	this.songTitleUrl = this.data.songTitleUrl;
	this.songPerformer = this.data.songPerformer;
	this.songPerformerUrl = this.data.songPerformerUrl;
	this.songNote = this.data.songNote;
	
	this.artTitle = this.data.artTitle;
	this.artUrl = this.data.artUrl;
	this.artistName = this.data.artistName;
	this.artistUrl = this.data.artistUrl;
	this.artNote = this.data.artNote;
}

ko.applyBindings(new AppViewModel());