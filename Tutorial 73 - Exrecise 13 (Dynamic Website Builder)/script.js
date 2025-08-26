function createCard(title, cName, views, monthsOld, duration, thumbnail){
    if (views >= 1000000) {
        views = views / 1000000 + "M";
    }
    else if (views >= 1000) {
        views = views / 1000 + "K";
    }

    document.querySelector(".title").innerHTML = `<h2>${title}</h2>`;
    document.querySelector(".details").innerHTML = cName + "  .  " + views + " views" + "  .  " + monthsOld + " months ago";
    document.querySelector(".duration").innerHTML = duration;
    document.querySelector(".thumbnail").src = thumbnail;
}

createCard("Introduction to Backend | Installing MongoDB and Node.JS", "CodeWithHarry", 500000, 3, "20:12", "https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB19wZ1Xom2N5iWreyZPUh7UXs2gA");