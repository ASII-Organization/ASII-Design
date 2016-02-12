<?php
if (isset($_POST['departament'])) {
    $json = array('membrii'=>array());
    $param = "'%".htmlentities($_POST['departament'])."%'";
        $conn =  new mysqli('localhost', 'asii_website', 'forfeit', 'asii_website');
        $result = $conn->query("SELECT * FROM membri_info WHERE dept LIKE ".$param);
        while($row = $result->fetch_assoc()) {
            if ($row['dept']!="DELETED") {
                $membru = array(
                    'name'=>$row['name'],
                    'picture'=>$row['picture'],
                    'dept'=>$row['dept'],
                    'position'=>$row['position'],
                    'facebook'=>$row['facebook'],
                    'twitter'=>$row['twitter'],
                    'google'=>$row['google'],
                    'linkedin'=>$row['linkedin'],
                    'gmail'=>$row['gmail'],
                    'yahoo'=>$row['ymail'],
                    'skype'=>$row['skype']
                );
                array_push($json['membrii'], $membru);
            }
        }
        header('Content-Type: application/json; Charset=UTF-8');
        echo json_encode($json);
}
else {
    echo "Eroare!";
}