
let currentOpenIndex = 0;

function toggleFaq(index) {
    const currentAnswer = document.getElementById(`answer-${currentOpenIndex}`);
    const currentIcon = document.getElementById(`icon-${currentOpenIndex}`);
    const newAnswer = document.getElementById(`answer-${index}`);
    const newIcon = document.getElementById(`icon-${index}`);

    if (currentOpenIndex !== index) {
        currentAnswer.classList.remove('open');
        currentIcon.classList.remove('fa-times');
        currentIcon.classList.add('fa-plus');
    }

    if (newAnswer.classList.contains('open')) {
        newAnswer.classList.remove('open');
        newIcon.classList.remove('fa-times');
        newIcon.classList.add('fa-plus');
    } else {
        newAnswer.classList.add('open');
        newIcon.classList.remove('fa-plus');
        newIcon.classList.add('fa-times');
        currentOpenIndex = index;
    }
}

function openModal(videoId) {
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById(videoId).classList.remove('hidden');
    document.getElementById(videoId).play();
}

function closeModal(event) {
    if (event) {
        event.stopPropagation();
    }
    document.getElementById('modal').classList.add('hidden');
    document.querySelectorAll('video').forEach(video => {
        video.pause();
        video.classList.add('hidden');
    });
}