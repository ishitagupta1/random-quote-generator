import express from "express";

const app=express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    const randomQuote = quote[Math.floor(Math.random()*quote.length)];
    res.render("index.ejs",{
        quotes: randomQuote,
    });
});

app.listen(port,()=>{
    console.log(`server running on ${port} port`);
});

const quote = [
    '"You must be the change you wish to see in the world." -Mahatma Gandhi',
    '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
    '"The only thing we have to fear is fear itself." -Franklin D. Roosevelt',
    '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." -Martin Luther King Jr.',
    '"Do one thing every day that scares you." -Eleanor Roosevelt',
    '"Well done is better than well said." -Benjamin Franklin',
    '"The best and most beautiful things in the world cannot be seen or even touched. -they must be felt with the heart." -Helen Keller',
    '"It is during our darkest moments that we must focus to see the light." -Aristotle',
    '"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson',
    '"Be yourself; everyone else is already taken." -Oscar Wilde',
    '"You will face many defeats in life, but never let yourself be defeated." -Maya Angelou',
    '"Go confidently in the direction of your dreams! Live the life you have imagined." -Henry David Thoreau',
    '"In the end, it is not the years in your life that count. It is the life in your years." -Abraham Lincoln',
    '"Never let the fear of striking out keep you from playing the game." -Babe Ruth',
    '"In this life we cannot do great things. We can only do small things with great love." -Mother Teresa',
    '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." -Dr. Seuss',
    '"Life is either a daring adventure or nothing." -Helen Keller',
    '"Life is a long lesson in humility." -James M. Barrie',
    '"In three words I can sum up everything I have learned about life: it goes on." -Robert Frost',
    '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." -Dr. Seuss',
    "Life is made of ever so many partings welded together. -Charles Dickens",
    '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking. -Steve Jobs"',
    '"Life is trying things to see if they work. -Ray Bradbury"',
    '"Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill"',
    '"Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau"',
    '"If you want to make your dreams come true, the first thing you have to do is wake up. -J.M. Power"',
    '"If you really look closely, most overnight successes took a long time. -Steve Jobs"',
    '"The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr."',
    '"I find that the harder I work, the more luck I seem to have. -Thomas Jefferson"',
    '"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"',
    '"You miss 100% of the shots you don\'t take. -Wayne Gretzky"',
    '"Whether you think you can or you think you can\'t, you\'re right. -Henry Ford"',
    '"I alone cannot change the world, but I can cast a stone across the water to create many ripples." -Mother Teresa',
    '"It\'s just a job. Grass grows, birds fly, waves pound the sand. I beat people up. -Muhammad Ali"',
    '"My attitude is that if you push me towards a weakness, I will turn that weakness into a strength." -Michael Jordan',
    '"Hard days are the best because that\'s when champions are made." -Gabby Douglas',
    '"You can motivate by fear, and you can motivate by reward. But those methods are only temporary. The only lasting thing is self motivation." -Homer Rice',
    '"If it doesn\'t challenge you, it won\'t change you." -Fred Devito',
    '"If you only ever give 90% in training then you will only ever give 90% when it matters." -Michael Owen',
]