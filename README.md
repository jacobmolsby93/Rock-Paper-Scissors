<h1> Rock Paper Scissors Lizzard Spock </h1>

<p>
My first ever project built with JavaScript, and HTML & CSS. But the logic in the game is built using JavaScript. The aim of this website is for YOU the user to play the game of rock paper scissors lizard spock against the computer.
each of the hands you can pick can win against 2 others and beat 2 others. The game is simple but yet fun to play and i love the way that the design came out.
In the future I want to implement a way for YOU to play against your friends in a online setting. A fun and easy way of settling an argument or deciding where to go eat lunch! 
</p>


<img src="https://i.ibb.co/X5q7T5p/Ska-rmavbild-2021-05-23-kl-09-52-52.png" alt="Image of Web-application" style="width: 100%">


<h3>
Features 
</h3>
<hr>

<ul>
    <li>
        <h4><strong>Rock paper scissors Heading</strong></h4>
        <ul>
            <li>
                <p>
                The heading I have chosen is a simple but elegant heading. The font I have chosen is Indie flower! It's a minimalistic design with focus on the different selection of hands used for playing the game.
                </p>
            </li>
        </ul>
    </li>
    <li>
        <h4>
        <strong>The Game Area</strong>
        </h4>
        <ul>
            <li>
                <p>
                    This is the section of the page where the user selects one of the hands in the game of Rock, paper, scissor, lizard & spock. To play against the computer.
                </p>
            </li>
            <li>
                <p>
                    The user has 5 differnet options to choose from, each option has a chance to to win or loose against 2 other options. If the computer picks the same hand as you have chosen there is a draw.
                </p>
            </li>
        </ul>
        <img src="https://i.ibb.co/RjLTN6g/Ska-rmavbild-2021-05-23-kl-10-02-58.png" alt="game area img" style="width: 100%">
    </li>
    <li>    
        <h4>        
        <strong>User pick & Computer Pick</strong>
        </h4>         
        <ul>     
            <li>
                <p>
                This is the section of the game where a div located both on the left and on the right side of the screen. The square on the left side of the screen will show what the user has selected, and the square on the right side of the screen will show what the computer has generated.
                </p>
            </li>
        </ul> 
    </li>
    <li>
        <h3><strong>Features Left to Implement</strong></h3>
    </li>
    <li>
        <p>
        A feature idea i have to implement in the future is where you can login in to the page or just enter your name. With that to be able to play against your friends online.
        </p>
    </li>
</ul>

<h2>
Testing
</h2>
<hr>

<p>
The testing of this web-application was done solely by me.

I have spent several hours on the project solving bugs which i have found along the way of completing it. The hardest part was to make the web-application responsive for all different screen sizes. Looking at it now in retrospect if I would do it again I would start with designing the game in the mobile version first and then adding on elements as the screen size grows bigger.
When you enter the web-page it is clear what the objective is. You are greated with 5 options of hands. When you press the hand it spins and the computer will roll a option and you see in the two squares what you picked and what the computer picked aslong with who won.
Making the squares was easy for desktop mode, but when deploying the site and checking how it looked on the mobile version they where way to big. 
That lead to me deleting the square where it shows what you picked, and putting the computer pick square on the right side. I found that that is a crucial part of the game.
on the left side in the mobile version you will see a small rectangle which will display if you have won, lost or drew a draw against the computer.

The testing has been made for desktop mode, ipad and for mobile version. 
</p>

<h3>
Validator Testing
</h3>

<ul>
    <li>
    <p><strong>HTML</strong></p> 
        <ul>
            <li>
                <p>HTML W3 validator result</p>
            </li>
            <li>
            <p>1 Error, which says "End tag had attributes" and shows d="message-tag">↩↩ (Not sure what it means)</p>
            </li>
            <li>
            <p>2 warnings, which states Empty heading.</p>
            <p>h3 id="computer-pick">↩↩</p>
            <p>h3 id="user-pick">↩</p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>CSS</strong></p>
        <ul>
            <li>
                <p>W3 jigsaw result</p>
            </li>
            <li>
                <p>parsing error</p>
                <p>.score-box??{ width: 100%; height: 50px; margin-top: 0; top: 100px; }</p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>JavaScript</strong></p>
        <ul>
            <li>
                <p>When running my javascript code through the JShint i get 32 warnings about the "let" and "const" that its for ES6 version of javascript</p>
            </li>
        </ul>
    </li>
</ul>

<h3>
Unfixed Bugs
</h3>

<p>
The bugs i have found are that if you console log the computer-choice or pick in javascript, it returns 2 choices but that does not affect the scoring of the game. I have tried to resolve this but have not found a way to make it only show 1.
Another bug i found in the beginning was that when entering the page, you could already see what the computer had picked. Which ultimately makes the game useless. But after going through my code i found that i had called the function 2 times one time when you click on the options and at another place which it wasn't suppose to be called.

Aslong with these two bugs there is 1 more, on iphone x the square which displays you-win || you-loose || it's a draw is pushed down, which i find weird because it is just a little but smaller than the 6/7/8 plus version and on that screen it works well. dont know how to fix this without messing with the plus version.
</p>

<h2>
Deployment
</h2>
<hr>

<p>
This section of the ReadMe file i will explain how, and what type of hosting platform is used.
</p>

<ul>
    <li>
        The site was deployed to GitHub pages. The steps to deploy are as follows:
        <ul>
            <li>
                <p>
                In the GitHub Repository, navigate to the settings tab
                </p>
            </li>
            <li>
                <p>
                In the settings tab navigate down the page until you find the seperate tab for pages.
                </p>
            </li>
            <li>
                <p>
                When you are on the pages page, Select the master branch. Click save right next to it.
                When you have saved the page and refreshed the site, the project is deployed through GitHub.
                </p>
            </li>
        </ul>
    </li>
</ul>

<p>
Here you can check out what i have done - <a href="https://jacobmolsby93.github.io/Rock-Paper-Scissors/">https://jacobmolsby93.github.io/Rock-Paper-Scissors/</a>
</p>

<h2>
Credits
</h2>

<p>
In this section I will reference where i got my content from, I will link to the pages i went to for the help with my coding.
</p>

<h3>
Content
</h3>

<ul>
    <li>
        <p>
        The hand emojis I used I got from this website - <a href="https://unicode.org/emoji/charts/full-emoji-list.html">https://unicode.org/emoji/charts/full-emoji-list.html</a>
        </p>
    </li>
    <li>
        <p>
        The idea to use Switch case in my javaScript i got from this Youtube clip - <a href="https://youtu.be/jaVNP3nIAv0">https://youtu.be/jaVNP3nIAv0</a>
        </p>
    </li>
</ul>