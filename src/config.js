class serverObject{
    static getUrl(){
        return "http://localhost:3000"; //Insert Server IP here
    }

    static async send(variable, value){
        var toReturn;
        fetch(this.getUrl(), {  
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: variable, message: value }),
          })
            .then((response) => response.text())
            .then((data) => toReturn = data)
            .catch((error) => console.error("Error:", error));
            return toReturn;
    }

    static get(variable){
        var toReturn;
        fetch(this.getServerUrl(), {  
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: variable }),
          })
            .then((response) => response.text())
            .then((data) => toReturn = data)
            .catch((error) => console.error("Error:", error));
            return toReturn;
    }
}

export default serverObject;

/*
<?php
header("Access-Control-Allow-Origin: *"); // Allow cross-origin requests (CORS)
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    echo json_encode(["status" => "success", "message" => "Received", "data" => $data]);
} else {
    echo json_encode(["status" => "error", "message" => "No data received"]);
}
?>
*/
