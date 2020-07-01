<?php
    include "../part/head.php";
?>
<?php
$dbConn = mysqli_connect("site17.blog.oa.gg","site17","sbs123414","site17",3306);

$cateItemId = $_GET['cateItemId'];

$sql = "
SELECT *
FROM article
WHERE cateItemId = {$cateItemId}
LIMIT 50
";

$rs = mysqli_query($dbConn,$sql);

$articles = [];

while ( $article = mysqli_fetch_assoc($rs) ) {
    $articles[] = $article;
}

$sql2 = "
SELECT `name`
FROM cateItem
WHERE id = {$cateItemId}
";
$rs2 = mysqli_query($dbConn, $sql2);
$row = mysqli_fetch_assoc($rs2);
?>

<h1 class="list-title con"><?=$row['name']?></h1>
    
<ul class="detail-list-box con block ">
    <?php foreach ($articles as $aa) { ?>
    <li class="detail-list">
        <div class="img-box">
            <img src="https://i.postimg.cc/pr3cZs3J/Kakao-Talk-20200623-023830701-1.jpg" alt="">
        </div>
        <a href="/detail.php?id=<?=$aa['id']?>"><?=$aa['title']?></a>
    </li>
    <?php } ?>
</ul>

<?php
    include "../part/foot.php";
?>