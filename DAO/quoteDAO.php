<!DOCTYPE html>
<html>
<body>
    <?php
        $servername = "3.133.83.54";
        $username = "dnotingc_quoteAdmin";
        $password = "chickenortheegg101";
        
        echo "connecting";
        
        // Create connection
        $conn = new mysqli($servername, $username, $password);
        
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";
    ?>
</body>
</html>
