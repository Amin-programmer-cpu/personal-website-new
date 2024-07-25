
const texts = JSON.parse(localStorage.getItem('texts')) || [
  {
    text: 'The greatest glory in living lies not in never falling, but in rising every time we fall. <strong>From Nelson Mandela</strong>',
  },
  {
    text: 'The way to get started is to quit talking and begin doing. <strong>From Walt Disney</strong>',
  },
  {
    text: 'If life were predictable it would cease to be life, and be without flavor. <strong>From Eleanor Roosevelt</strong>',
  },
  {
    text: 'Life is what happens when you’re busy making other plans. <strong>From John Lennon</strong>',
  },
  {
    text: 'Don’t judge each day by the harvest you reap but by the seeds that you plant. <strong>From Robert Louis Stevenson</strong>',
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams. <strong>From Eleanor Roosevelt</strong>',
  },
  {
    text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn. <strong>From Benjamin Franklin</strong>',
  },
  {
    text: 'Never let the fear of striking out keep you from playing the game. <strong>From Babe Ruth</strong>',
  },
  {
    text: 'Life is either a daring adventure or nothing at all. <strong>From Helen Keller</strong>',
  },
  {
    text: 'You only live once, but if you do it right, once is enough. <strong>From Mae West</strong>',
  },
  {
    text: 'Whatever the mind of man can conceive and believe, it can achieve. <strong>From Napoleon Hill</strong>',
  },
  { text: 'The only limit to our realization of tomorrow will be our doubts of today. <strong>From Franklin D. Roosevelt</strong>' },
  { text: 'Life is 10% what happens to us and 90% how we react to it. <strong>From Charles R. Swindoll</strong>' },
  { text: 'Your time is limited, so don’t waste it living someone else’s life. <strong>From Steve Jobs</strong>' },
  { text: 'The best way to predict the future is to create it. <strong>From Peter Drucker</strong>' },
  { text: 'Success is not final, failure is not fatal: It is the courage to continue that counts. <strong>From Winston S. Churchill</strong>' },
  { text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us. <strong>From Ralph Waldo Emerson</strong>' },
  { text: 'Believe you can and you’re halfway there. <strong>From Theodore Roosevelt</strong>' },
  { text: 'Act as if what you do makes a difference. It does. <strong>From William James</strong>' },
  { text: 'Success usually comes to those who are too busy to be looking for it. <strong>From Henry David Thoreau</strong>' },
  { text: 'Don’t watch the clock; do what it does. Keep going. <strong>From Sam Levenson</strong>' },
  { text: 'The future belongs to those who believe in the beauty of their dreams. <strong>From Eleanor Roosevelt</strong>' },
  { text: 'It does not matter how slowly you go as long as you do not stop. <strong>From Confucius</strong>' },
  { text: 'Everything you’ve ever wanted is on the other side of fear. <strong>From George Addair</strong>' },
  { text: 'Opportunities do not happen, you create them. <strong>From Chris Grosser</strong>' },
  { text: 'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. <strong>From Roy T. Bennett</strong>' },
  { text: 'Keep your face always toward the sunshine—and shadows will fall behind you. <strong>From Walt Whitman</strong>' },
  { text: 'The only way to do great work is to love what you do. <strong>From Steve Jobs</strong>' },
  { text: 'You miss 100% of the shots you don’t take. <strong>From Wayne Gretzky</strong>' },
  { text: 'Whether you think you can or you think you can’t, you’re right. <strong>From Henry Ford</strong>' },
  { text: 'Everything has beauty, but not everyone sees it. <strong>From Confucius</strong>' },
  { text: 'Success is how high you bounce when you hit bottom. <strong>From George S. Patton</strong>' },
  { text: 'The harder you work for something, the greater you’ll feel when you achieve it. <strong>From Unknown</strong>' },
  { text: 'Dream big and dare to fail. <strong>From Norman Vaughan</strong>' },
  { text: 'The only place where success comes before work is in the dictionary. <strong>From Vidal Sassoon</strong>' },
  { text: 'Do what you can, with what you have, where you are. <strong>From Theodore Roosevelt</strong>' },
  { text: 'You are never too old to set another goal or to dream a new dream. <strong>From C.S. Lewis</strong>' },
  { text: 'Setting goals is the first step in turning the invisible into the visible. <strong>From Tony Robbins</strong>' },
  { text: 'If you can dream it, you can achieve it. <strong>From Zig Ziglar</strong>' },
  { text: 'Success is not how high you have climbed, but how you make a positive difference to the world. <strong>From Roy T. Bennett</strong>' },
  { text: 'What we fear doing most is usually what we most need to do. <strong>From Tim Ferriss</strong>' },
  { text: 'The secret of getting ahead is getting started. <strong>From Mark Twain</strong>' },
  { text: 'You don’t have to be great to start, but you have to start to be great. <strong>From Zig Ziglar</strong>' },
  { text: 'Limit your yes to a few, and your no to many. <strong>From Unknown</strong>' },
  { text: 'Success is walking from failure to failure with no loss of enthusiasm. <strong>From Winston S. Churchill</strong>' },
  { text: 'What we think, we become. <strong>From Buddha</strong>' },
  { text: 'The only limit to our realization of tomorrow is our doubts of today. <strong>From Franklin D. Roosevelt</strong>' },
  { text: 'You must be the change you wish to see in the world. <strong>From Mahatma Gandhi</strong>' },
  { text: 'In the end, we will remember not the words of our enemies, but the silence of our friends. <strong>From Martin Luther King Jr.</strong>' },
  { text: 'I have not failed. I’ve just found 10,000 ways that won’t work. <strong>From Thomas Edison</strong>' },
  { text: 'The best revenge is massive success. <strong>From Frank Sinatra</strong>' },
  { text: 'Success is the sum of small efforts, repeated day in and day out. <strong>From Robert Collier</strong>' },
  { text: 'The journey of a thousand miles begins with one step. <strong>From Lao Tzu</strong>' },
  { text: 'It’s not whether you get knocked down, it’s whether you get up. <strong>From Vince Lombardi</strong>' },
  { text: 'We may encounter many defeats but we must not be defeated. <strong>From Maya Angelou</strong>' },
  { text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us. <strong>From Ralph Waldo Emerson</strong>' },
  { text: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. <strong>From Albert Schweitzer</strong>' },
  { text: 'I find that the harder I work, the more luck I seem to have. <strong>From Thomas Jefferson</strong>' },
  { text: 'The future depends on what you do today. <strong>From Mahatma Gandhi</strong>' },
  { text: 'Hardships often prepare ordinary people for an extraordinary destiny. <strong>From C.S. Lewis</strong>' },
  { text: 'The best way to find yourself is to lose yourself in the service of others. <strong>From Mahatma Gandhi</strong>' },
  { text: 'Life is either a daring adventure or nothing at all. <strong>From Helen Keller</strong>' },
  { text: 'To succeed in life, you need three things: a wishbone, a backbone, and a funny bone. <strong>From Reba McEntire</strong>' },
  { text: 'Success is not in what you have, but who you are. <strong>From Bo Bennett</strong>' },
  { text: 'The most difficult thing is the decision to act, the rest is merely tenacity. <strong>From Amelia Earhart</strong>' },
  { text: 'The only way to achieve the impossible is to believe it is possible. <strong>From Charles Kingsleigh</strong>' },
  { text: 'Success is not the absence of failure; it’s the persistence through failure. <strong>From Aisha Tyler</strong>' },
  { text: 'Life is not about finding yourself. Life is about creating yourself. <strong>From George Bernard Shaw</strong>' },
  { text: 'Keep your eyes on the stars, and your feet on the ground. <strong>From Theodore Roosevelt</strong>' },
  { text: 'Success is a journey, not a destination. <strong>From Arthur Ashe</strong>' },
  { text: 'Don’t be afraid to give up the good to go for the great. <strong>From John D. Rockefeller</strong>' },
  { text: 'Challenges are what make life interesting and overcoming them is what makes life meaningful. <strong>From Joshua J. Marine</strong>' },
  { text: 'The way to get started is to quit talking and begin doing. <strong>From Walt Disney</strong>' },
  { text: 'Success is not measured by what you accomplish, but the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. <strong>From Orison Swett Marden</strong>' },
  { text: 'The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it. <strong>From Jordan Belfort</strong>' },
  { text: 'Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit. <strong>From Conrad Hilton</strong>' },
];

function saveTexts() {
  localStorage.setItem('texts', JSON.stringify(texts));
}

function loadTexts() {
  const savedTexts = JSON.parse(localStorage.getItem('texts'));
  if (savedTexts) {
    texts.length = 0; // Clear the current array
    texts.push(...savedTexts); // Load saved texts
  }
}

function getRandomAuthor() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

function colorpicker() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  document.querySelector('.color-code').innerHTML = "#" + randomColor;
}

let button = document.querySelector('.New-button');

button.addEventListener('click', () => {
  document.querySelector('.main-text').innerHTML = getRandomText().text;
  colorpicker();
});

let nbutton = document.querySelector('.submit');

function addToTexts() {
  let newText = document.querySelector('.input1').value;
  let newAuthor = document.querySelector('.input2').value;
  texts.push({ text: newText + ' <strong>' + ' From ' + newAuthor + '</strong>' });
  saveTexts(); // Save texts after adding new one
}

nbutton.addEventListener('click', () => {
  addToTexts();
  alert('Text added');
  colorpicker();
});

// Load texts on page load
loadTexts();