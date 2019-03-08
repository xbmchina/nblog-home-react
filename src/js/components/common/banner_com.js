import React from 'react';

export default class bannerCom extends React.Component {

    componentDidMount() {
        this.DrawCanvas();
    }

    DrawCanvas() {
        var canvas = this.refs.canvasBanner;
        canvas.width = window.document.body.clientWidth;    //需要重新设置canvas宽度，因为dom加载完毕后有可能没有滚动条
        var ctx = canvas.getContext('2d');

        ctx.strokeStyle = (new Color(150)).style;

        var dotCount = 20; //圆点数量
        var dotRadius = 70; //产生连线的范围
        var dotDistance = 70;   //产生连线的最小距离
        var screenWidth = screen.width;
        if (screenWidth >= 768 && screenWidth < 992) {
            dotCount = 130;
            dotRadius = 100;
            dotDistance = 60;
        } else if (screenWidth >= 992 && screenWidth < 1200) {
            dotCount = 140;
            dotRadius = 140;
            dotDistance = 70;
        } else if (screenWidth >= 1200 && screenWidth < 1700) {
            dotCount = 140;
            dotRadius = 150;
            dotDistance = 80;
        } else if (screenWidth >= 1700) {
            dotCount = 200;
            dotRadius = 150;
            dotDistance = 80;
        }
        //默认鼠标位置 canvas 中间
        var mousePosition = {
            x: 50 * canvas.width / 100,
            y: 50 * canvas.height / 100
        };
        //小圆点
        var dots = {
            count: dotCount,
            distance: dotDistance,
            d_radius: dotRadius,
            array: []
        };

        function colorValue(min) {
            return Math.floor(Math.random() * 255 + min);
        }

        function createColorStyle(r, g, b) {
            return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
        }

        function mixComponents(comp1, weight1, comp2, weight2) {
            return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
        }

        function averageColorStyles(dot1, dot2) {
            var color1 = dot1.color,
                color2 = dot2.color;

            var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
                g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
                b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
            return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
        }

        function Color(min) {
            min = min || 0;
            this.r = colorValue(min);
            this.g = colorValue(min);
            this.b = colorValue(min);
            this.style = createColorStyle(this.r, this.g, this.b);
        }

        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();

            this.radius = Math.random() * 2;

            this.color = new Color();
        }

        Dot.prototype = {
            draw: function () {
                ctx.beginPath();
                ctx.fillStyle = "#fff";
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            }
        };

        function createDots() {
            for (var i = 0; i < dots.count; i++) {
                dots.array.push(new Dot());
            }
        }

        function moveDots() {
            for (var i = 0; i < dots.count; i++) {

                var dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = dot.vx;
                    dot.vy = -dot.vy;
                }
                else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        }

        function connectDots1() {
            var pointx = mousePosition.x;
            for (var i = 0; i < dots.count; i++) {
                for (var j = 0; j < dots.count; j++) {
                    var i_dot = dots.array[i];
                    var j_dot = dots.array[j];

                    if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
                        if ((i_dot.x - pointx) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - pointx) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
                            ctx.beginPath();
                            ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }

        function drawDots() {
            for (var i = 0; i < dots.count; i++) {
                var dot = dots.array[i];
                dot.draw();
            }
        }

        function animateDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            moveDots();
            connectDots1()
            drawDots();

            requestAnimationFrame(animateDots);
        }
        //鼠标在canvas上移动
        canvas.addEventListener("mousemove", function (e) {
            mousePosition.x = e.pageX;
            mousePosition.y = e.pageY;
        });
        //鼠标移出canvas
        canvas.addEventListener("mouseleave", function (e) {
            mousePosition.x = canvas.width / 2;
            mousePosition.y = canvas.height / 2;
        });

        createDots();

        requestAnimationFrame(animateDots);
    };

    resizeCanvas() {
        var canvas = this.refs.canvasBanner;
        canvas.width = window.document.body.clientWidth;
        canvas.height = window.innerHeight * 1 / 3;
    };

    render() {
        return (
            <div>
                <canvas ref="canvasBanner" class="home-banner shadow"></canvas>
            </div>
        );
    };
}
