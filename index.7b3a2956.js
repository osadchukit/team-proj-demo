!function(){var e=document.querySelector(".students"),t=document.querySelector(".box"),s=(document.querySelector(".teams_desk"),document.querySelector("#p1")),a=document.querySelector(".fon"),c=document.querySelector("#p2"),i=document.querySelector("#p3"),d=document.querySelector("#p4"),r=document.querySelector("#p5"),o=document.querySelector("#p6"),u=document.querySelector("#p7"),l=document.querySelector("#p8"),m=document.querySelector("#p9");function _(){s.classList.remove("teams_desk_active"),c.classList.remove("teams_desk_active"),i.classList.remove("teams_desk_active"),d.classList.remove("teams_desk_active"),r.classList.remove("teams_desk_active"),o.classList.remove("teams_desk_active"),u.classList.remove("teams_desk_active"),l.classList.remove("teams_desk_active"),m.classList.remove("teams_desk_active")}e.addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("box_active"),a.classList.add("fon_active")})),t.addEventListener("click",(function(e){e.preventDefault(),_(),function(e){"t1"===e.target.getAttribute("id")&&s.classList.add("teams_desk_active");"t2"===e.target.getAttribute("id")&&c.classList.add("teams_desk_active");"t3"===e.target.getAttribute("id")&&i.classList.add("teams_desk_active");"t4"===e.target.getAttribute("id")&&d.classList.add("teams_desk_active");"t5"===e.target.getAttribute("id")&&r.classList.add("teams_desk_active");"t6"===e.target.getAttribute("id")&&o.classList.add("teams_desk_active");"t7"===e.target.getAttribute("id")&&u.classList.add("teams_desk_active");"t8"===e.target.getAttribute("id")&&l.classList.add("teams_desk_active");"t9"===e.target.getAttribute("id")&&m.classList.add("teams_desk_active")}(e)})),a.addEventListener("click",(function(e){console.log(e),t.classList.toggle("box_active"),_()}))}();
//# sourceMappingURL=index.7b3a2956.js.map
