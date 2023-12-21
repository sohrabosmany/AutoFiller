document.getElementById("fill").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            tele: document.getElementById("tele").value,
            address: document.getElementById("address").value,
            birthday: document.getElementById("birthday").value,

        }, function(response) {
            console.log(response.status)
        })
    })
});

document.getElementById("save").addEventListener("click", () => {
    chrome.storage.sync.set({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        tele: document.getElementById("tele").value,
        address: document.getElementById("address").value,
        birthday: document.getElementById("birthday").value,

    }, function(response) {
        console.log("Save")
    })
});

document.getElementById("load").addEventListener("click", () => {
    chrome.storage.sync.get([
        'name',
        'email',
        'tele',
        'address',
        'birthday'
    ], function(request) {
        document.getElementById("name").value = request.name
        document.getElementById("email").value = request.email
        document.getElementById("tele").value = request.tele
        document.getElementById("address").value = request.address
        document.getElementById("birthday").value = request.birthday
    })
        
});