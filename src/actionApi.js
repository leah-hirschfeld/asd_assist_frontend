class ActionApi {
    static baseURL = 'http://localhost:3000/actions'

    static getActions(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(data => {
            data["data"].forEach(action => {
                const i = new Action({id: action.id,...action.attributes})
                i.attachToDom()
            })
        })
    }

    static createAction(){
        const formData = {
            name: nameInput.value,
            description: descriptionInput.value, 
            //category_id: dropdown.value 
        }

        const configObj = {
            method: 'POST', 
            headers: { 
                "Content-Type": "application/json", 
                Accept: "application/json"
            },
            body: JSON.stringify(formData) 
        }

        fetch(this.baseURL, configObj)
        .then(r => r.json())
        .then(data => {
            const action = data.data
            const i = new Action({id: action.id,...action.attributes})
            i.attachToDom();
        })
    }

    static sendPatch(action){
        let {name, description} = action
        const actionInfo = {
            name,
            description
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"},
                body: JSON.stringify(actionInfo)
            }

        fetch(`${this.baseURL}/${item.id}`, configObj)
        .then(r = r.json())
        .then(json => {
            action.renderLI()
        })
    }

    static deleteAction(id) {
        const configObj = {
            method: 'Delete',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"}
            }
        fetch(`${this.baseURL}/${id}`, configObj)
        .then(r => r.json())
        .then(json => alert(json.message))
    }
}