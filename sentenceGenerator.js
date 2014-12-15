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
		
		songTitle: "Shine On You Crazy Diamond",
		songTitleUrl: "https://www.youtube.com/watch?v=8UXircX3VdM",
		songPerformer: "Pink Floyd",
		songPerformerUrl: "https://www.youtube.com/user/OfficialPinkFloyd",
		songNote: "It's just a pure orgasm for the ears!",
		
		artTitle: "The Starry Night Over The Rhone",
		artUrl: "http://upload.wikimedia.org/wikipedia/commons/9/94/Starry_Night_Over_the_Rhone.jpg",
		artistName: "Van Gogh",
		artistUrl: "http://en.wikipedia.org/wiki/Vincent_van_Gogh",
		artNote: "It doesn't get better than this!"
	};

	try{
		var xmlDoc = loadXMLDoc("data.xml");

		var date = new Date().toLocaleString("en-GB");
		var stringTable = date.split(" ");
		var hour = stringTable[1].split(":")[0];
		var dd = stringTable[0].split("/")[0];
		var mm = stringTable[0].split("/")[1];
		var yyyy = stringTable[0].split("/")[2];
		if(hour < 5 && dd > 1){
			dd = dd - 1;
		}
		if(dd<10){
			dd='0'+dd;
		} 
		if(mm<10){
			mm='0'+mm;
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
		data.artUrl = xmlDoc.getElementById(currentId).getElementsByTagName("Art")[0].getElementsByTagName("Url")[0].childNodes[0].nodeValue;
		data.artistName = xmlDoc.getElementById(currentId).getElementsByTagName("Art")[0].getElementsByTagName("Artist")[0].childNodes[0].nodeValue;
		data.artistUrl = xmlDoc.getElementById(currentId).getElementsByTagName("Art")[0].getElementsByTagName("ArtistUrl")[0].childNodes[0].nodeValue;
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
