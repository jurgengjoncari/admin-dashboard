class CustomCard extends HTMLElement {
    constructor() {
        super()
    }
    render() {
        let form = document.createElement('form')

        let actions = ['mdi-star-plus-outline', 'mdi-eye-plus-outline', 'mdi-share-variant-outline']

        for (let action of actions) {
            let button = document.createElement('button')

            let icon = document.createElement('i')
            icon.classList.add('mdi', action)

            button.append(icon)

            form.append(button)
        }
        this.append(form)
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define('custom-card', CustomCard)