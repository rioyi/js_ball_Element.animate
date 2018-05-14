const ballKeyframes = [
	{transform: 'translateY(0px)'},
	//con los offset se manipula los tiempos
	{transform: 'translateY(-100px)', offset: 0.35},
	{transform: 'translateY(-120px)', offset: 0.6},
	{transform: 'translateY(-120px)', offset: 0.7},
	{transform: 'translateY(0px)'}
];


const shadowKeyframes = [
	{transform: 'scale(1)'},
	{transform: 'scale(0.5)', offset:0.35},
	{transform: 'scale(0.35', offset:0.6},
	{transform: 'scale(0.35)', offset:0.7},
	{transform: 'scale(1)'}
];

const config = {
	duration: 800,
	iterations: 1
	//iterations: 2,
	//easing: 'ease-in',
	//delay: 300
}

const ballAnimation = document.querySelector('.pelota').animate(ballKeyframes, config);

const shadowAnimation = document.querySelector('.shadow').animate(shadowKeyframes, config)

ballAnimation.pause();
shadowAnimation.pause();

document.addEventListener('click',()=>{
	//Al darle clic se va a reproducir las 2 animaciones.
	ballAnimation.play();
	shadowAnimation.play();
});