function calculate() {
  let paycheck = parseFloat(document.getElementById('paycheck').value) || 0
  let savings = parseFloat(document.getElementById('savings').value) || 0
  let investments = parseFloat(document.getElementById('investments').value) || 0
  let fun = parseFloat(document.getElementById('fun').value) || 0

  let totalBills = 0
  let billItems = document.querySelectorAll('.bill-item')

  billItems.forEach(function(item) {
    let amount = parseFloat(item.dataset.amount) || 0
    totalBills += amount
  })

  let totalSpending = totalBills + savings + investments + fun
  let leftover = paycheck - totalSpending

  let breakdown = document.getElementById('breakdown')
  let leftoverDiv = document.getElementById('leftover')
  let resultsCard = document.getElementById('results')

  resultsCard.style.display = 'block'

  breakdown.innerHTML = `
    <div class="breakdown-item">
      <span>Total Bills</span>
      <span>-$${totalBills.toFixed(2)}</span>
    </div>
    <div class="breakdown-item">
      <span>Savings</span>
      <span>-$${savings.toFixed(2)}</span>
    </div>
    <div class="breakdown-item">
      <span>Investments</span>
      <span>-$${investments.toFixed(2)}</span>
    </div>
    <div class="breakdown-item">
      <span>Fun Money</span>
      <span>-$${fun.toFixed(2)}</span>
    </div>
  `

  if(leftover >= 0) {
    leftoverDiv.className = 'positive'
    leftoverDiv.textContent = `Left Over: $${leftover.toFixed(2)}`
  } else {
    leftoverDiv.className = 'negative'
    leftoverDiv.textContent = `Over Budget: $${Math.abs(leftover).toFixed(2)}`
  }
}

function addBill() {
  let name = document.getElementById('bill-name').value
  let amount = parseFloat(document.getElementById('bill-amount').value) || 0

  if(name === '' || amount === 0) {
    alert('Please enter a bill name and amount!')
    return
  }

  let billList = document.getElementById('bills-list')

  let div = document.createElement('div')
  div.className = 'bill-item'
  div.dataset.amount = amount
  div.innerHTML = `
    <span>${name} - $${amount.toFixed(2)}</span>
    <button onclick="this.parentElement.remove()">✕</button>
  `

  billList.appendChild(div)

  document.getElementById('bill-name').value = ''
  document.getElementById('bill-amount').value = ''
}