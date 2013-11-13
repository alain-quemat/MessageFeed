(function () {

    var serverURL = "http://gateway4iot.appspot.com", // IMPORTANT: This URL needs to be accessible from your phone for testing.
        $scroller = $('.scroller'),

        // Get List of images from server
        getFeed = function () {
            $scroller.empty();
var query = {'device_id': '5838406743490560'};
var json_sent =JSON.stringify(query);
            $.ajax({
url: serverURL + "/PostService.get_device_messages",
dataType: "json",
contentType: "application/json",
data:json_sent,
type: "POST"
}).done(function (data) {
                var l = data.device_messages.length;
                for (var i = 0; i < l; i++) {
                    $scroller.append('<p>' + data.device_messages[i].content + '</p>');
                }
            });
        },
    

        // Take a picture using the camera or select one from the library
        takePicture = function (e) {
            alert ("take position");
            var message = {'device_id':'5838406743490560','content':'ceci est un test json complet' };
            var json_sent =JSON.stringify(message);
$.ajax({
url: serverURL + "/PostService.post_device_message",
dataType: "json",
contentType: "application/json",
data : json_sent,
type: "POST"
}).done(getFeed());
},

     getDeviceInfo = function () {
        var element = document.getElementById('deviceProperties');
        element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                            'Device Cordova: '  + device.cordova  + '<br />' +
                            'Device Platform: ' + device.platform + '<br />' +
                            'Device UUID: '     + device.uuid     + '<br />' +
                            'Device Model: '    + device.model    + '<br />' +
                            'Device Version: '  + device.version  + '<br />';
    };

    $('.camera-btn').on('click', takePicture);

    getFeed();
    getDeviceInfo ();

}());