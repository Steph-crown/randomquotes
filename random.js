window.addEventListener("load",start, false);

function start(){
	//Initializes the quotes, authors, and colors arrays
	var quotes = [
					'Be yourself, everyone else is already taken.',
					'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
					'So many books, so little time.',
					"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
					'A room without books is like a body without a soul.',
					"You have gotta dance like there's nobody watching,<br>Love like you'll never be hurt,<br>Sing like there's nobody listening,<br>And live like it's heaven on earth.",
					'You know you are in love when you cannot fall asleep because reality is finally better than your dreams.',
					'You only live once, but if you do it right, once is enough.',
					'Be the change that you wish to see in the world.' ,
					"In three words I can sum up everything I've learned about life: it goes on.",
					"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
					"Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
					"No one can make you feel inferior without your consent." ,
					"Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .",
					"If you tell the truth, you do not have to remember anything.",
					"I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
					'A friend is someone who knows all about you and still loves you.',
					'Always forgive your enemies; nothing annoys them so much.',
					'To live is the rarest thing in the world. Most people exist, that is all.',
					'Live as if you were to die tomorrow. Learn as if you were to live forever.' ,
					'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
					'I am so clever that sometimes I do not understand a single word of what I am saying.',
					'Without music, life would be a mistake.',
					'We accept the love we think we deserve.' ,
					'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
				]
	
	
	var authors = ["Oscar Wilde", "Albert Einstein", "Frank Zappa", "Bernard M. Baruch", "Marcus Tullius Cicero",
					"William W. Purkey", "Dr. Seuss", "Mae West", "Mahatma Gandhi", "Robert Frost", "J.K. Rowling", "Albert Camus",
					"Eleanor Roosevelt", "C.S. Lewis", "Mark Twain", "Maya Angelou", "Elbert Hubbard", "Oscar Wilde", "Oscar Wilde",
					"Mahatma Gandhi", "Martin Luther King Jr", "Oscar Wilde", "Friedrich Nietzsche", "Stephen Chbosky", "Ralph Waldo Emerson"
				]
				
	var background = ["#0e0e0c", "#ff5500", "#eb996e", "black", "yellow", "#452542", "#d03d30", "#f49469", "#5db04c"]
	var text = ["#f71d15", "0e0e0c", "#352748", "yellow", "black", "#2fac85", "white", "#1c0e36", "white"]
	
	//Starts the animation every 30000milliseconds(30seconds)
	setInterval(change, 30000, quotes, authors, background, text);
	
	}


function change(quotes,authors, back, text)
{
	/*
	Animation function that changes the quotes displayed on the screen
	*/
	
	//New Quote HTML text
	var current = "<section class='containerCurr' id='containerCurr'><div class='h2Curr' id= 'h2Curr'><h2>Random Quotes</h2></div><div id='contentCurr'><h3 id='h3'><q>Be the change that you wish to see in the world.</q></h3><span id='spanCurr'>-Mahatma Ghani</span></div></section>"
	
	//Appends the new Quote text to the body of the HTML
	document.getElementById('body').innerHTML = current
	
	//Node elements initialization
	var currContainer = document.getElementById('containerCurr');
	var currH3 = document.getElementById('h3');
	var currH2 = document.getElementById('h2Curr');
	var currContent = document.getElementById('contentCurr');
	var currSpan = document.getElementById('spanCurr');
	
	//Enables randomnization of the quotes amd text colors
	var currQuoteIndex = Math.floor(Math.random() * (quotes.length));
	var currColorIndex = Math.floor(Math.random() * 10);

	//Sets the new styles and quote
	currContainer.style.opacity = 1;
	currContainer.style.background = back[currColorIndex]
	currH2.style.color = text[currColorIndex]
	currH3.innerHTML = "<q>" + quotes[currQuoteIndex] + "</q>"
	currH3.style.color = text[currColorIndex]
	currSpan.innerHTML = authors[currQuoteIndex];
	currSpan.style.color = text[currColorIndex];
	
	a = 0.01;
	id = setInterval(opaque, 10, currContainer);
}	

function opaque(x)
{
	if(a == 100){clearInterval(id)}
	else{x.style.opacity = a/100; a+=1}
}
