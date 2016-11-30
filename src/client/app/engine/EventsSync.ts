import { Promise } from 'es6-Promise';
import * as $ from 'jquery';
declare let fetch: Function;

class EventsSync {

      static postStringWithJQuerry() {
            $.ajax({
                  type: "POST",
                  url: "http://localhost:8081/joine-server-0.0.1-SNAPSHOT/antek/events/test/post/string",
                  contentType: "application/json",
                  data: JSON.stringify({ key: "value" }),
            });

      }

      static postUserEvent(event: DTOEvent): Promise<DTOEvent> {
            const p: Promise<DTOEvent> = new Promise(function (resolve, reject) {
                  fetch('http://localhost:8081/joine-server-0.0.1-SNAPSHOT/antek/events/test/post', {
                        method: 'POST',
                        async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
                        cache: false,    //This will force requested pages not to be cached by the browser  
                        processData: false, //To avoid making query String instead of JSON
                        headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ "startTime": 123, "endTime": 1561, "message": "example Message" })
                  }).then(function (response: DTOEvent) {
                        console.log("Got response from server");
                        console.log(response);
                        resolve(response);
                        // if (response.ok) {
                        //       response.blob().then(function (myBlob) {
                        //             var objectURL = URL.createObjectURL(myBlob);
                        //             myImage.src = objectURL;
                        //       });
                        // } else {
                        //       console.log('Network response was not ok.');
                        // }
                  }).catch(function (error: any) {
                        console.log('There has been a problem with your fetch operation: ' + error);
                        reject(error);
                  });;
            }
            );
            return p;
      }

      static postString(event: string): Promise<string> {
            const p: Promise<string> = new Promise(function (resolve, reject) {
                  fetch('http://localhost:8080/antek/events/test/post/string', {
                        method: 'post',
                        dataType: 'application/json; charset=utf-8',
                        async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
                        cache: false,    //This will force requested pages not to be cached by the browser  
                        processData: false, //To avoid making query String instead of JSON
                        mode: 'no-cors',
                        body: JSON.stringify({ "key": "value" })
                  }).then(function (response: string) {
                        console.log("Got response from server");
                        console.log(response);
                        resolve(response);
                        // if (response.ok) {
                        //       response.blob().then(function (myBlob) {
                        //             var objectURL = URL.createObjectURL(myBlob);
                        //             myImage.src = objectURL;
                        //       });
                        // } else {
                        //       console.log('Network response was not ok.');
                        // }
                  }).catch(function (error: any) {
                        console.log('There has been a problem with your fetch operation: ' + error);
                        reject(error);
                  });;
            }
            );
            return p;
      }

      static getUserEvents(startTime: number, endTime: number): Promise<DTOEvent> {
            const p: Promise<DTOEvent> = new Promise(function (resolve, reject) {
                  fetch('http://localhost:8080/antek/events/' + startTime + '/' + endTime, {
                        method: 'get',
                        dataType: 'json',
                        mode: 'no-cors',
                  }).then(function (response: DTOEvent) {
                        console.log("Got response from server");
                        console.log(response);
                        resolve(response);
                        // if (response.ok) {
                        //       response.blob().then(function (myBlob) {
                        //             var objectURL = URL.createObjectURL(myBlob);
                        //             myImage.src = objectURL;
                        //       });
                        // } else {
                        //       console.log('Network response was not ok.');
                        // }
                  }).catch(function (error: any) {
                        console.log('There has been a problem with your fetch operation: ' + error);
                        reject(error);
                  });;
            }
            );
            return p;
      }

      static addEventFetch(event: DTOEvent) {
            fetch('http://localhost:8080/antek/events', {
                  method: 'post',
                  dataType: 'json',
                  mode: 'no-cors',
                  body: { startTime: 1245, endTime: 12354, name: "EventDescription" }
            });
            return 200;
      }

      static getEvents() {
            fetch('http://localhost:8080/antek/events', {
                  method: 'post',
                  dataType: 'json',
                  mode: 'no-cors',
                  body: { startTime: 1245, endTime: 12354, name: "EventDescription" }
            });
            return 200;
      }

      static testGet() {
            fetch('http://localhost:8080/antek/events/test', {
                  method: 'get',
                  mode: 'no-cors'
            });
            return 200;
      }
}

export { EventsSync };