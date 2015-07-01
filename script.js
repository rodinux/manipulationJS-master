$liste = document.getElementById("liste");
$btn = document.getElementById("btn");
$btn2 = document.getElementById("btn2");

function selectionne(e) {
  e.target.classList.toggle("selected");
}

function supprimer () {
  console.log($liste.children);
  for (i=0; i<$liste.children.length ; i++){
    if ($liste.children[i].classList.contains("selected")){
      $liste.children[i].className = "deleted"
    }
  }
}

function restaurer(){
  for (i=0; i<$liste.children.length ; i++){
    if ($liste.children[i].classList.contains("deleted")){
      $liste.children[i].classList.toggle("deleted");
    }
  }
}

$btn2.onclick = restaurer;
$btn.onclick = supprimer;
$liste.onclick = selectionne;
