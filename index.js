  const baseURL = 'http://localhost:3000'
  const actionsURL = baseURL + '/actions'
  
  const list = document.getElementById("action-list")
  
  const form = document.getElementById('action-form')
  const nameInput = document.getElementById('action-name')
  const descriptionInput = document.getElementById('action-description')
  
  //const dropdown = document.getElementById('cat-dropdown')
  //const catNameInput = document.getElementById("category-name")
  
  form.addEventListener('submit', handleFormSubmit)
  
  function handleFormSubmit(e){
      e.preventDefault()
  
      ActionApi.createAction()
      form.reset()
  }
  
  
  ActionApi.getActions()
  
  //CategoryApi.getCategories()