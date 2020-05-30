var ImageList = [
  {
    url: '../../assets/covid.jpg',
    id: 'image1',
    title: 'covid-19'
  },
  {
    url: '../../assets/covid3.jpg',
    id: 'image2',
    title: 'covid-19'
  },
  {
    url: '../../assets/covid1.jpg',
    id: 'image3',
    title: 'covid-19'
  },
  {
    url: '../../assets/covid2.jpg',
    id: 'image4',
    title: 'covid-19'
  },
  {
    url: '../../assets/covid8.jpg',
    id: 'image5',
    title: 'covid-19'
  }
];
var liEls = document.getElementsByClassName("lists");
var index = 0;
window.onload=function(){
  var items = document.getElementById("items");
  var dots = document.getElementById("dots");
  for(var j = 0; j< ImageList.length; j++){
    var li = document.createElement("li");
    li.setAttribute('class','lists');
    var img = document.createElement("img");
    img.setAttribute('src', ImageList[j].url);
    img.setAttribute('title', ImageList[j].title);
    img.style.width = window.screen.width + 'px';
    if(window.screen.width < 421){
      img.style.width = '';
    }
    li.appendChild(img);
    items.appendChild(li);

    var span = document.createElement("span");
    span.setAttribute('class', 'dot');
    span.setAttribute('id', j);
    dots.appendChild(span);
    dots.children[0].style.background = 'white';
  }


}
currentSlide = (e) => {
  var index = Number(e.target.id);
  show(index, true)
}


show = (increase, clickedBy=false) => {
  if(!isNaN(index)){
    var dots = document.getElementById("dots");
    dots.children[index].style.background = '#bbb';
    index = index + increase;
    index = Math.min(
        Math.max(index,0),
        liEls.length-1
    );

    if(clickedBy){
      index = increase
    }
    if(index>-1)
      dots.children[index].style.background = 'white';
    liEls[index].scrollIntoView({behavior: 'smooth'});
  }

}

