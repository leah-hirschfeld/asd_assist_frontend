* Sort by either checklist of to do's or resources to read
* bank of steps that individuals can take to get care they need
    1) Talk to pediatrician if you have concerns
    2) ASD diagnosis from psychologist
    3) ASD diagnosis from OT and ST (possibly)
    4) Reach out to ABA services - Center for Autism and Related Disorders, EasterSeals
    5) Ensure your BCBA is credentialed with your insurance company
    6) Determine school placement options

* Let folks add check list items
* Add links and bank of resources
* Remove items from checklist once checked?

if(this.active === false) {
            this.active = true
        }else{
            this.active = false
        }


        Category.all.forEach(c => {
            if(c.element === this.element && !this.active){
                c.element.classList.add('activated')
                c.active = true
                filteredCategory = c
            } else{
                c.element.classList.remove('activated')
                c.active = false
            }