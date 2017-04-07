//alert ('Scroll horizontal realizado: '+window.pageYOffset||document.body.scrollTop);
document.getElementById('toggle').addEventListener("click",function(e){
  e.preventDefault();
  var navBar =  document.getElementById('header');
  navBar.classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});

var ultimaPosScroll = 0;
window.addEventListener("scroll",function(){
  var posScroll = window.pageYOffset || document.body.scrollTop;
  if(posScroll>ultimaPosScroll){
    document.getElementById("header").classList.remove("header-in");
    document.getElementById("header").style.opacity = 0;

  }else{
    document.getElementById("header").classList.add("header-in");
    document.getElementById("header").classList.add("solid");
    document.getElementById("header").style.opacity = 1;
    if(posScroll<=3){
      document.getElementById("header").classList.remove("solid");
      document.getElementById("header").classList.remove("header-in");
    }

  }
  ultimaPosScroll =posScroll;
},false);
/**************Lista dinamica de coders********************/

var coders = [];

/*******Creado el objeto coder******/
function Coder(id,nombre,foto){
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
}
/*******Funcion para imprimir todas las coders*********/
function printCoderHtml(parent){
    parent.innerHTML = "";
    coders.forEach(function(elemento){
        parent.appendChild(createCodeHtml(elemento.id,elemento.nombre,elemento.foto));
        //parent.appendChild(createCodeHtml(elemento.id,elemento.foto));
    });
}
/*********Funcion para crear el dom para mostrar la lista de coders***********/
function createCodeHtml(id,txtNombre,srcFoto){
    var df = document.createDocumentFragment();
    var li= document.createElement("li");
    li.setAttribute("class","box");
    var img = document.createElement("img");
    img.setAttribute("src",srcFoto);
    img.setAttribute("class","img-box");
    var span = document.createElement("span");
    span.setAttribute("class","span-nombre");
    var span2 = document.createElement("span");
    span2.setAttribute("class","nombre");
    span2.appendChild(document.createTextNode(txtNombre));
    /*var br1 = document.createElement("br");
    //var spanPromocion = document.createElement("span");
    //spanPromocion.appendChild(document.createTextNode(txtPromocion));
    //spanPromocion.setAttribute("class","spanPromocion");
    //var br2 = document.createElement("br");
    //var spanNombre = document.createElement("span");
    //spanNombre.appendChild(document.createTextNode(txtNombre));
    //spanNombre.setAttribute("class","spanNombre");*/
    li.appendChild(img);
    li.appendChild(span);
    span.appendChild(span2);
    /*//div.appendChild(br1);
    //div.appendChild(spanPromocion);
    //div.appendChild(br2);
    //div.appendChild(spanNombre);*/
    df.appendChild(li);
    return df;
}
window.addEventListener('load', function () {
  var allCoders = document.getElementById("listaCoders");

    /******Registro de alumnas */
      var coderLima1 = new Coder(1,"Anais Araya","assets/img/coders/1.png");
      var coderLima2 = new Coder(2,"Andrea Miranda","assets/img/coders/2.png");
      var coderLima3 = new Coder(3,"Berenisse Rios","assets/img/coders/3.png");
      var coderLima4 = new Coder(4,"Caterina da Silva","assets/img/coders/4.png");
      var coderLima5 = new Coder(5,"Daniela Sanchez","assets/img/coders/5.png");
      var coderLima6 = new Coder(6,"Francisca Ojeda","assets/img/coders/6.png");
      var coderLima7 = new Coder(7,"Katerina Sandoval","assets/img/coders/7.png");
      var coderLima8 = new Coder(8,"Andrea Cabrera","assets/img/coders/8.png");
      var coderLima9 = new Coder(9,"Ariadna Izaguirre","assets/img/coders/9.png");
      var coderLima10 = new Coder(10,"Carito Juarez","assets/img/coders/10.png");
      var coderLima11 = new Coder(11,"Cristy Castro","assets/img/coders/11.png");
      var coderLima12 = new Coder(12,"Karol Orrillo","assets/img/coders/12.png");
      var coderLima13 = new Coder(13,"Paola Ortiz","assets/img/coders/13.png");
      var coderLima14 = new Coder(14,"Teresa Lara","assets/img/coders/14.png");
      var coderLima15 = new Coder(15,"Arantza Burga","assets/img/coders/15.png");
      var coderLima16 = new Coder(16,"Daguiana Revoredo","assets/img/coders/16.png");
      var coderLima17 = new Coder(17,"Elizabeth Condori","assets/img/coders/17.png");
      var coderLima18 = new Coder(18,"Grecia Rayme","assets/img/coders/18.png");
      var coderLima19 = new Coder(19,"Janine Vega","assets/img/coders/19.png");
      var coderLima20 = new Coder(20,"Michelle More","assets/img/coders/20.png");
      var coderLima21 = new Coder(21,"Misshel Velazquez","assets/img/coders/21.png");
      var coderLima22 = new Coder(22,"Rosario Felix","assets/img/coders/22.png");
      coders.push(coderLima1);
      coders.push(coderLima2);
      coders.push(coderLima3);
      coders.push(coderLima4);
      coders.push(coderLima5);
      coders.push(coderLima6);
      coders.push(coderLima7);
      coders.push(coderLima8);
      coders.push(coderLima9);
      coders.push(coderLima10);
      coders.push(coderLima11);
      coders.push(coderLima12);
      coders.push(coderLima13);
      coders.push(coderLima14);
      coders.push(coderLima15);
      coders.push(coderLima16);
      coders.push(coderLima17);
      coders.push(coderLima18);
      coders.push(coderLima19);
      coders.push(coderLima20);
      coders.push(coderLima21);
      coders.push(coderLima22);
    /*****Fin del registro de alumnas*****/

    printCoderHtml(allCoders);

});
