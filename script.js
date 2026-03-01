// Typing effect
const text = "Desarrollador Web ";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,50);
  }
}
typing();

// Navbar cambia al hacer scroll
window.addEventListener("scroll",()=>{
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Animación scroll
const hidden = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

hidden.forEach(el=>observer.observe(el));

// Contador animado
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
  counter.innerText = '0';

  const updateCounter = ()=>{
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 100;

    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter,20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
