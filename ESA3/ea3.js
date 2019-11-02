// Get the WebGL context.
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('experimental-webgl');


// Pipeline setup.
gl.clearColor(0.1, 0, 0.3, 1);

// Backface culling.
gl.frontFace(gl.CCW);
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.BACK); // or gl.FRONT

// Compile vertex shader.
var vsSource = ''+
	'attribute vec3 pos;'+
	'attribute vec4 col;'+
	'varying vec4 color;'+
	'void main(){'+
	'color = col;'+
	'gl_Position = vec4(pos*0.05-0.5, 1);'+
	'}';
var vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);

// Compile fragment shader.
fsSouce = 'precision mediump float;'+
	'varying vec4 color;'+
	'void main() {'+
	'gl_FragColor = color;'+
	'}';

var fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSouce);
gl.compileShader(fs);

// Link shader together into a program.
var prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);
gl.useProgram(prog);

// Vertex data. Positions.
var vertices = new Float32Array([ //x,y,z
	-2,-3,0,      // 0
	22,-3,0,      // 1
	25,25,0,      // 2
	-5,25,0,      // 3

	-5,25,0,      // 4
	3,25,0,      // 5
	-5.5,27,0,    // 6

	17,25,0,      // 7
	25,25,0,      // 8
	25.5,27,0,    // 9
	10,26,0,      //10

	-3,25,0,      //11
	10,17,0,      //12
	23,25,0,      //13

	3,23,0,       //14
	10,20,0,      //15
	17,23,0,      //16

	6,15,0,       //17
	10,10,0,      //18
	10,13,0,      //19

	14,15,0,      //20

	8,13,0,       //21
	8,3,0,        //22
	10,2,0,       //23

	12,3,0,       //24
	12,13,0,      //25

	10,-8,0,      //26

	-3,16,0,      //27
	2,12,0,       //28
	3,13,0,       //29

	2,0,0,         //30

	23,16,0,       //31
	17,13,0,       //32
	18,12,0,       //33

	18,0,0,         //34

	1,12,0,         //35
	10,12.5,0,      //36
	1,14,0,         //37

	2,10,0,         //38

	19,12,0,         //39
	19,14,0,         //40

	17.3,10,0,       //41

	2.5,-5,0,        //42
	4.5,-3,0,        //43
	4,-2,0,          //44

	16,-2,0,         //45

	15.5,-3,0,      //46
	17.5,-5,0       //47
]);

// Colors as rgba.
var colors = new Float32Array([ //x,y,z
	1,0,0,1,    // 0 rot
	1,0,0,1,    // 1 rot
	0,0,1,1,    // 2 blau
	0,0,1,1,    // 3 blau

	0,0,1,1,    // 4 blau
	0,0,1,1,    // 5 blau
	0,1,1,1,    // 6 blau

	0,0,1,1,    // 7 blau
	0,0,1,1,    // 8 blau
	0,1,1,1,    // 9 blau

	0,1,1,1,    // 10 blau mit grün

	0,0,1,1,    // 11 blau
	0,0,1,1,    // 12 blau
	0,0,1,1,    // 13 blau

	0,0,1,1,    // 14 rot
	1,0,0,1,    // 15 rot
	0,0,1,1,    // 16 blau

	1,0,0,1,     // 17 rot
	1,0,0,1,     // 18 rot
	1,0,0,1,      // 19 rot

	1,0,0,1,      // 20 rot

	1,0,0,1,      // 21 rot
	1,0,0,1,      // 21 rot
	1,1,0,1,       // 23 rot

	1,0,0,1,      // 24 rot
	1,0,0,1,      // 25 rot

	1,1,0,1,      // 26 rot

	0,0,1,1,    // 27 blau mit grün
	0,1,1,1,    // 28 blau mit grün
	0,1,1,1,    // 29 blau mit grün

	1,1,0,1,    // 30 blau mit grün

	0,0,1,1,    // 31 blau mit grün
	0,1,1,1,    // 32 blau mit grün
	0,1,1,1,    // 33 blau mit grün

	1,1,0,1,    // 34 blau mit grün

	1,1,0,1,     // 35 rot
	1,0,1,1,     // 36 rot
	1,1,0,1,      // 37 rot

	1,0,0,1,      // 38 rot

	1,1,0,1,      // 39 rot
	1,1,0,1,      // 40 rot
	1,0,0,1,      // 41 rot

	0,1,1,1,    // 42 blau mit grün
	0,1,1,1,    // 43 blau mit grün
	0,0,1,1,    // 44 blau mit grün

	0,0,1,1,    // 45 blau mit grün

	0,1,1,1,    // 46 blau mit grün
	0,0,1,1    // 47 blau mit grün
]);

// Index data.
var indices = new Uint16Array([
	0,1,2,      //0
	0,2,3,      //1
	4,5,6,      //Ohr L
	7,8,9,      //Ohr R
	5,7,10,     //Kopf Oben
	11,12,13,   //Stirn Schatten
	14,15,16,   // Stirn Dreieck
	27,28,29,   //Wange L
	28,30,29,   //Wange L
	31,32,33,   //Wange R
	32,34,33,    //Wange R
	35,36,37,     //Auge L
	35,38,36,     //Auge L
	36,39,40,     //Auge R
	36,41,39,     //Auge R
	17,18,19,   // Nasenflügel links
	18,20,19,   // Nasenflügel Rechts
	21,22,23,   // Nase L
	23,24,25,   // Nase R
	21,23,25,   // Nase M
	0,26,1,     //Kinn
	42,43,44,     // Mundwinkel L
	43,45,44,     //Lippe L
	43,46,45,     //Lippe R
	46,47,45      // Mundwinkel R
]);



// Setup position vertex buffer object.
var vboPos = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboPos);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Bind vertex buffer to attribute variable.
var posAttrib = gl.getAttribLocation(prog, 'pos');
gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(posAttrib);



// Setup color vertex buffer object.
var vboCol = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboCol);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

// Bind vertex buffer to attribute variable.
var colAttrib = gl.getAttribLocation(prog, 'col');
gl.vertexAttribPointer(colAttrib, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(colAttrib);



// Setup index buffer object.
var ibo = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices,
	gl.STATIC_DRAW);
ibo.numerOfEmements = indices.length;

// Clear framebuffer and render primitives.
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawElements(gl.TRIANGLES, ibo.numerOfEmements,
	gl.UNSIGNED_SHORT, 0);
