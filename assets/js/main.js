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

    li.appendChild(img);
    li.appendChild(span);
    span.appendChild(span2);

    df.appendChild(li);
    return df;
}
window.addEventListener('load', function () {
  var allCoders = document.getElementById("listaCoders");

    /******Registro de alumnas */
      var coderLima1 = new Coder(1,"Fiorela Quispe","assets/img/coders/1.png");
      var coderLima2 = new Coder(2,"Maria Lourdes","assets/img/coders/2.png");
      var coderLima3 = new Coder(3,"Leydi Maldonado","assets/img/coders/3.png");
      var coderLima4 = new Coder(4,"Yesenia","assets/img/coders/4.png");
      var coderLima5 = new Coder(5,"Miriam Mendoza","assets/img/coders/5.png");
      var coderLima6 = new Coder(6,"Elizabeth Condori","assets/img/coders/6.png");
      var coderLima7 = new Coder(7,"Arantza Burga","assets/img/coders/7.png");
      var coderLima8 = new Coder(8,"Grecia Rayme","assets/img/coders/8.png");
      var coderLima9 = new Coder(9,"Yanine Vega","assets/img/coders/9.png");
      var coderLima10 = new Coder(10,"Rosario Felix","assets/img/coders/10.png");
      var coderLima11 = new Coder(11,"Daguiana Revolledo","assets/img/coders/11.png");
      var coderLima12 = new Coder(12,"Jenny Mishel  Velazquez","assets/img/coders/12.png");
      var coderLima13 = new Coder(13,"Nadia Cuadros","assets/img/coders/13.png");
      var coderLima14 = new Coder(14,"Misshel More","assets/img/coders/14.png");
      var coderLima15 = new Coder(15,"Marilu Llamocca","assets/img/coders/15.png");
      var coderLima16 = new Coder(16,"Mariel del Rosario","assets/img/coders/16.png");
      var coderLima17 = new Coder(17,"Fiorela Cisneros","assets/img/coders/17.png");
      var coderLima18 = new Coder(18,"Geraldine Chauca","assets/img/coders/18.png");
      var coderLima19 = new Coder(19,"Yelitza Choque","assets/img/coders/19.png");
      var coderLima20 = new Coder(20,"Sandra","assets/img/coders/20.png");
      var coderLima21 = new Coder(21,"Enma","assets/img/coders/21.png");
      var coderLima22 = new Coder(22,"Danna","assets/img/coders/22.png");
      var coderLima23 = new Coder(23,"Nadia Cuadros","assets/img/coders/13.png");
      var coderLima24 = new Coder(24,"Misshel More","assets/img/coders/14.png");
      var coderLima25 = new Coder(25,"Marilu Llamocca","assets/img/coders/15.png");
      var coderLima26 = new Coder(26,"Mariel del Rosario","assets/img/coders/16.png");
      var coderLima27 = new Coder(27,"Fiorela Cisneros","assets/img/coders/17.png");
      var coderLima28 = new Coder(28,"Geraldine Chauca","assets/img/coders/18.png");
      var coderLima29 = new Coder(29,"Yelitza Choque","assets/img/coders/19.png");
      var coderLima30 = new Coder(30,"Sandra","assets/img/coders/20.png");
      var coderLima31 = new Coder(31,"Enma","assets/img/coders/21.png");
      var coderLima32 = new Coder(32,"Danna","assets/img/coders/22.png");
      var coderLima33 = new Coder(33,"Nadia Cuadros","assets/img/coders/13.png");
      var coderLima34 = new Coder(34,"Misshel More","assets/img/coders/14.png");
      var coderLima35 = new Coder(35,"Marilu Llamocca","assets/img/coders/15.png");
      var coderLima36 = new Coder(36,"Mariel del Rosario","assets/img/coders/16.png");
      var coderLima37 = new Coder(37,"Fiorela Cisneros","assets/img/coders/17.png");
      var coderLima38 = new Coder(38,"Geraldine Chauca","assets/img/coders/18.png");
      var coderLima39 = new Coder(39,"Yelitza Choque","assets/img/coders/19.png");
      var coderLima40 = new Coder(40,"Sandra","assets/img/coders/20.png");
      var coderLima41 = new Coder(41,"Enma","assets/img/coders/21.png");
      var coderLima42 = new Coder(42,"Danna","assets/img/coders/22.png");
      var coderLima43 = new Coder(43,"Nadia Cuadros","assets/img/coders/13.png");
      var coderLima44 = new Coder(44,"Misshel More","assets/img/coders/14.png");
      var coderLima45 = new Coder(45,"Marilu Llamocca","assets/img/coders/15.png");
      var coderLima46 = new Coder(46,"Mariel del Rosario","assets/img/coders/16.png");
      var coderLima47 = new Coder(47,"Fiorela Cisneros","assets/img/coders/17.png");
      var coderLima48 = new Coder(48,"Geraldine Chauca","assets/img/coders/18.png");
      var coderLima49 = new Coder(49,"Yelitza Choque","assets/img/coders/19.png");
      var coderLima50 = new Coder(50,"Sandra","assets/img/coders/20.png");
      var coderLima51 = new Coder(51,"Enma","assets/img/coders/21.png");
      var coderLima52 = new Coder(52,"Danna","assets/img/coders/22.png");
      var coderLima53 = new Coder(53,"Danna","assets/img/coders/22.png");
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
      coders.push(coderLima23);
      coders.push(coderLima24);
      coders.push(coderLima25);
      coders.push(coderLima26);
      coders.push(coderLima27);
      coders.push(coderLima28);
      coders.push(coderLima29);
      coders.push(coderLima30);
      coders.push(coderLima31);
      coders.push(coderLima32);
      coders.push(coderLima33);
      coders.push(coderLima34);
      coders.push(coderLima35);
      coders.push(coderLima36);
      coders.push(coderLima37);
      coders.push(coderLima38);
      coders.push(coderLima39);
      coders.push(coderLima40);
      coders.push(coderLima41);
      coders.push(coderLima42);
      coders.push(coderLima43);
      coders.push(coderLima44);
      coders.push(coderLima45);
      coders.push(coderLima46);
      coders.push(coderLima47);
      coders.push(coderLima48);
      coders.push(coderLima49);
      coders.push(coderLima50);
      coders.push(coderLima51);
      coders.push(coderLima52);
      coders.push(coderLima53);
    /*****Fin del registro de alumnas*****/

    printCoderHtml(allCoders);

});
