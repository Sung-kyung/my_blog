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
    
<ul class="list-box con block ">
    <?php foreach ( $articles as $article ) { ?>
    <?php
    if ( empty($article['thumbImgUrl']) ) {
        $article['thumbImgUrl'] = "https://sung-kyung.github.io/img1/blog/articles/0701/empty-2.jpg";
    }
    ?>
    <li class="list"> 
        <div class="img-box flex-1-0-0" OnClick="location.href='/detail.php?id=<?=$article['id']?>'" style= "background-image:url(<?=$article['thumbImgUrl']?>);"></div>
        
        <div class="txt-box flex-1-0-0 ">
            <a href="/detail.php?id=<?=$article['id']?>" class="title flex-jc-c"><?=$article['title']?><br></a>
           
            <a href="/detail.php?id=<?=$article['id']?>" class="summary flex-jc-c"><?=$article['summary']?></a>
        </div>
    </li>
    <?php } ?>
</ul>


<?php
    include "../part/foot.php";
?>