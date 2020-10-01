<template>
  <div ref="wrapper">
    <canvas
      ref="canvas"
      @mousedown="evtMouseDown"
      @mouseup="evtMouseUp"
      @mouseleave="evtMouseLeave"
      @mousemove="evtMouseMove"
      @resize="setSize">
    </canvas>
    <div class="cursor" ref="cursor"></div>
    <div class="tools">
      <v-btn 
        icon
        @click="removeHistoryItem"
      >
        <v-icon>mdi-reply</v-icon>
      </v-btn>
      <v-btn 
        icon
        @click="removeAllHistory"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-menu
        offset-y
        top
        nudge-left="150"
        transition="scale-transition"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on, attrs }">
          
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
            >
              {{size}}
            </v-btn>
          
        </template>
        <label 
          class="size-item"
          v-bind:style="{width: sizeItem*2 + 40 + 'px'}" 
          v-for="sizeItem in sizes" 
          :key="sizeItem"
        >
          <input type="radio" name="size" v-model="size" v-bind:value="sizeItem">
          <span class="size"
                v-bind:style="{width: sizeItem*3 + 'px', height: sizeItem*3 + 'px'}"
                v-on:click="popups.showSize = !popups.showSize"></span>
        </label>
      </v-menu>
      <v-menu 
        offset-y 
        min-width="300"
        top
        nudge-left="150"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon :color="color">mdi-color-helper</v-icon>
          </v-btn>
        </template>
        <v-color-picker
          hide-canvas
          hide-inputs
          v-model="color"
        ></v-color-picker>
      </v-menu>
    </div>
    
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
    options: {
      restrictY: false,
      restrictX: false
    },
    size: 3,
    sizes: [1, 3, 6, 8, 10, 12],
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
    getDummyItem() {
      var lastPoint = this.history[this.history.length - 1];
      return {
        isDummy: true,
        x: lastPoint ? lastPoint.x : 0,
        y: lastPoint ? lastPoint.y : 0,
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
    moveMouse(e) {
      let x = e.clientX;
      let y = e.clientY;

      var cursor = this.$refs.cursor;
      cursor.style.transform = `translate(${x-5}px, ${y-5}px)`;
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
    setSize() {
      const wrapper = this.$refs.wrapper;
      this.c.width = wrapper.clientWidth*0.95;
      this.c.height = 360;
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
      var gridSize = 25;
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
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';

      var prevItem = this.history[i-2];
      if(i < 2) {
        return false;
      }
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
        this.ctx.lineTo(item.x, item.y);
        this.ctx.lineTo(item.x, item.y);
        this.ctx.stroke();
        this.ctx.closePath();
      }
    }
  }
}
</script>
<style scoped>
canvas {
  display: block;
  margin: 10px auto 0;
  cursor: none;
}
.tools {
  text-align:center;
  background-color: beige;
  margin: 0 20px 10px;
  border-radius: 20px;
}
.tools button {
  padding-left: 25px;
  padding-right: 25px;
}
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid rgb(30, 30, 30);
  z-index: 100;
  pointer-events: none;
  user-select: none;
  mix-blend-mode: difference;
  opacity: 0;
  transition: opacity 1s;
}
canvas:hover + .cursor{
  opacity: 1;
}
canvas:active + .cursor{
  border-color: rgb(60, 60, 60);
}

.size-item {
	height: 60px;
	display: inline-flex;
	position: relative;
	justify-content: center;
	align-items: center;
	vertical-align: top;
	cursor: pointer;	
  background-color: white;
}

.size-item input {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
}

.size-item .size {
  background-color: rgb(140, 140, 140);
  display: inline-block;
  border-radius: 50%;
  transition: all .15s;
  transform: translate(-50%, -50%) scale(.6);
  position: absolute;
  top: 50%;
  left: 50%;
}

.size-item .size:hover {
  opacity: .8;
}
.size-item input:checked + .size {
  background-color: black;
}
</style>