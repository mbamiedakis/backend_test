var update = document.getElementById('update')
var del = document.getElementById('delete')


update.addEventListener('click', function () {
fetch('fullname', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': 'Michaeltest',
    'surname': 'lala'
  })
}).then(res => {
  if (res.ok) return res.json()
})
.then(data => {
  console.log(data)
   window.location.reload(true)
})

})



del.addEventListener('click', function () {
  fetch('fullname', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Michaeltest'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload()
  })
})