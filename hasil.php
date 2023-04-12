<?php
$nim=$_POST["nim"];
$nama=$_POST["nama"];
$email=$_POST["email"];
$alamat=$_POST["alamat"];

echo"
<html>
    <body>
        Selamat datang $nama ($nim), email $email dengan alamat $alamat
    </body>
</html>
";

?>