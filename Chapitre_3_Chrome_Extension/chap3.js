let myLeads = []

// Avec la déclaration "const", il n'est pas possible de réassigner la variable tandis que "let" oui
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const delBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadFromLocalStorage) {
    myLeads = leadFromLocalStorage
    render(myLeads)
}
// Meilleur séparation entre le HTML et le JS car ici nous n'avons plus besoin de onclick dans l'HTML
// Nous utilisons à la place la méthode addEventListener avec l'attribut "click" puis nous spécifions une fonction
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) // Permet de garder en mémoire les liens que nous sauvegardons même après rafraichissment
    render(myLeads)
})

delBtn.addEventListener("dblclick", function(){ // Attends un évènement de double click
    localStorage.clear() // Supprime la mémoire local
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads)) // Permet de garder en mémoire les liens que nous sauvegardons même après rafraichissment
        render(myLeads)
    })
    
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">${leads[i]}</a>
            </li>
        `
        // const li = document.createElement("li") // Autre facon de faire pour intégrer de l'HTML
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        
    }
    
    ulEl.innerHTML = listItems // Essayez de manipuler le DOM le moins possible pour les performances
}