// PARTICLE JS
particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);


// Validasi
function doinsert() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if(name==""&&email==""&&message==""){
      alert('Input your full name'+'\n'+'Input your email'+'\n'+'Input your message'+'\n\n\n'+'Thanks a lot');
  }
  else if(name==""){
      document.getElementsByName("nama")[0].placeholder="Please input your name";
  }
  else if (email == "") {
      document.getElementsByName("email")[0].placeholder="Please input your email";
  }
  else if (message == "") {
      document.getElementsByName("pesan")[0].placeholder="Please input your message";
  }
  else{
    alert('Berhasil !!'+'Nama:'+nama+'\n'+'Email:'+email+'\n'+'Pesan:'+pesan);
  }
  
}


// MESSEGE SEND
const scriptURL = "https://script.google.com/macros/s/AKfycbwZ_5LCpGEixrnivyvxnpIJqO-qiN3W2lRFZe6Y0grSjDdwfPAXbILTH2HtD7v_g5Me/exec";
const form = document.forms["contactMe"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // ketika submit di klik tampilkan loading dan hilangkan tombol kirim
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        // setelah sukses terkirim maka munculkan lgi tombol kirim dan hilangkan loadingnya
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        // menampilkan alert pesan sudah sukses dikirim
        myAlert.classList.toggle("d-none");
        // form reset tulisan nama pemai dan pesan jadi kosong lgi
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  });


// LINK ACTIVE
// 1. tangkap element dengan class menu
const menu = document.querySelector(".navbar-nav");

// 2. jika element dengan class menu diklik
menu.addEventListener('click', function(e) {
    // 3. maka ambil element apa yang diklik oleh user
    const targetMenu = e.target;

    // 4. lalu cek, jika element itu adalah link dengan class menu__link
    if(targetMenu.classList.contains('nav-link')) {
            
        // 5. maka ambil menu link yang aktif
        const menuLinkActive = document.querySelector("ul li a.active");

        // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
        if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {

            // 7. maka hapus class active pada menu yang sedang aktif
            menuLinkActive.classList.remove('active');
        }

        // 8. terakhir tambahkan class active pada menu yang di klik oleh user
        targetMenu.classList.add('active');
    }
});


// DARK MODE
function isDark()
{
  let isDark = localStorage.getItem("darkMode");
  
  document.getElementsByClassName("checkbox")[0].checked = isDark == 1 ? true : false;
  localStorage.setItem("darkMode", isDark);
  let ubah = document.body;
  localStorage.getItem("darkMode") == 1 ? ubah.classList.toggle('dark')
  : ubah.classList.remove('dark');
}

function darkMode() {
  let isDarkMode = localStorage.getItem("darkMode") == 1 ? 0 : 1;
  localStorage.setItem("darkMode", isDarkMode);
  isDark();
}
isDark();


// HUMBERGER MENU
function myFunction(x) {
  x.classList.toggle("change");
}


// TIME
function showTime(){
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}
showTime();


