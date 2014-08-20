function starfield() {
    this.s = [];
    this.init = function(stars) {
        for(var i = 0; i < stars; i++) {
            this.s.push({
                'x': Math.random() * canvas.width * 2.0,
                'y': Math.random() * canvas.height * 2.0,
                'z': 0.1 + Math.random() * 0.7
            });
        }
    }
    this.draw = function() {
        for(var i = 0; i < this.s.length; i++) {
            c.fillStyle = "rgb(" + (100 + Math.floor(155.0 * this.s[i].z)) + "," + (130 + Math.floor(125.0 * this.s[i].z)) + "," + (150 + Math.floor(105.0 * this.s[i].z)) + ")";
            while(this.s[i].x - cam.x * this.s[i].z > canvas.width * 1.5) this.s[i].x -= canvas.width * 2.0 * (1.0 / this.s[i].z);
            while(this.s[i].y - cam.y * this.s[i].z > canvas.height * 1.5) this.s[i].y -= canvas.height * 2.0 * (1.0 / this.s[i].z);
            while(this.s[i].x - cam.x * this.s[i].z < canvas.width * -0.5) this.s[i].x += canvas.width * 2.0 * (1.0 / this.s[i].z);
            while(this.s[i].y - cam.y * this.s[i].z < canvas.height * -0.5) this.s[i].y += canvas.height * 2.0 * (1.0 / this.s[i].z);
            c.fillRect(this.s[i].x - cam.x * this.s[i].z, this.s[i].y - cam.y * this.s[i].z, 3, 3);
        }
    }
}