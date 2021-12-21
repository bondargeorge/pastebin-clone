const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

/*
deleteButton.addEventListener('click', _ => {
  fetch('/pastebins', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'pastebin'
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No pastebin to delete') {
        messageDiv.textContent = 'No pastebin to delete'
      } else {
        window.location.reload(true)
      }
    })
    .catch(console.error)
})
*/
