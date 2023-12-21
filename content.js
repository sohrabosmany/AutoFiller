chrome.runtime.onMessage.addListener(
    function(request, send, response) {
        try {
            document.getElementById("field31287585-first").value = request.name,
            document.getElementById("field31287591").value = request.email,
            document.getElementById("field31287603").value = request.tele,
            document.getElementById("field31287588-address").value = request.address,
            document.getElementById("field31287645M").value = request.birthday
        } catch (error) {
            console.log(error)
            response({status: "Exception occurred"})
        }
    }
)