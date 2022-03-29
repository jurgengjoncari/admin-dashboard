class CustomCard extends HTMLElement {
    constructor() {
        super()
    }
    render() {
        let form = document.createElement('form')

        let actionButtons = [
            {
                iconName: 'mdi-star-plus-outline', 
                ariaLabel: 'Favorite'
            },
            {
                iconName: 'mdi-eye-plus-outline',
                ariaLabel: 'View Details'
            },
            {
                iconName: 'mdi-share-variant-outline',
                ariaLabel: 'Share'
            }
        ]

        for (let action of actionButtons) {
            let button = document.createElement('button')

            let iconElement = document.createElement('i')
            iconElement.classList.add('mdi', action.iconName)
            button.ariaLabel = action.ariaLabel

            button.append(iconElement)

            form.append(button)
        }
        this.append(form)
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define('custom-card', CustomCard)