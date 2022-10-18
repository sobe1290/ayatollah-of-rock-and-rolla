const allCrowns = document.getElementsByName("avatar");

allCrowns.forEach((element) => {
    
    switch (true) {
        case (element.dataset.powerlevel <2000):
            element.src = "../images/bronzeCrown1.png"
            break;
        case (element.dataset.powerlevel  >= 2000 && element.dataset.powerlevel  < 4000): 
            element.src = "../images/silverCrown1.png"
            break;
        case (element.dataset.powerlevel  >= 4000 && element.dataset.powerlevel  < 6000):
            element.src = "../images/goldCrown1.png"
            break;
        case (element.dataset.powerlevel  >= 6000):
            element.src = "../images/jewelCrown1.png"
            break;
        default:
            element.src = "../images/bronzeCrown1.png"
            break;
    
    }

  })
