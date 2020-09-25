<template>
  <div>
    <v-container class="app-wrapper" style="border: 1px solid blue">
      <v-row justify="center">
        <canvas 
          style="border: 1px solid pink"
          ref="canvas"
          @mousedown="evtMouseDown"
          @mouseup="evtMouseUp"
          @mouseleave="evtMouseLeave"
          @mousemove="evtMouseMove"
          @resize="evtResize">
        </canvas>
      </v-row>
      <div ref="cursor" class="cursor"></div>
      <v-row style="border: 1px solid black" justify="center">
        <v-col md="1">
          <v-btn 
            icon
            @click="removeHistoryItem"
          >
            <v-icon>mdi-reply</v-icon>
          </v-btn>
        </v-col>
        <v-col md="1">
          <v-btn 
            icon
            @click="removeAllHistory"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
        <v-col md="1">
          <v-btn 
            icon
            @click="removeItem"
          >
            <v-icon>mdi-eraser</v-icon>
          </v-btn>
        </v-col>
        <v-col md="1">
          <v-btn 
            icon
            @click="popups.showOptions = !popups.showOptions"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-col>
        <v-col md="1">
          <v-btn 
            icon
            @click="alert('!')"
          >
            <v-icon>mdi-radiobox-marked</v-icon>
          </v-btn>
        </v-col>
        <v-col md="1">
          <v-btn 
            icon
            @click="alert('!')"
          >
            <v-icon>mdi-color-helper</v-icon>
          </v-btn>
        </v-col>
        <v-col md="1">
          <v-btn 
            icon
            @click="alert('!')"
          >
            <v-icon>mdi-cloud-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>
<script>
export default {
  name: 'canvas-sutaku',
  data: () => ({
    c: null,
    ctx: null,
    mouseDown: false,
    mouseX: 0,
    mouseY: 0,
    history: [],
    color: '#13c5f7',
    popups: {
      showColor: false,
      showSize: false,
      showWelcome: true,
      showSave: false,
      showOptions: false
    },
    options: {
      restrictY: false,
      restrictX: false
    },
    save: {
      name: '',
      saveItems: []
    },
    size: 12,
    colors: [
      '#d4f713',
			'#13f7ab',
			'#13f3f7',
			'#13c5f7',
			'#138cf7',
			'#1353f7',
			'#2d13f7',
			'#7513f7',
			'#a713f7',
			'#d413f7',
			'#f713e0',
			'#f71397',
			'#f7135b',
			'#f71313',
			'#f76213',
			'#f79413',
			'#f7e013'
    ],
    sizes: [6, 12, 24, 48],
    weights: [2,4,6]
  }),
  mounted() {
    this.c = this.$refs.canvas;
    this.ctx = this.c.getContext('2d');
    this.setSize();
    this.redraw();
  },
  methods: {
    removeHistoryItem() {
      this.history.splice(this.history.length-2, 1);
      this.redraw();
    },
    removeAllHistory() {
      this.history = [];
      this.redraw();
    },
    removeItem() {
      // let a = [ {f1: 1, f2: 2}, {f1: 3, f2: 4} ];
      // const idx = a.findIndex(function(item) {return item.f1 === 1}) // findIndex = find + indexOf 
      // if (idx > -1) a.splice(idx, 1)

    },
    getDummyItem() {
      var lastPoint = this.history[this.history.length - 1];
      return {
        isDummy: true,
        x: lastPoint.x,
        y: lastPoint.y,
        c: null,
        r: null
      }
    },
    setDummyPoint() {
      var item = this.getDummyItem();
      this.history.push(item);
      this.draw(item, this.history.length);
    },
    evtMouseDown(e) {
      this.mouseDown = true;
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
      this.setDummyPoint();
    },
    evtMouseUp() {
      if(this.mouseDown) {
        this.setDummyPoint();
      }
      this.mouseDown = false;
    },
    evtMouseLeave() {
      if(this.mouseDown) {
        this.setDummyPoint();
      }
      this.mouseDown = false;
    },
    evtMouseMove(e) {
      this.moveMouse(e);

      if(this.mouseDown) {
        //this.mouseX = this.mouseX;
        //this.mouseY = this.mouseY;

        if(!this.options.restrictX) {
          this.mouseX = e.offsetX;
        }
        if(!this.options.restrictY) {
          this.mouseY = e.offsetY;
        }

        var item = {
          isDummy: false,
          x: this.mouseX,
          y: this.mouseY,
          c: this.color,
          r: this.size
        }

        this.history.push(item);
        this.draw(item, this.history.length);
      }
    },
    evtResize() {
      this.setSize();
      this.redraw();
    },
    setSize() {
      this.c.width = "700";
      this.c.height = "400";
    },
    moveMouse(e) {
      let x = e.offsetX;
      let y = e.offsetY;

      var cursor = this.$refs.cursor;
      cursor.style.transform = `translate(${x-10}px, ${y-10}px)`;
    },
    redraw() {
      this.ctx.clearRect(0, 0, this.c.width, this.c.height);
      this.drawBgDots();

      if(!this.history.length) {
        return true;
      }

      this.history.forEach((item, i) => {
        this.draw(item, i);
      })
    },
    drawBgDots() {
      var gridSize = 50;
      this.ctx.fillStyle = 'rgba(0, 0, 0, .2)';
      for(var i = 0; i*gridSize < this.c.width; i++) {
        for(var j = 0; j*gridSize < this.c.height; j++) {
          if(i > 0 && j > 0) {
            this.ctx.beginPath();
            this.ctx.rect(i * gridSize, j * gridSize, 2, 2);
            this.ctx.fill();
            this.ctx.closePath();
          }
        }
      }
    },
    draw(item, i) {
      console.log(item);
      console.log(i);
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';

      var prevItem = this.history[i-2];
      if(i < 2) {
        return false;
      }
      console.log(prevItem);
      if(!item.isDummy && !this.history[i-1].isDummy && !prevItem.isDummy) {
        this.ctx.strokeStyle = item.c;
        this.ctx.lineWidth = item.r;

        this.ctx.beginPath();
        this.ctx.moveTo(prevItem.x, prevItem.y);
        this.ctx.lineTo(item.x, item.y);
        this.ctx.stroke();
        this.ctx.closePath();
      } else if(!item.isDummy) {
        this.ctx.strokeStyle = item.c;
        this.ctx.lineWidth = item.r;

        this.ctx.beginPath();
        this.ctx.moveTo(item.x, item.y);
        this.ctx.lineTo(item.x, item.y);
        this.ctx.stroke();
        this.ctx.closePath();
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid rgb(30, 30, 30);
  pointer-events: none;
  user-select: none;
  mix-blend-mode: difference;
  opacity: 0;
  transition: opacity 1s;
  z-index: 200;
  background-color: black;
}
canvas {
  cursor: none;

  &:hover + .cursor {
    opacity: 1;
  }
  &:active + .cursor {
    border-color: rgb(60, 60, 60);
  }

}
</style>
