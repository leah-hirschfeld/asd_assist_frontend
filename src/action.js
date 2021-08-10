class Action {
    static all = []

    static container = document.getElementById('action-list')

    constructor({id, name, description, category_id}){
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryID = category_id;

        this.element = document.createElement('li');
        this.element.id = `action-${id}`;
        this.element.dataset.id = id;

        this.element.addEventListener('click', this.handleActionClick);

        Action.all.push(this)
    }

    handleActionClick = (e) => {
        if (e.target.innerText === "Edit"){
        this.createEditFields(e.target)
        e.target.innerText = "Save"
    }else if(e.target.innerText === "Delete"){
        this.deleteItem(e)
    }else if(e.target.innerText === "Save"){
        this.saveUpdatedItem()
        e.target.innerText = 'Edit'
    }
}

    renderLi(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
            Action: <span class="name">${this.name}</span> <br>
            Description: <span class="description">${this.description}</span> <br>
        </div>
        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>`
    
        return this.element
    }

    attachToDom(){
        list.appendChild(this.renderLi())
    }

    createEditFields = (editBtn) => {
        const li = this.element;
        const div = this.element.querySelector('div');

        const name = li.querySelector('.name').innerText;
        const description = li.querySelector('.description').innerText;

        div.innerHTML = `
        <input type = "text" name = "name" class = "edit-name" value = "${name}">
        <input type = "text" name = "description" class = "edit-description" value = "${description}">`

    }

deleteItem = (e) => {
    this.element.remove()
    ActionApi.deleteItem(this.id)
}


saveUpdatedItem = () => {
    this.name = this.element.querySelector(".edit-name").value;
    this.description = this.element.querySelector(".edit-description").value;

    ActionApi.sendPatch(this);
}

static filterByCategory(filteredCategory){
    if (filteredCategory){
        for (const action of Action.all){
            if(action.categoryId === parseInt(filteredCategory.id)){
                action.element.style.display = ""
            } else {
                action.element.style.display = "none"
            }
        }
    } else {
        for (const action of Action.all){
            action.element.style.display = ""
        }
    }
    return filteredCategory
    }
}