$(document).ready(onReady);

function onReady () {
    console.log('JQ');

    // ToDo: 
    // - Setup Form 
    // - get music information
    getMusicInformation();
            
}

function getMusicInformation () {
    // Make ajax GET request to server 
    $.ajax({
        method: 'GET',
        url: '/music'
    }).then(function(response){
    console.log('back from server with:', response);
}).catch(function(error) {
    console.log('error retrieving get', error);
    alert('error!');
})
}

