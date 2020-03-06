var TypeWriter = {
    lines: [],
    colors: [],
    loopCount: 0,
    timer: null,
    letterWriteTime: 0,
    element: null
};
TypeWriter.AddLine = function (text, color) {
    this.lines.push(text);
    color = color || "";
    this.colors.push(color);
    return this;
};
TypeWriter.SetLetterWriteTime = function (writeTime) {
    this.letterWriteTime = writeTime;
    return this;
};
TypeWriter.SetCallback = function(callbackFunc) {
	this.callback = callbackFunc;
	return this;
};
TypeWriter.Init = function (element) {
    this.element = element || this.element;
    let word = this.lines[this.loopCount].split("");
    let color = this.colors[this.loopCount];
	let callback = this.callback;

    if (color) {
        var colorElement = document.createElement("span");
        colorElement.style.color = color;
        element.appendChild(colorElement);
        element = colorElement;
    }

    var loopTyping = function () {
        if (word.length > 0) {
            element.innerHTML += word.shift();
        } else if (word.length == 0) {
			clearTimeout(this.timer);
            element = TypeWriter.element;

            if (TypeWriter.loopCount != TypeWriter.lines.length - 1) {
                element.innerHTML += "<br/>";
                TypeWriter.loopCount++;
                TypeWriter.Init(element);
            } else {
				if (!callback) {
					element.classList.add("fadeOut");
					setTimeout(function () {
						element.remove();
					}, 320);
				} else {
					callback();
				}
            }
			
			return;
		}

        let letterWriteTime = TypeWriter.letterWriteTime;
        if (letterWriteTime == "simulation") {
            letterWriteTime = 230 - Math.random() * 100;
        }

        this.timer = setTimeout(loopTyping, letterWriteTime);
    };
    loopTyping();
};