const quiz = document.querySelector('.quiz')
const question = document.querySelector('.quiz__question')
const quizParent = document.querySelector('.quiz__items')
const quizChild = document.querySelectorAll('.quiz__item')
const questionNumber = document.querySelector('.quiz__title span')
const BtnRepeatQuiz = document.querySelector('.quiz__btn')
const wrapper = document.querySelector('.quiz__wrapper')
const showBlockCorrectAnswer = document.querySelector('.quiz__block')
const quizCorrentAnswer = document.querySelector('.quiz__correct_answer span')



// let index = 0;
let index = 1;

let countCorrectAnswer = 0


const answer = [
  'Что НЕ относиться ко вселенной марвел',
  'Какая компания разработала React',
  'Столица США',
  'Что НЕ является языком программирования ?'
]


const responses = [
  [
    { title: "Бэтмен", status: true },
    { title: "Мстители", status: false },
    { title: "Железный человек", status: false, },
    { title: "Халк", status: false }
  ],
  [
    { title: "Амазон", status: false },
    { title: "Facebook", status: true },
    { title: "Google", status: false, },
    { title: "Mail", status: false }
  ],
  [
    { title: "Бостон", status: false },
    { title: "Нью-Йорк", status: false },
    { title: "Вашингтон", status: true, },
    { title: "Лос-Анджелес", status: false }
  ],
  [
    { title: "Go", status: false },
    { title: "JavaScript", status: false },
    { title: "Python", status: false, },
    { title: "HTML", status: true }
  ]
]

if (answer.length === responses.length) {

  quizChild.forEach((el) => {
    el.addEventListener('click', () => {


      responses[index - 1].forEach(obj => {
        if (obj.title === el.textContent && obj.status) {
          countCorrectAnswer++
        }
      })

      quizChild.forEach((item, ind) => {
        if (index < responses.length) {
          item.querySelector('span').innerHTML = responses[index][ind].title
        }
      })

      if (index < responses.length) {

        question.innerHTML = answer[index]
        questionNumber.innerHTML = index + 1
        index++

      } else {

        quizCorrentAnswer.innerHTML = countCorrectAnswer
        wrapper.classList.add('hide')
        showBlockCorrectAnswer.classList.remove('hide')

        index = 0;
      }
    })

  })
}


BtnRepeatQuiz.addEventListener('click', () => {

  wrapper.classList.remove('hide')
  showBlockCorrectAnswer.classList.add('hide')

  quizChild.forEach((item, ind) => {
    if (index < responses.length) {
      item.querySelector('span').innerHTML = responses[index][ind].title
    }
  })

  question.innerHTML = answer[index]
  questionNumber.innerHTML = index + 1

  countCorrectAnswer = 0;
  index = 1
})


