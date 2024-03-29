

function toggleAction(button) {
    button.classList.toggle("active");
    document.getElementById("logo1").classList.toggle("active");
    document.getElementById("logo2").classList.toggle("active");
    document.getElementById("navbar").classList.toggle("active");
    document.getElementById("pages").classList.toggle("active");
  }

function hideNav(button) {
  button.classList.remove("active");
  document.getElementById("logo").classList.remove("active")
  document.getElementById("logo1").classList.remove("active");
  document.getElementById("logo2").classList.remove("active");
  document.getElementById("navbar").classList.remove("active");
  document.getElementById("pages").classList.remove("active");
}
  
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap {}";
    document.body.appendChild(css);
};


window.onscroll = function() {
    var phrase1 = this.document.getElementById("phrase1");
    var phrase2 = this.document.getElementById("phrase2");
    var phrase3 = this.document.getElementById("phrase3");
    var phrase4 = this.document.getElementById("phrase4");
    var phrase5 = this.document.getElementById("phrase5");
    var phrase6 = this.document.getElementById("phrase6");
    var phrase7 = this.document.getElementById("phrase7");

    var scrollPhrase = document.documentElement.scrollTop * 1;
    // var scrollPhrase2 = document.documentElement.scrollTop * 1;
    // var scrollPhrase3 = document.documentElement.scrollTop * 1;

    phrase1.style.transform = "translateX(" + scrollPhrase + "px)";
    phrase2.style.transform = "translateX(-" + scrollPhrase + "px)";
    phrase3.style.transform = "translateX(" + scrollPhrase + "px)";
    phrase4.style.transform = "translateX(-" + scrollPhrase + "px)";
    phrase5.style.transform = "translateX(" + scrollPhrase + "px)";
    phrase6.style.transform = "translateX(-" + scrollPhrase + "px)";
    phrase7.style.transform = "translateX(" + scrollPhrase + "px)";

    phrase1.style.transition = "transform cubic-bezier( 0.07, 0.19, 0.05, 0.99 ) 1s";
    phrase2.style.transition = "transform cubic-bezier( 0.07, 0.19, 0.05, 0.99 ) 1s";
    phrase3.style.transition = "transform cubic-bezier( 0.07, 0.19, 0.05, 0.99 ) 1s";
    phrase4.style.transition = "transform cubic-bezier( 0.07, 0.19, 0.05, 0.99 ) 1s";
    phrase5.style.transition = "transform cubic-bezier( 0.07, 0.19, 0.05, 0.99 ) 1s";
    phrase6.style.transition = "transform cubic-bezier( 0.07, 0.19, 0.05, 0.99 ) 1s";
    phrase7.style.transition = "transform cubic-bezier( 0.07, 0.19, 0.05, 0.99 ) 1s";

    phrase1.style.transitionTimingFunction
};

// const element = document.querySelector(".resume-pic-container");
// VanillaTilt.init(element);

