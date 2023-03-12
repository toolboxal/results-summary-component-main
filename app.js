const datas = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
    color: 'hsla(0, 100%, 67%, 0.05)',
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
    color: 'hsl(39, 100%, 56%, 0.05)',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
    color: 'hsl(166, 100%, 37%, 0.05)',
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
    color: 'hsl(234, 85%, 45%, 0.05)',
  },
]

const summaryContent = document.querySelector('.summary-content')
const scoreDisplay = document.querySelector('.total-score')

let Scores = 0
datas.forEach((item) => {
  Scores += item.score
})
averageScore = Math.round(Scores / datas.length)
console.log(averageScore)

function displayItems(items) {
  let display = items.map((item) => {
    return `
    <div class="component-body" style="background-color:${item.color}">
    <div class="category-box">
      <img src=${item.icon}>
      ${item.category}
    </div>
    <div class="score">${item.score} / <span>100</span></div>
  </div>
        `
  })

  display.push('\n<button class="btn">Continue</button>')
  display = display.join('')
  console.log(display)
  summaryContent.innerHTML = display

  scoreDisplay.textContent = averageScore
}

displayItems(datas)
