document.getElementById('proposalForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    localStorage.setItem('valentineName', name);
    window.location.href = 'proposal.html';
  });



  document.addEventListener('DOMContentLoaded', function () {
    const name = localStorage.getItem('valentineName');
    const proposalText = document.getElementById('proposalText');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const confirmationText = document.getElementById('confirmationText');
  
    proposalText.textContent = `${name}, will you be my Valentine?`;
  
    let noCount = 0;
    const messages = [
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
  
    yesButton.addEventListener('click', function () {
      proposalText.textContent = `Yay! ${name}, you've made me the happiest person alive! 💖`;
      buttons.style.display = 'none';
      confirmationText.textContent = '';
    });
  
    noButton.addEventListener('click', function () {
      if (noCount < messages.length) {
        confirmationText.textContent = messages[noCount];
        noCount++;
      } else {
        noCount = 0;
        confirmationText.textContent = '';
      }
    });
  });


document.getElementById('nextButton').addEventListener('click', function () {
    const currentPage = window.location.pathname.split('/').pop();
    let nextPage;
  
    switch (currentPage) {
      case 'date.html':
        nextPage = 'menu.html';
        break;
      case 'menu.html':
        nextPage = 'location.html';
        break;
      case 'location.html':
        nextPage = 'activity.html';
        break;
      case 'activity.html':
        nextPage = 'lovebook.html';
        break;
      default:
        nextPage = 'index.html';
    }
  
    window.location.href = nextPage;
  });
  
  // Book Animation Logic
  let currentPage = 1;
  const totalPages = 3;
  
  document.getElementById('nextButton').addEventListener('click', function () {
    if (currentPage < totalPages) {
      document.getElementById(`page${currentPage}`).classList.add('flipped');
      currentPage++;
    }
  });
  
  document.getElementById('prevButton').addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      document.getElementById(`page${currentPage}`).classList.remove('flipped');
    }
  });

  // Add floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(createHeart, 300);