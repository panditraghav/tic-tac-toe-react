import gsap from "gsap";

export function crossAnimation(selector) {
    var tl = gsap.timeline();
    tl.to(selector(".first"), {
        strokeDashoffset: 0,
    });
    tl.to(selector(".second"), {
        strokeDashoffset: 0,
    });
    tl.timeScale(2);//Because there are two line so we have to double the speed
    return tl;
}

export function circleAnimation(selector){
    var tl = gsap.timeline();
    tl.to(selector(".circle"),{
        strokeDashoffset: 0
    });

    return tl;
}

export function boardAnimatmion(selector){
    var tl = gsap.timeline();
    tl.to(selector("#LineYLeft,#LineYRight"),{
        strokeDashoffset: 0
    });
    tl.to(selector("#LineXUpper,#LineXLower"),{
        strokeDashoffset: 0
    });

    return tl;
};

function lineAnim(selector){
    let tl = gsap.timeline();

    let fromPropertiesSvg = {
        visibility: "visible",
        strokeDasharray: "404px 404px",
        strokeDashoffset: "404px",
    }
    let toPropertiesSvg = {
        strokeDashoffset: 0,
    }

    tl.fromTo(selector(".line svg"),fromPropertiesSvg,toPropertiesSvg)
    // tl.fromTo(selector(".line svg"),fromPropertiesSvg,toPropertiesSvg)
    
    return tl;

}

function hideBoardAnim(selector){
    let tl = gsap.timeline();

    tl.to(selector(".line, .board"),{
        opacity: 0,
    })
    return tl;
}

function displayResultAnim(selector){

}

export function transitionAnim(selector){
    var tl = gsap.timeline({delay: 1})
    .add(lineAnim(selector))
    .add(hideBoardAnim(selector),"+=1")

    return tl;
}